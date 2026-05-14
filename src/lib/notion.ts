import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import type { BlogListItem, BlogPost } from "@/types/blog";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

export async function getBlogPosts(): Promise<BlogListItem[]> {
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!databaseId) return [];

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: { property: "Published", checkbox: { equals: true } },
      sorts: [{ property: "Date", direction: "descending" }],
    });

    return response.results.map((page) => {
      const p = page as Record<string, unknown> & { id: string; properties: Record<string, unknown> };
      const props = p.properties as Record<string, { type: string; title?: Array<{ plain_text: string }>; rich_text?: Array<{ plain_text: string }>; date?: { start: string }; files?: Array<{ type: string; file?: { url: string }; external?: { url: string } }> }>;

      const title = props.Title?.title?.[0]?.plain_text ?? "Sem título";
      const slug = props.Slug?.rich_text?.[0]?.plain_text ?? p.id;
      const date = props.Date?.date?.start ?? "";
      const excerpt = props.Excerpt?.rich_text?.[0]?.plain_text ?? "";
      const coverFile = props.Cover?.files?.[0];
      const cover = coverFile?.type === "file" ? coverFile.file?.url ?? null : coverFile?.external?.url ?? null;

      return { id: p.id, title, slug, date, excerpt, cover };
    });
  } catch {
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!databaseId) return null;

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          { property: "Slug", rich_text: { equals: slug } },
          { property: "Published", checkbox: { equals: true } },
        ],
      },
    });

    if (!response.results.length) return null;

    const page = response.results[0] as Record<string, unknown> & { id: string; properties: Record<string, unknown> };
    const props = page.properties as Record<string, { type: string; title?: Array<{ plain_text: string }>; rich_text?: Array<{ plain_text: string }>; date?: { start: string }; files?: Array<{ type: string; file?: { url: string }; external?: { url: string } }> }>;

    const title = props.Title?.title?.[0]?.plain_text ?? "Sem título";
    const date = props.Date?.date?.start ?? "";
    const excerpt = props.Excerpt?.rich_text?.[0]?.plain_text ?? "";
    const coverFile = props.Cover?.files?.[0];
    const cover = coverFile?.type === "file" ? coverFile.file?.url ?? null : coverFile?.external?.url ?? null;

    const mdBlocks = await n2m.pageToMarkdown(page.id);
    const content = n2m.toMarkdownString(mdBlocks).parent;

    return { id: page.id, title, slug, date, excerpt, cover, content };
  } catch {
    return null;
  }
}

export async function getAllSlugs(): Promise<string[]> {
  const posts = await getBlogPosts();
  return posts.map((p) => p.slug);
}
