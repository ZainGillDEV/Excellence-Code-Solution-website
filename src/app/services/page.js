import CTABanner from "@/components/CTABanner";
import ProcessSteps from "@/components/ProcessSteps";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { ServicesArt } from "@/components/Illustrations";
import { services } from "@/data/services";

export const metadata = {
  title: "Services",
  description:
    "From custom software to digital marketing, ECS offers a full range of services to help you innovate, grow and succeed.",
};

export default function ServicesPage() {
  return (
    <>
      {/* -------------------------------------------------------------- intro */}
      <section className="ecs-page-head">
        <span className="ecs-glow ecs-glow--tl" />

        <div className="ecs-container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 reveal">
              <span className="ecs-badge mb-3">
                <i className="bi bi-grid-3x3-gap" />
                Our Services
              </span>

              <h1 className="ecs-page-head__title mb-3">
                Complete <span className="text-gradient">Digital Solutions</span>
                <br className="d-none d-lg-block" /> for Your Business
              </h1>

              <p className="lead-muted mb-0">
                From custom software to digital marketing, we offer a full range
                of services to help you innovate, grow and succeed in the
                digital world.
              </p>
            </div>

            <div className="col-lg-6">
              <div className="ecs-hero__frame">
                <ServicesArt />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- services */}
      <section className="pb-5 pt-4">
        <div className="ecs-container">
          <div className="row g-4">
            {services.map((service) => (
              <div className="col-lg-4 col-md-6" key={service.slug}>
                <ServiceCard service={service} detailed />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ process */}
      <section className="section-padding bg-lilac">
        <div className="ecs-container">
          <SectionHeading
            eyebrow="How We Work"
            title="A Process Built Around Your Deadline"
            text="Same five steps on every engagement, so you always know what happens next."
            align="center"
            className="mb-5"
          />
          <ProcessSteps />
        </div>
      </section>

      {/* ----------------------------------------------------------------- cta */}
      <section className="py-5">
        <div className="ecs-container">
          <CTABanner
            title="Have a Project in Mind?"
            text="Let's turn your ideas into powerful digital solutions."
            icon="bi-rocket-takeoff"
          />
        </div>
      </section>
    </>
  );
}
