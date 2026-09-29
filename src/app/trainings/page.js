import Link from "next/link";

import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";
import {
  formatStart,
  perks,
  statusLabel,
  trainings,
} from "@/data/trainings";

export const metadata = {
  title: "Trainings & Bootcamps",
  description:
    "Hands-on bootcamps in AI engineering, full-stack MERN and mobile development — taught by the engineers who build ECS projects.",
};

export default function TrainingsPage() {
  return (
    <>
      {/* -------------------------------------------------------------- intro */}
      <section className="ecs-page-head">
        <span className="ecs-glow ecs-glow--tl" />

        <div className="ecs-container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8 reveal">
              <span className="ecs-badge mb-3">
                <i className="bi bi-mortarboard" />
                Trainings & Bootcamps
              </span>

              <h1 className="ecs-page-head__title mb-3">
                Learn To Build It{" "}
                <span className="text-gradient">Properly</span>
              </h1>

              <p className="lead-muted mb-0">
                Practical bootcamps run by the engineers who build our client
                projects. Small cohorts, real deployments, and a portfolio you
                can show an employer at the end.
              </p>
            </div>

            <div className="col-lg-4">
              <div className="ecs-result-card">
                <div className="ecs-result-card__label">
                  {trainings.length} programmes
                  <br />
                  Limited seats
                </div>
                <i
                  className="bi bi-mortarboard-fill ms-auto"
                  style={{ fontSize: "2rem", color: "var(--ecs-primary)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- courses */}
      <section className="pb-5 pt-4">
        <div className="ecs-container">
          <div className="d-grid gap-4">
            {trainings.map((course) => {
              const badge = statusLabel[course.status] || statusLabel.closed;

              return (
                <article className="ecs-course" key={course.slug} id={course.slug}>
                  <div className="ecs-course__head">
                    <span className="ecs-course__icon">
                      <i className={`bi ${course.icon}`} />
                    </span>

                    <div className="flex-grow-1">
                      <div className="d-flex flex-wrap align-items-center gap-2 mb-1">
                        <span className={`ecs-status ${badge.className}`}>
                          <i className="bi bi-circle-fill" />
                          {badge.text}
                        </span>
                        {course.featured ? (
                          <span className="ecs-status is-featured">
                            Most popular
                          </span>
                        ) : null}
                      </div>

                      <h2 className="ecs-course__title">{course.title}</h2>
                      <p className="ecs-course__tagline">{course.tagline}</p>
                    </div>

                    <div className="ecs-course__price">
                      <strong>{course.price}</strong>
                      <span>{course.seats} seats</span>
                    </div>
                  </div>

                  <dl className="ecs-course__facts">
                    <div>
                      <dt>
                        <i className="bi bi-calendar-event" /> Starts
                      </dt>
                      <dd>{formatStart(course.startsOn)}</dd>
                    </div>
                    <div>
                      <dt>
                        <i className="bi bi-hourglass-split" /> Duration
                      </dt>
                      <dd>{course.duration}</dd>
                    </div>
                    <div>
                      <dt>
                        <i className="bi bi-geo-alt" /> Format
                      </dt>
                      <dd>{course.format}</dd>
                    </div>
                    <div>
                      <dt>
                        <i className="bi bi-clock" /> Commitment
                      </dt>
                      <dd>{course.commitment}</dd>
                    </div>
                    <div>
                      <dt>
                        <i className="bi bi-bar-chart-steps" /> Level
                      </dt>
                      <dd>{course.level}</dd>
                    </div>
                  </dl>

                  <p className="ecs-course__summary">{course.summary}</p>

                  <div className="row g-4">
                    <div className="col-lg-6">
                      <h3 className="ecs-course__sub">What you'll be able to do</h3>
                      <ul className="ecs-ticks">
                        {course.outcomes.map((o) => (
                          <li key={o}>
                            <i className="bi bi-check-circle-fill" />
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-lg-6">
                      <h3 className="ecs-course__sub">Week by week</h3>
                      <ul className="ecs-weeks">
                        {course.syllabus.map((s) => (
                          <li key={s.week}>
                            <span className="ecs-weeks__tag">{s.week}</span>
                            <div>
                              <strong>{s.title}</strong>
                              <p>{s.text}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="ecs-course__foot">
                    <div>
                      <h3 className="ecs-course__sub mb-2">
                        Who it&apos;s for &amp; what you need
                      </h3>
                      <p className="ecs-card__text mb-2">{course.audience}</p>
                      <div className="ecs-chips justify-content-start">
                        {course.requirements.map((r) => (
                          <span className="ecs-chip" key={r}>
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/contact?subject=${encodeURIComponent(
                        "Training & Bootcamps"
                      )}`}
                      className="btn-ecs flex-shrink-0"
                    >
                      {course.status === "open" ? "Apply Now" : "Join Waitlist"}
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- perks */}
      <section className="section-padding bg-lilac">
        <div className="ecs-container">
          <SectionHeading
            eyebrow="Why Train With Us"
            title="Built around getting you hired"
            align="center"
            className="mb-5"
          />

          <div className="row g-4">
            {perks.map((p) => (
              <div className="col-lg-3 col-md-6" key={p.title}>
                <div className="ecs-card">
                  <span className="ecs-card__icon">
                    <i className={`bi ${p.icon}`} />
                  </span>
                  <h3 className="ecs-card__title">{p.title}</h3>
                  <p className="ecs-card__text">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="ecs-container">
          <CTABanner
            title="Not sure which programme fits?"
            text="Tell us your background and what you want to build — we'll point you at the right one, or tell you if none of them fit."
            buttonLabel="Ask Us"
            href="/contact?subject=Training%20%26%20Bootcamps"
            icon="bi-mortarboard"
          />
        </div>
      </section>
    </>
  );
}
