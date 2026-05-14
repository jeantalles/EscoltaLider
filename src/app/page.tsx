/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { getInstagramPosts } from "@/lib/instagram";
import { getBlogPosts } from "@/lib/notion";

const services = [
  {
    title: "Autorização especial de trânsito (AET)",
    text: "Atuamos na emissão de autorizações junto ao DNIT, DER-MG, DER-SP e demais estados a nível Brasil.",
  },
  {
    title: "Escolta de cargas especiais",
    text: "Equipe experiente, frota conservada e protocolo definido. Do início da rota até a entrega no destino.",
  },
  {
    title: "Análise e viabilidade de rota",
    text: "Viabilizamos o transporte de qualquer tipo de carga superdimensionada por meio de Estudos de Viabilidade Geométrica, realizados junto às concessionárias e órgãos públicos, em âmbito nacional, para cargas de todas as dimensões.",
  },
  {
    title: "Assessoria operacional",
    text: "Oferecemos assessoria completa no transporte de cargas superdimensionadas, abrangendo desde a documentação até a escolta credenciada.",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Entendimento da operação",
    text: "Tipo de carga, dimensões, trajeto e prazo.",
  },
  {
    number: "2",
    title: "Viabilidade e rota",
    text: "Verificamos cada restrição do trecho antes de emitir qualquer autorização.",
  },
  {
    number: "3",
    title: "Autorização e documentação",
    text: "Tramitamos junto ao DNIT e órgãos estaduais. Documento pronto para rodar.",
  },
  {
    number: "4",
    title: "Execução e acompanhamento",
    text: "Equipe disponível 24h, com linha direta ao motorista durante toda a viagem.",
  },
];

const states = [
  "Minas Gerais — sede",
  "Goiás",
  "São Paulo",
  "Rio de Janeiro",
  "Espírito Santo",
  "Mato Grosso do Sul",
  "Bahia",
];

const testimonials = [
  {
    text: "Toda vez que fui atendido pela Escolta Líder, tive uma experiência muito positiva. A equipe é bem instruída, educada e ágil, com veículos novos e ótimo suporte nas viagens.",
    name: "Pedro",
    company: "Fagundes Mineração",
  },
  {
    text: "A Escolta Líder presta um ótimo serviço de escolta com segurança, profissionalismo e eficiência. Agradecemos à equipe pela qualidade e agilidade dos serviços prestados.",
    name: "Narzelio",
    company: "Consórcio Mina Fábrica",
  },
  {
    text: "Em nome da empresa Nova Luz, expresso a satisfação com o excelente trabalho realizado pela Escolta Líder na assessoria ao transporte de cargas e máquinas de grande porte, essencial para o sucesso das operações e garantindo a integridade das cargas.\n\nDestaco o profissionalismo, a responsabilidade e a eficiência em todas as operações, assegurando segurança e organização nos trajetos para diversas cidades e estados, e parabenizo toda a equipe da Escolta Lider pelo comprometimento e excelência nos serviços prestados.",
    name: "Kadu",
    company: "Nova Luz - NLZ",
  },
];

export default async function Home() {
  const [instagramPosts, blogPosts] = await Promise.all([
    getInstagramPosts(3),
    getBlogPosts(),
  ]);
  const homeBlogPosts = blogPosts.slice(0, 3);

  return (
    <main className="site-page">
      <section className="hero-section" id="inicio" aria-label="Escolta Lider">
        <img
          className="hero-bg"
          src="/images/escolta-lider/hero-session-bg.jpg"
          alt=""
        />
        <div className="hero-gradient hero-gradient-a" />
        <div className="hero-gradient hero-gradient-b" />

        <header className="site-header">
          <Link href="#inicio" className="brand-link" aria-label="Escolta Lider">
            <img
              className="brand-logo"
              src="/images/escolta-lider/logo-branco.svg"
              alt="Escolta Lider"
            />
          </Link>
          <nav className="main-nav" aria-label="Principal">
            <Link href="#sobre">Sobre</Link>
            <Link href="#servicos">Serviços</Link>
            <Link href="#processo">Como trabalhamos</Link>
            <Link href="#area">Área de atuação</Link>
            <Link href="#blog">Blog</Link>
            <Link href="#contato">Contato</Link>
          </nav>
          <Link href="#contato" className="header-cta">
            Solicitar orçamento
          </Link>
        </header>

        <div className="hero-card">
          <p className="eyebrow hero-eyebrow">Escolta de cargas especiais</p>
          <h1>O caminho mais seguro entre sua carga e o destino.</h1>
          <p className="hero-copy">
            <strong>Especialistas em transporte de cargas excedentes.</strong>
            <span>
              Cuidamos de tudo, da AET até a chegada ao destino, com
              comprometimento e agilidade em cada etapa.
            </span>
          </p>
          <div className="hero-actions">
            <Link href="#contato" className="btn btn-dark">
              Solicitar orçamento
            </Link>
            <Link href="#processo" className="btn btn-light">
              Como trabalhamos
            </Link>
          </div>
        </div>
      </section>

      <section className="about-section" id="sobre">
        <p className="eyebrow section-eyebrow centered">Quem somos</p>
        <h2>
          Sua carga nas mãos certas
          <span> desde 2006.</span>
        </h2>
        <div className="about-media">
          <img
            src="/images/escolta-lider/imagem-carro.jpg"
            alt="Veículo de escolta da Escolta Lider em estrada de montanha"
          />
        </div>
        <div className="about-text">
          <p className="lead">
            Há mais de 20 anos, a Escolta Lider atua no transporte de cargas
            especiais com foco em comprometimento, confiança e entrega.
          </p>
          <p>
            Nascemos de dentro do setor, e é por isso que sabemos o que o
            cliente precisa antes mesmo de pedir. Trabalhamos com autorização
            especial de trânsito e escolta. Os dois serviços que precisam andar
            juntos para que a operação feche sem falha.
          </p>
          <p>
            Mais do que prestar um serviço, a Escolta Líder assume a
            responsabilidade por cada trajeto, garantindo que a operação
            aconteça com seriedade, controle e total segurança.
          </p>
        </div>
      </section>

      <section className="services-section" id="servicos">
        <div className="section-inner">
          <p className="eyebrow dark">O que fazemos</p>
          <h2>Da autorização à estrada, um único parceiro.</h2>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section" id="processo">
        <img
          className="process-watermark"
          src="/images/escolta-lider/watermark-processo.svg"
          alt=""
        />
        <div className="section-inner">
          <p className="eyebrow">Processo</p>
          <div className="process-heading">
            <h2>Nosso protocolo para cada operação.</h2>
            <p>
              Antes de iniciar qualquer operação, a gente entende o que você
              realmente precisa.
            </p>
          </div>
          <div className="process-panel">
            <div className="process-line" />
            <div className="process-grid">
              {processSteps.map((step) => (
                <article className="process-card" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="coverage-section" id="area">
        <div className="section-inner">
          <h2>
            De Minas ao Brasil.
            <span>A gente conhece cada rota.</span>
          </h2>
          <p className="coverage-copy">
            <strong>Atuamos em todo o território brasileiro.</strong>
            Para garantir agilidade na operação, concentramos nossa estrutura de
            prontidão nos estados que representam os maiores polos logísticos do
            país:
          </p>
          <ul className="state-list">
            {states.map((state) => (
              <li key={state}>{state}</li>
            ))}
          </ul>
          <img
            className="brazil-map"
            src="/images/escolta-lider/mapa-do-brasil.svg"
            alt="Mapa do Brasil com estados de atuação destacados"
          />
        </div>
      </section>

      <section className="testimonials-section">
        <img
          className="testimonials-watermark"
          src="/images/escolta-lider/watermark-depoimentos.svg"
          alt=""
        />
        <div className="section-inner">
          <p className="eyebrow white">O que dizem sobre nós</p>
          <h2>Uma reputação que se constrói viagem a viagem.</h2>
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <article
                className={`testimonial-card testimonial-card-${index + 1}`}
                key={testimonial.name}
              >
                <img
                  className="quote-icon"
                  src="/images/escolta-lider/icone-de-aspas.svg"
                  alt=""
                />
                <p>{testimonial.text}</p>
                <footer>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.company}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <img
          className="contact-bg"
          src="/images/escolta-lider/imagem-do-carro-bg.jpg"
          alt=""
        />
        <div className="contact-fade contact-fade-left" />
        <div className="contact-fade contact-fade-bottom" />
        <div className="section-inner contact-content">
          <h2>Fale conosco e transporte sua carga com segurança.</h2>
          <div className="contact-list">
            <div className="contact-item">
              <span className="contact-icon">
                <img
                  src="/images/escolta-lider/whatsapp-icone.svg"
                  alt=""
                />
              </span>
              <p>
                <span>WhatsApp</span>
                <strong>(31) 97248-9605</strong>
              </p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <img src="/images/escolta-lider/mail-icone.svg" alt="" />
              </span>
              <p>
                <span>E-mail</span>
                <strong>escoltalider@escoltalider.com.br</strong>
              </p>
            </div>
          </div>
          <a
            className="whatsapp-button"
            href="https://wa.me/5531972489605"
            target="_blank"
            rel="noreferrer"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      <section
        className="home-blog-section"
        id="blog"
        aria-labelledby="home-blog-title"
      >
        <div className="section-inner">
          <p className="eyebrow dark">Blog</p>
          <h2 id="home-blog-title">Conteúdos para quem vive a estrada.</h2>
          <div className="home-blog-grid">
            {homeBlogPosts.length ? (
              homeBlogPosts.map((post) => (
                <article className="home-blog-card" key={post.id}>
                  <div className="blog-image-placeholder" aria-hidden="true" />
                  <span>{post.publishedAt ?? "Escolta Lider"}</span>
                  <h3>{post.title}</h3>
                  {post.excerpt ? <p>{post.excerpt}</p> : null}
                </article>
              ))
            ) : (
              [1, 2, 3].map((item) => (
                <article
                  className="home-blog-card home-blog-card-empty"
                  key={item}
                >
                  <div className="blog-image-placeholder" aria-hidden="true" />
                  <span>Em breve</span>
                  <h3>Post do blog</h3>
                  <p>
                    Espaço reservado para conteúdos publicados pelo Notion.
                  </p>
                </article>
              ))
            )}
          </div>
          <Link href="/blog" className="home-blog-link">
            Ver todos os posts
          </Link>
        </div>
      </section>

      <section className="instagram-section" aria-labelledby="instagram-title">
        <div className="instagram-panel">
          <h2 id="instagram-title">Siga a Lider.</h2>
          <p>@escolta_lider</p>
          <div className="instagram-grid">
            {instagramPosts.map((post, index) => {
              const label = post.label ?? `post ${index + 1}`;
              const media = post.thumbnailUrl ?? post.mediaUrl;
              const content = post.embedUrl ? (
                <iframe
                  src={post.embedUrl}
                  title={`Instagram ${label} - Escolta Lider`}
                  loading="eager"
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : media ? (
                <img src={media} alt={post.caption ?? label} />
              ) : (
                <span>{label}</span>
              );

              return post.permalink ? (
                <a
                  className="instagram-post"
                  href={post.permalink}
                  key={post.id}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div className="instagram-post" key={post.id}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <p>O caminho mais seguro entre sua carga e o destino.</p>
        <img
          className="footer-logo"
          src="/images/escolta-lider/logo-branco.svg"
          alt="Escolta Lider"
        />
        <p className="copyright">
          © 2026 Escolta Lider.
          <span>Todos os direitos reservados.</span>
        </p>
      </footer>
    </main>
  );
}
