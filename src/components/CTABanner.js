import Link from "next/link";

export default function CTABanner({
  eyebrow,
  title = "Ready to Turn Your Idea Into a Digital Success?",
  text = "Get in touch with our team and let's discuss your project.",
  buttonLabel = "Get Started",
  href = "/contact",
  icon = "bi-send",
}) {
  return (
    <div className="ecs-cta">
      <div className="row align-items-center g-3">
        <div className="col-lg-8 d-flex align-items-center gap-3">
          {icon ? (
            <span className="ecs-cta__icon d-none d-sm-inline-flex">
              <i className={`bi ${icon}`} />
            </span>
          ) : null}
          <div>
            {eyebrow ? <p className="ecs-cta__eyebrow">{eyebrow}</p> : null}
            <h3 className="ecs-cta__title">{title}</h3>
            <p className="ecs-cta__text">{text}</p>
          </div>
        </div>

        <div className="col-lg-4 text-lg-end">
          <Link href={href} className="btn-ecs-light">
            {buttonLabel} <i className="bi bi-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}
