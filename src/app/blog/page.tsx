
import { getBlogPosts } from "@/lib/notion";

export const metadata = {
  title: "Blog | Escolta Lider",
  description: "Conteúdos e atualizações da Escolta Lider.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const [featured, ...rest] = posts;

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero-inner">
          <p className="eyebrow">Blog</p>
          <h1>Conteúdos da Escolta Lider.</h1>
        </div>
      </section>

      <div className="blog-content">
        {featured ? (
          <>
            <article className="blog-featured">
              <div className="blog-featured-image">
                <div className="blog-image-placeholder" aria-hidden="true" />
              </div>
              <div className="blog-featured-text">
                <p className="eyebrow">{featured.publishedAt ?? "Escolta Lider"}</p>
                <h2>{featured.title}</h2>
                {featured.excerpt && (
                  <p className="blog-featured-excerpt">{featured.excerpt}</p>
                )}
                <span className="blog-read-more">Ler artigo →</span>
              </div>
            </article>

            {rest.length > 0 && (
              <div className="blog-grid" aria-label="Mais posts">
                {rest.map((post) => (
                  <article className="blog-grid-card" key={post.id}>
                    <div className="blog-image-placeholder" aria-hidden="true" />
                    <span>{post.publishedAt ?? "Escolta Lider"}</span>
                    <h3>{post.title}</h3>
                    {post.excerpt && <p>{post.excerpt}</p>}
                  </article>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <article className="blog-featured">
              <div className="blog-featured-image">
                <div className="blog-image-placeholder" aria-hidden="true" />
              </div>
              <div className="blog-featured-text">
                <p className="eyebrow">Em breve</p>
                <h2>Post em destaque</h2>
                <p className="blog-featured-excerpt">
                  Conecte NOTION_TOKEN e NOTION_DATABASE_ID para publicar posts.
                </p>
              </div>
            </article>

            <div className="blog-grid">
              {[1, 2, 3].map((i) => (
                <article className="blog-grid-card" key={i}>
                  <div className="blog-image-placeholder" aria-hidden="true" />
                  <span>Em breve</span>
                  <h3>Post do blog</h3>
                  <p>Espaço reservado para conteúdos publicados via Notion.</p>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
