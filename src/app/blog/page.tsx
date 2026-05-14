import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/notion";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos e novidades sobre transporte de cargas especiais, AET e escolta.",
};

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-[#FFFEFB] pt-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
        <div className="mb-12">
          <p className="text-[#FF7716] text-[16px] font-normal uppercase tracking-[2.99px] font-[Sora]">
            conteúdo
          </p>
          <h1 className="text-[#14394D] text-[48px] md:text-[60px] font-semibold leading-tight font-[Sora] mt-3">
            Blog
          </h1>
          <p className="text-[#14394D]/70 text-[18px] font-normal font-[Sora] mt-4 max-w-[600px]">
            Artigos sobre transporte de cargas especiais, legislação e as novidades da Escolta Lider.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-[#14394D]/50 text-[18px] font-normal font-[Sora]">
              Em breve, novos artigos.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-[15px] overflow-hidden border border-[#BFD6DE]/40 bg-white hover:shadow-lg transition-shadow"
              >
                {post.cover ? (
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-[#BFD6DE] flex items-center justify-center">
                    <div className="text-[#14394D]/30 text-[40px] font-semibold font-[Sora]">EL</div>
                  </div>
                )}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  {post.date && (
                    <p className="text-[#14394D]/50 text-[13px] font-normal font-[Sora]">
                      {formatDate(post.date)}
                    </p>
                  )}
                  <h2 className="text-[#14394D] text-[20px] font-semibold leading-snug font-[Sora] group-hover:text-[#FF7716] transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-[#14394D]/70 text-[15px] font-normal leading-relaxed font-[Sora] flex-1">
                      {post.excerpt}
                    </p>
                  )}
                  <p className="text-[#FF7716] text-[14px] font-semibold font-[Sora] mt-2">
                    Ler artigo →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
