import Link from "next/link";
import { notFound } from "next/navigation";

import CTABanner from "@/components/CTABanner";
import { ProjectArt } from "@/components/Illustrations";
import { formatDate, getPost, posts } from "@/data/blog";
import { site } from "@/data/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return { title: "Post not found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

function Block({ block }) {
  switch (block.type) {
    case "h2":
      return <h2 className="ecs-article__h2">{block.text}</h2>;
    case "list":
      return (
        <ul className="ecs-article__list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="ecs-article__quote">
          <p>{block.text}</p>
          {block.cite ? <cite>— {block.cite}</cite> : null}
        </blockquote>
      );
    case "code":
      return (
        <pre className="ecs-article__code">
          <code>{block.text}</code>
        </pre>
      );
    default:
      return <p>{block.text}</p>;
  }
}

export default function BlogPostPage({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = posts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 1))
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: site.fullName },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <section className="ecs-page-head pb-0">
          <span className="ecs-glow ecs-glow--tl" />

          <div className="ecs-container">
            <nav aria-label="Breadcrumb" className="ecs-crumbs">
              <Link href="/">Home</Link>
              <i className="bi bi-chevron-right" />
              <Link href="/blog">Blog</Link>
              <i className="bi bi-chevron-right" />
              <span>{post.category}</span>
            </nav>

            <div className="ecs-article">
              <span className="ecs-post__meta mb-3">
                <span className="ecs-post__cat">{post.category}</span>
                <span>{formatDate(post.date)}</span>
                <span>·</span>
                <span>{post.readingTime}</span>
              </span>

              <h1 className="ecs-article__title">{post.title}</h1>
              <p className="lead-muted" style={{ maxWidth: "none" }}>
                {post.excerpt}
              </p>

              <div className="ecs-article__by">
                <span className="ecs-article__avatar">
                  <i className="bi bi-code-slash" />
                </span>
                <div>
                  <strong>{post.author}</strong>
                  <span>{site.fullName}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="ecs-container">
          <div className="ecs-article">
            <div className="ecs-article__hero">
              <ProjectArt theme={post.theme} />
            </div>

            <div className="ecs-article__body">
              {post.body.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>

            {post.tags?.length ? (
              <div className="ecs-article__tags">
                {post.tags.map((tag) => (
                  <span className="ecs-chip" key={tag}>
                    #{tag}
                  </span>
                ))}
              </div>
            ) : null}

            <Link href="/blog" className="link-arrow mt-4 d-inline-flex">
              <i className="bi bi-arrow-left" /> Back to all articles
            </Link>
          </div>
        </div>
      </article>

      {related.length ? (
        <section className="section-padding">
          <div className="ecs-container">
            <h2 className="mb-4" style={{ fontSize: "1.5rem" }}>
              Keep reading
            </h2>

            <div className="row g-4">
              {related.map((p) => (
                <div className="col-lg-4 col-md-6" key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="ecs-project d-flex">
                    <div className="ecs-project__media">
                      <ProjectArt theme={p.theme} />
                      <span className="ecs-project__tag">{p.category}</span>
                    </div>
                    <div className="ecs-project__body">
                      <h3 className="ecs-project__title">{p.title}</h3>
                      <p className="ecs-project__text">{p.excerpt}</p>
                      <span className="link-arrow mt-1">
                        Read More <i className="bi bi-arrow-right" />
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="pb-5">
        <div className="ecs-container">
          <CTABanner
            title="Have a project like this?"
            text="We're happy to talk it through, whether or not you end up working with us."
            buttonLabel="Get in Touch"
            icon="bi-chat-dots"
          />
        </div>
      </section>
    </>
  );
}
