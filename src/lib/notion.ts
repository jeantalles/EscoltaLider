export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  cover?: string;
};

export type RichTextItem = {
  plain_text: string;
  annotations?: {
    bold?: boolean;
    italic?: boolean;
    code?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
  };
  href?: string | null;
};

export type NotionBlock = {
  id: string;
  type: string;
  has_children?: boolean;
  paragraph?: { rich_text: RichTextItem[] };
  heading_1?: { rich_text: RichTextItem[] };
  heading_2?: { rich_text: RichTextItem[] };
  heading_3?: { rich_text: RichTextItem[] };
  bulleted_list_item?: { rich_text: RichTextItem[] };
  numbered_list_item?: { rich_text: RichTextItem[] };
  quote?: { rich_text: RichTextItem[] };
  code?: { rich_text: RichTextItem[]; language?: string };
  image?: {
    type: "external" | "file";
    external?: { url: string };
    file?: { url: string };
    caption?: RichTextItem[];
  };
  divider?: Record<string, never>;
};

type NotionRichText = {
  plain_text?: string;
};

type NotionProperty = {
  title?: NotionRichText[];
  rich_text?: NotionRichText[];
  date?: {
    start?: string;
  };
};

type NotionCover = {
  type: "external" | "file";
  external?: { url: string };
  file?: { url: string };
};

type NotionPage = {
  id: string;
  created_time?: string;
  cover?: NotionCover;
  properties?: Record<string, NotionProperty>;
};

type NotionDatabaseResponse = {
  results?: NotionPage[];
};

function readText(property?: NotionProperty) {
  const text = property?.title ?? property?.rich_text ?? [];
  return text.map((item) => item.plain_text ?? "").join("");
}

function readProperty(
  properties: Record<string, NotionProperty>,
  names: string[],
) {
  const key = names.find((name) => properties[name]);
  return key ? properties[key] : undefined;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!token || !databaseId) {
    return [];
  }

  try {
    const response = await fetch(
      `https://api.notion.com/v1/databases/${databaseId}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "Notion-Version": "2022-06-28",
        },
        body: JSON.stringify({
          filter: {
            property: "Status",
            select: {
              equals: "Publicado",
            },
          },
          sorts: [
            {
              timestamp: "created_time",
              direction: "descending",
            },
          ],
        }),
        next: { revalidate: 900 },
      },
    );

    if (!response.ok) {
      return [];
    }

    const payload = (await response.json()) as NotionDatabaseResponse;

    return (payload.results ?? []).map((page) => {
      const properties = page.properties ?? {};
      const title =
        readText(readProperty(properties, ["Title", "Name", "Titulo"])) ||
        "Sem titulo";
      const slug =
        title
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
      const excerpt = readText(
        readProperty(properties, ["Excerpt", "Resumo", "Description"]),
      );
      const publishedAt = page.created_time
        ? new Date(page.created_time).toLocaleDateString("pt-BR")
        : undefined;
      const cover = page.cover?.external?.url || page.cover?.file?.url;

      return {
        id: page.id,
        title,
        slug,
        excerpt,
        publishedAt,
        cover,
      };
    });
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}

type NotionBlocksResponse = {
  results?: NotionBlock[];
};

export async function getPostBlocks(pageId: string): Promise<NotionBlock[]> {
  const token = process.env.NOTION_TOKEN;
  if (!token) return [];

  try {
    const response = await fetch(
      `https://api.notion.com/v1/blocks/${pageId}/children?page_size=100`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Notion-Version": "2022-06-28",
        },
        next: { revalidate: 900 },
      },
    );

    if (!response.ok) return [];

    const payload = (await response.json()) as NotionBlocksResponse;
    return payload.results ?? [];
  } catch {
    return [];
  }
}
