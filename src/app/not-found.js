import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="ecs-hero text-center">
      <span className="ecs-glow ecs-glow--tl" />
      <div className="ecs-container">
        <span className="ecs-badge mb-3">
          <i className="bi bi-compass" />
          Error 404
        </span>
        <h1 className="ecs-hero__title">
          This page took a <span className="text-gradient">wrong turn</span>
        </h1>
        <p className="lead-muted mx-auto mb-4">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back on track.
        </p>
        <div className="d-flex flex-wrap gap-2 justify-content-center">
          <Link href="/" className="btn-ecs">
            Back to Home <i className="bi bi-arrow-right" />
          </Link>
          <Link href="/contact" className="btn-ecs-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
