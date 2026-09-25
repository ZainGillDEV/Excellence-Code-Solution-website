import Link from "next/link";

import ProcessSteps from "@/components/ProcessSteps";
import SectionHeading from "@/components/SectionHeading";
import StatsBar from "@/components/StatsBar";
import { TeamArt } from "@/components/Illustrations";

export const metadata = {
  title: "About Us",
  description:
    "ECS is a team of developers, designers and digital strategists building technology that makes a real difference.",
};

const values = [
  {
    icon: "bi-bullseye",
    title: "Our Mission",
    text: "To deliver high-quality, innovative and scalable digital solutions that empower businesses and create lasting value.",
  },
  {
    icon: "bi-eye",
    title: "Our Vision",
    text: "To be a global leader in technology solutions, recognised for our innovation, quality and commitment to client success.",
  },
];

const principles = [
  {
    icon: "bi-hand-thumbs-up",
    title: "Quality First",
    text: "Every line of code is reviewed, tested and built to last.",
  },
  {
    icon: "bi-clock-history",
    title: "On-Time Delivery",
    text: "Clear milestones and weekly demos — no surprises at the end.",
  },
  {
    icon: "bi-chat-square-heart",
    title: "Real Partnership",
    text: "We work as an extension of your team, not a distant vendor.",
  },
  {
    icon: "bi-shield-lock",
    title: "Security by Default",
    text: "Secure architecture and data handling from day one.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* -------------------------------------------------------------- intro */}
      <section className="ecs-page-head">
        <span className="ecs-glow ecs-glow--tl" />

        <div className="ecs-container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 reveal">
              <span className="ecs-badge mb-3">
                <i className="bi bi-people" />
                About Us
              </span>

              <h1 className="ecs-page-head__title mb-3">
                Building Innovative
                <br className="d-none d-lg-block" /> Solutions for a{" "}
                <span className="text-gradient">Better Tomorrow</span>
              </h1>

              <p className="lead-muted mb-4">
                We are a passionate team of developers, designers and digital
                strategists, dedicated to creating technology that makes a
                difference. Since our inception, we&apos;ve been helping
                businesses transform their ideas into powerful digital
                solutions.
              </p>

              <Link href="/portfolio" className="btn-ecs">
                Our Story <i className="bi bi-arrow-right" />
              </Link>
            </div>

            <div className="col-lg-6">
              <div className="ecs-hero__frame">
                <TeamArt />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- mission and vision */}
      <section className="py-4 py-md-5">
        <div className="ecs-container">
          <div className="row g-4">
            {values.map((v) => (
              <div className="col-md-6" key={v.title}>
                <div className="ecs-feature-card">
                  <span className="ecs-feature-card__icon">
                    <i className={`bi ${v.icon}`} />
                  </span>
                  <div>
                    <h3 className="ecs-card__title mb-1">{v.title}</h3>
                    <p className="ecs-card__text">{v.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <StatsBar showIcons />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ process */}
      <section className="section-padding bg-lilac">
        <div className="ecs-container">
          <SectionHeading
            eyebrow="Our Process"
            title="Our Proven 5-Step Process"
            text="We follow a structured and transparent process to ensure your project is delivered on time, on budget and beyond expectations."
            align="center"
            className="mb-5"
          />

          <ProcessSteps />
        </div>
      </section>

      {/* --------------------------------------------------------- principles */}
      <section className="section-padding">
        <div className="ecs-container">
          <SectionHeading
            eyebrow="Why ECS"
            title="What Working With Us Feels Like"
            text="The things our clients tell us they value most."
            align="center"
            className="mb-5"
          />

          <div className="row g-4">
            {principles.map((p) => (
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
    </>
  );
}
