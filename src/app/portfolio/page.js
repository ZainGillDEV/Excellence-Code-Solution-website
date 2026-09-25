import CTABanner from "@/components/CTABanner";
import PortfolioGrid from "@/components/PortfolioGrid";
import { categories, projects } from "@/data/projects";

export const metadata = {
  title: "Portfolio",
  description:
    "Featured projects and case studies — see how ECS has helped businesses build, grow and succeed with innovative digital solutions.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* -------------------------------------------------------------- intro */}
      <section className="ecs-page-head">
        <span className="ecs-glow ecs-glow--tl" />

        <div className="ecs-container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8 reveal">
              <span className="ecs-badge mb-3">
                <i className="bi bi-collection" />
                Our Work
              </span>

              <h1 className="ecs-page-head__title mb-3">
                Featured Projects &amp;{" "}
                <span className="text-gradient">Case Studies</span>
              </h1>

              <p className="lead-muted mb-0">
                Explore some of our latest work and see how we&apos;ve helped
                businesses build, grow and succeed with innovative digital
                solutions.
              </p>
            </div>

            <div className="col-lg-4">
              <div className="ecs-result-card">
                <div className="ecs-result-card__label">
                  Real Projects
                  <br />
                  Real Results
                </div>
                <i
                  className="bi bi-bar-chart-line ms-auto"
                  style={{ fontSize: "2rem", color: "var(--ecs-primary)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- projects */}
      <section className="pb-5 pt-4">
        <div className="ecs-container">
          <PortfolioGrid projects={projects} categories={categories} />
        </div>
      </section>

      {/* ----------------------------------------------------------------- cta */}
      <section className="pb-5">
        <div className="ecs-container">
          <CTABanner
            title="Want Results Like These?"
            text="Tell us what you're building and we'll show you how we'd approach it."
            buttonLabel="Start a Project"
            icon="bi-graph-up-arrow"
          />
        </div>
      </section>
    </>
  );
}
