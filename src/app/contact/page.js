import { Suspense } from "react";

import CTABanner from "@/components/CTABanner";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact",
  description:
    "Have a project in mind or need support? Get in touch with the ECS team and we'll get back to you within 24 hours.",
};

const infoRows = [
  {
    icon: "bi-envelope",
    label: "Email Us",
    value: site.email,
    note: site.emailNote,
    href: `mailto:${site.email}`,
  },
  {
    icon: "bi-telephone",
    label: "Call Us",
    value: site.phone,
    note: site.phoneNote,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
  },
  {
    icon: "bi-geo-alt",
    label: "Office Address",
    value: site.address,
  },
  {
    icon: "bi-clock",
    label: "Working Hours",
    value: site.hours.join(" · "),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* -------------------------------------------------------------- intro */}
      <section className="ecs-page-head pb-2">
        <span className="ecs-glow ecs-glow--tl" />

        <div className="ecs-container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8 reveal">
              <span className="ecs-badge mb-3">
                <i className="bi bi-chat-dots" />
                Get In Touch
              </span>

              <h1 className="ecs-page-head__title mb-3">
                Let&apos;s Build Something
                <br className="d-none d-lg-block" />{" "}
                <span className="text-gradient">Great Together</span>
              </h1>

              <p className="lead-muted mb-0">
                Have a project in mind or need support? We&apos;d love to hear
                from you. Get in touch with our team and we&apos;ll get back to
                you as soon as possible.
              </p>
            </div>

            <div className="col-lg-4 text-lg-end">
              <span className="ecs-script-note">
                We&apos;re
                <br />
                Here to Help
                <br />
                <i className="bi bi-arrow-down" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ form and info */}
      <section className="pb-5 pt-4">
        <div className="ecs-container">
          <div className="row g-4">
            <div className="col-lg-7">
              <Suspense
                fallback={
                  <div className="ecs-form-card">
                    <p className="mb-0">Loading form…</p>
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>

            <div className="col-lg-5">
              <div className="ecs-info-card mb-4">
                {infoRows.map((row) => (
                  <div className="ecs-info-row" key={row.label}>
                    <span className="ecs-info-row__icon">
                      <i className={`bi ${row.icon}`} />
                    </span>
                    <div>
                      <div className="ecs-info-row__label">{row.label}</div>
                      {row.href ? (
                        <a
                          href={row.href}
                          className="ecs-info-row__value d-block"
                          style={{ color: "var(--ecs-primary)" }}
                        >
                          {row.value}
                        </a>
                      ) : (
                        <p className="ecs-info-row__value">{row.value}</p>
                      )}
                      {row.note ? (
                        <p
                          className="ecs-info-row__value mb-0"
                          style={{ color: "var(--ecs-muted)", fontSize: "0.74rem" }}
                        >
                          {row.note}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>

              <div className="ecs-map">
                <iframe
                  title="ECS office location"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    site.mapQuery
                  )}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- cta */}
      <section className="pb-5">
        <div className="ecs-container">
          <CTABanner
            title="Ready to Start Your Project?"
            text="Our team is always ready to help you build your next big idea."
            icon="bi-chat-square-text"
          />
        </div>
      </section>
    </>
  );
}
