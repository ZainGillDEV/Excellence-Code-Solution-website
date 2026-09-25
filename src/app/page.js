import Link from "next/link";

import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import StatsBar from "@/components/StatsBar";
import { HeroArt } from "@/components/Illustrations";
import { services } from "@/data/services";

export const metadata = {
  title: "Turn Your Business Into Digital",
  description:
    "ECS builds modern, scalable software — web, mobile, AI and cloud solutions that help your business grow.",
};

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- hero */}
      <section className="ecs-hero">
        <span className="ecs-glow ecs-glow--tl" />
        <span className="ecs-glow ecs-glow--br" />

        <div className="ecs-container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 reveal">
              <span className="ecs-badge mb-3">
                <i className="bi bi-stars" />
                Innovative Software Solutions
              </span>

              <h1 className="ecs-hero__title">
                Turn Your Business
                <br />
                <span className="text-gradient">Into Digital</span>
              </h1>

              <p className="lead-muted mb-4">
                We build modern, scalable and innovative software solutions to
                help your business grow and succeed in the digital world.
              </p>

              <div className="d-flex flex-wrap gap-2">
                <Link href="/contact" className="btn-ecs">
                  Get Started <i className="bi bi-arrow-right" />
                </Link>
                <Link href="/services" className="btn-ecs-outline">
                  Our Services
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="position-relative">
                <div className="ecs-hero__blob">
                  <HeroArt />
                </div>

                <span
                  className="ecs-float-chip float-slow"
                  style={{ top: "12%", left: "-4%" }}
                >
                  <i className="bi bi-code-slash" />
                  Clean Code
                </span>
                <span
                  className="ecs-float-chip float-slow"
                  style={{ bottom: "10%", right: "-2%", animationDelay: "1.2s" }}
                >
                  <i className="bi bi-lightning-charge-fill" />
                  Fast Delivery
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <StatsBar />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ services */}
      <section className="section-padding">
        <div className="ecs-container">
          <SectionHeading
            eyebrow="Our Services"
            title={
              <>
                Everything You Need to Build
                <br className="d-none d-md-block" /> and Grow Your Business
              </>
            }
            text="From idea to launch, we provide end-to-end digital solutions that make your business future-ready."
            className="mb-5"
          />

          <div className="row g-4">
            {services.map((service) => (
              <div className="col-lg-3 col-md-6" key={service.slug}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link href="/services" className="btn-ecs-outline">
              View All Services <i className="bi bi-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- cta */}
      <section className="pb-5">
        <div className="ecs-container">
          <CTABanner eyebrow="Let's Build Something Great" />
        </div>
      </section>
    </>
  );
}
