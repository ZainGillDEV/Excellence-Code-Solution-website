import Link from "next/link";
import { notFound } from "next/navigation";

import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";
import { ServicesArt } from "@/components/Illustrations";
import { getService, services } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = getService(params.slug);
  if (!service) return { title: "Service not found" };

  return {
    title: service.title,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const d = service.detail || {};
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* -------------------------------------------------------------- hero */}
      <section className="ecs-page-head">
        <span className="ecs-glow ecs-glow--tl" />

        <div className="ecs-container">
          <nav aria-label="Breadcrumb" className="ecs-crumbs">
            <Link href="/">Home</Link>
            <i className="bi bi-chevron-right" />
            <Link href="/services">Services</Link>
            <i className="bi bi-chevron-right" />
            <span>{service.title}</span>
          </nav>

          <div className="row align-items-center g-5">
            <div className="col-lg-7 reveal">
              <span className="ecs-badge mb-3">
                <i className={`bi ${service.icon}`} />
                {service.title}
              </span>

              <h1 className="ecs-page-head__title mb-3">
                {d.tagline || service.short}
              </h1>

              <p className="lead-muted mb-4">{d.intro || service.description}</p>

              <div className="d-flex flex-wrap gap-2">
                <Link
                  href={`/contact?subject=${encodeURIComponent(service.title)}`}
                  className="btn-ecs"
                >
                  Discuss Your Project <i className="bi bi-arrow-right" />
                </Link>
                <Link href="/portfolio" className="btn-ecs-outline">
                  See Our Work
                </Link>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="ecs-hero__frame">
                <ServicesArt />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- offerings */}
      {d.offerings?.length ? (
        <section className="section-padding">
          <div className="ecs-container">
            <SectionHeading
              eyebrow="What We Do"
              title={`Inside our ${service.title.toLowerCase()} work`}
              text="The pieces that make up an engagement — pick the ones you need."
              align="center"
              className="mb-5"
            />

            <div className="row g-4">
              {d.offerings.map((item) => (
                <div className="col-lg-4 col-md-6" key={item.title}>
                  <div className="ecs-card">
                    <span className="ecs-card__icon">
                      <i className={`bi ${item.icon}`} />
                    </span>
                    <h3 className="ecs-card__title">{item.title}</h3>
                    <p className="ecs-card__text">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ---------------------------------------------------------- use cases */}
      {d.useCases?.length ? (
        <section className="section-padding bg-lilac">
          <div className="ecs-container">
            <SectionHeading
              eyebrow="Where It Helps"
              title="Problems this solves"
              align="center"
              className="mb-5"
            />

            <div className="row g-4">
              {d.useCases.map((item) => (
                <div className="col-md-6" key={item.title}>
                  <div className="ecs-feature-card">
                    <span className="ecs-feature-card__icon">
                      <i className={`bi ${item.icon}`} />
                    </span>
                    <div>
                      <h3 className="ecs-card__title mb-1">{item.title}</h3>
                      <p className="ecs-card__text">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ------------------------------------------------------------ process */}
      {d.process?.length ? (
        <section className="section-padding">
          <div className="ecs-container">
            <SectionHeading
              eyebrow="How We Work"
              title="From first call to running system"
              align="center"
              className="mb-5"
            />

            <ol className="ecs-steps">
              {d.process.map((step, i) => (
                <li key={step.title}>
                  <span className="ecs-steps__num">{i + 1}</span>
                  <div>
                    <h3 className="ecs-card__title mb-1">{step.title}</h3>
                    <p className="ecs-card__text">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {/* -------------------------------------------------------------- stack */}
      {d.stack?.length ? (
        <section className="section-padding-sm">
          <div className="ecs-container text-center">
            <p className="ecs-eyebrow">Tools We Use</p>
            <h2 className="mb-4" style={{ fontSize: "1.55rem" }}>
              The stack behind this service
            </h2>
            <div className="ecs-chips">
              {d.stack.map((tech) => (
                <span className="ecs-chip" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* --------------------------------------------------------------- faqs */}
      {d.faqs?.length ? (
        <section className="section-padding bg-lilac">
          <div className="ecs-container">
            <SectionHeading
              eyebrow="Questions"
              title="What clients ask us first"
              align="center"
              className="mb-5"
            />

            <div className="ecs-faq">
              {d.faqs.map((faq) => (
                <details key={faq.q} className="ecs-faq__item">
                  <summary>
                    {faq.q}
                    <i className="bi bi-plus-lg" />
                  </summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ------------------------------------------------------------ related */}
      <section className="section-padding">
        <div className="ecs-container">
          <SectionHeading
            eyebrow="Also From Us"
            title="Other services"
            align="center"
            className="mb-5"
          />

          <div className="row g-4">
            {related.map((s) => (
              <div className="col-lg-4 col-md-6" key={s.slug}>
                <Link href={`/services/${s.slug}`} className="ecs-card d-block">
                  <span className="ecs-card__icon">
                    <i className={`bi ${s.icon}`} />
                  </span>
                  <h3 className="ecs-card__title">{s.title}</h3>
                  <p className="ecs-card__text">{s.short}</p>
                  <span className="link-arrow mt-3">
                    Learn More <i className="bi bi-arrow-right" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-5">
        <div className="ecs-container">
          <CTABanner
            title={`Ready to start with ${service.title}?`}
            text="Tell us what you're trying to build and we'll come back with an approach and a number."
            buttonLabel="Get in Touch"
            href={`/contact?subject=${encodeURIComponent(service.title)}`}
            icon={service.icon}
          />
        </div>
      </section>
    </>
  );
}
