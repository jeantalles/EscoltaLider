import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { getBlogPost, getAllSlugs } from "@/lib/notion";

export const revalidate = 3600;

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.cover ? [{ url: post.cover }] : [],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#FFFEFB] pt-24">
      <article className="max-w-[800px] mx-auto px-6 lg:px-10 py-16">
        <Link
          href="/blog"
          className="text-[#FF7716] text-[15px] font-semibold font-[Sora] hover:underline mb-8 inline-block"
        >
          ← Voltar ao Blog
        </Link>

        {post.cover && (
          <div className="relative aspect-video w-full rounded-[15px] overflow-hidden mb-8">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {post.date && (
          <p className="text-[#14394D]/50 text-[14px] font-normal font-[Sora] mb-3">
            {formatDate(post.date)}
          </p>
        )}

        <h1 className="text-[#14394D] text-[36px] md:text-[48px] font-semibold leading-tight font-[Sora] mb-8">
          {post.title}
        </h1>

        <div className="blog-body prose prose-lg max-w-none prose-headings:text-[#14394D] prose-p:text-[#14394D] prose-a:text-[#FF7716] prose-strong:text-[#14394D]">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
