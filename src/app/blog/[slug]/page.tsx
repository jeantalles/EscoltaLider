import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getBlogPosts, getPostBySlug, getPostBlocks } from "@/lib/notion";
import type { NotionBlock, RichTextItem } from "@/lib/notion";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Escolta Lider`,
    description: post.excerpt,
  };
}

function richText(items: RichTextItem[]): React.ReactNode {
  return items.map((item, i) => {
    let node: React.ReactNode = item.plain_text;
    if (item.annotations?.code) node = <code key={i}>{node}</code>;
    if (item.annotations?.bold) node = <strong key={i}>{node}</strong>;
    if (item.annotations?.italic) node = <em key={i}>{node}</em>;
    if (item.annotations?.strikethrough) node = <s key={i}>{node}</s>;
    if (item.annotations?.underline) node = <u key={i}>{node}</u>;
    if (item.href) node = <a key={i} href={item.href} target="_blank" rel="noopener noreferrer">{node}</a>;
    return <span key={i}>{node}</span>;
  });
}

function Block({ block, coverUrl }: { block: NotionBlock; coverUrl?: string }) {
  switch (block.type) {
    case "paragraph":
      return block.paragraph?.rich_text.length ? (
        <p className="post-p">{richText(block.paragraph.rich_text)}</p>
      ) : (
        <div className="post-spacer" />
      );
    case "heading_1":
      return (
        <h1 className="post-h1">{richText(block.heading_1?.rich_text ?? [])}</h1>
      );
    case "heading_2":
      return (
        <h2 className="post-h2">{richText(block.heading_2?.rich_text ?? [])}</h2>
      );
    case "heading_3":
      return (
        <h3 className="post-h3">{richText(block.heading_3?.rich_text ?? [])}</h3>
      );
    case "bulleted_list_item":
      return (
        <li className="post-li">{richText(block.bulleted_list_item?.rich_text ?? [])}</li>
      );
    case "numbered_list_item":
      return (
        <li className="post-li post-li-ordered">{richText(block.numbered_list_item?.rich_text ?? [])}</li>
      );
    case "quote":
      return (
        <blockquote className="post-quote">
          {richText(block.quote?.rich_text ?? [])}
        </blockquote>
      );
    case "code":
      return (
        <pre className="post-code">
          <code>{richText(block.code?.rich_text ?? [])}</code>
        </pre>
      );
    case "divider":
      return <hr className="post-divider" />;
    case "image": {
      const url =
        block.image?.type === "external"
          ? block.image.external?.url
          : block.image?.file?.url;
      const caption = block.image?.caption ?? [];
      if (!url || url === coverUrl) return null;
      return (
        <figure className="post-figure">
          <img src={url} alt={caption.map((c) => c.plain_text).join("") || ""} className="post-img" />
          {caption.length > 0 && (
            <figcaption className="post-figcaption">{richText(caption)}</figcaption>
          )}
        </figure>
      );
    }
    default:
      return null;
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const blocks = await getPostBlocks(post.id);

  return (
    <main className="post-page">
      <div className="post-header">
        {post.publishedAt && (
          <p className="post-date eyebrow">{post.publishedAt}</p>
        )}
        <h1 className="post-title">{post.title}</h1>
      </div>

      {post.cover && (
        <div className="post-cover-wrap">
          <img
            src={post.cover}
            alt={post.title}
            className="post-cover"
          />
        </div>
      )}

      <article className="post-body">
        {blocks.map((block) => (
          <Block key={block.id} block={block} coverUrl={post.cover} />
        ))}
      </article>

      <div className="post-back-wrap">
        <Link href="/blog" className="post-back">
          ← Voltar ao blog
        </Link>
      </div>
    </main>
  );
}
