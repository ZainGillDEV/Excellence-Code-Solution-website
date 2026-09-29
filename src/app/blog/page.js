import BlogGrid from "@/components/BlogGrid";
import CTABanner from "@/components/CTABanner";
import { categories, posts } from "@/data/blog";

export const metadata = {
  title: "Blog",
  description:
    "Notes from the ECS team on AI, web and mobile engineering, design and running software projects well.",
};

export default function BlogPage() {
  return (
    <>
      <section className="ecs-page-head">
        <span className="ecs-glow ecs-glow--tl" />

        <div className="ecs-container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8 reveal">
              <span className="ecs-badge mb-3">
                <i className="bi bi-journal-text" />
                Our Blog
              </span>

              <h1 className="ecs-page-head__title mb-3">
                Notes From The <span className="text-gradient">Build</span>
              </h1>

              <p className="lead-muted mb-0">
                What we have learned shipping AI, web and mobile projects — the
                practical parts, written for the people who have to live with
                the decisions.
              </p>
            </div>

            <div className="col-lg-4">
              <div className="ecs-result-card">
                <div className="ecs-result-card__label">
                  {posts.length} articles
                  <br />
                  No fluff
                </div>
                <i
                  className="bi bi-pencil-square ms-auto"
                  style={{ fontSize: "2rem", color: "var(--ecs-primary)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-5 pt-4">
        <div className="ecs-container">
          <BlogGrid posts={posts} categories={categories} />
        </div>
      </section>

      <section className="pb-5">
        <div className="ecs-container">
          <CTABanner
            title="Want us to look at your project?"
            text="Tell us what you're building — we'll tell you how we'd approach it."
            buttonLabel="Start a Conversation"
            icon="bi-chat-square-text"
          />
        </div>
      </section>
    </>
  );
}
