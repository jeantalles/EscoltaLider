/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { getBlogPosts } from "@/lib/notion";

export const metadata = {
  title: "Blog | Escolta Lider",
  description: "Conteúdos e atualizações da Escolta Lider.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="blog-page">
      <header className="blog-header">
        <Link href="/" aria-label="Voltar para a Home">
          <img src="/images/escolta-lider/logo-branco.svg" alt="Escolta Lider" />
        </Link>
      </header>

      <section className="blog-hero">
        <p className="eyebrow">Blog</p>
        <h1>Conteúdos da Escolta Lider.</h1>
      </section>

      <section className="blog-list" aria-label="Posts do blog">
        {posts.length ? (
          posts.map((post) => (
            <article className="blog-card" key={post.id}>
              <div className="blog-image-placeholder" aria-hidden="true" />
              <p>{post.publishedAt}</p>
              <h2>{post.title}</h2>
              {post.excerpt ? <span>{post.excerpt}</span> : null}
            </article>
          ))
        ) : (
          <article className="blog-card blog-card-empty">
            <div className="blog-image-placeholder" aria-hidden="true" />
            <p>Em breve</p>
            <h2>Posts do blog</h2>
            <span>
              Conecte `NOTION_TOKEN` e `NOTION_DATABASE_ID` para publicar posts.
            </span>
          </article>
        )}
      </section>
    </main>
  );
}
