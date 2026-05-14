"use client";

import { useEffect, useState } from "react";
import InstagramPostCard from "@/components/ui/InstagramPostCard";
import type { InstagramPost } from "@/types/instagram";

export default function InstagramSection() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/instagram")
      .then((r) => r.json())
      .then((data: InstagramPost[]) => setPosts(data))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-[#FFFEFB] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1346px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-[#14394D] text-[40px] md:text-[48px] font-semibold leading-tight font-[Sora]">
              Siga a Lider.
            </h2>
            <a
              href="https://instagram.com/escolta_lider"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF7716] text-[18px] font-normal font-[Sora] hover:underline"
            >
              @escolta_lider
            </a>
          </div>
          <a
            href="https://instagram.com/escolta_lider"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#14394D]/60 text-[15px] font-semibold font-[Sora] hover:text-[#FF7716] transition-colors whitespace-nowrap flex-shrink-0"
          >
            Ver perfil →
          </a>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-[12px] bg-[#BFD6DE]/40 animate-pulse" />
            ))}
          </div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {posts.map((post) => (
              <InstagramPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-[12px] bg-[#BFD6DE]/30 flex items-center justify-center border-2 border-dashed border-[#BFD6DE]"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="#14394D" opacity="0.3"/>
                </svg>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
