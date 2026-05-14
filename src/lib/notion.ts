export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
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

type NotionPage = {
  id: string;
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
          sorts: [
            {
              property: "Published",
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
        readText(readProperty(properties, ["Slug", "slug"])) ||
        title
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
      const excerpt = readText(
        readProperty(properties, ["Excerpt", "Resumo", "Description"]),
      );
      const publishedAt = readProperty(properties, [
        "Published",
        "Published At",
        "Data",
      ])?.date?.start;

      return {
        id: page.id,
        title,
        slug,
        excerpt,
        publishedAt,
      };
    });
  } catch {
    return [];
  }
}
