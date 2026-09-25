import Link from "next/link";

export default function ServiceCard({ service, detailed = false }) {
  return (
    <div className="ecs-card">
      <span className="ecs-card__icon">
        <i className={`bi ${service.icon}`} />
      </span>

      <h3 className="ecs-card__title">{service.title}</h3>
      <p className="ecs-card__text">
        {detailed ? service.description : service.short}
      </p>

      {detailed ? (
        <Link
          href={`/contact?subject=${encodeURIComponent(service.title)}`}
          className="link-arrow mt-3"
        >
          Learn More <i className="bi bi-arrow-right" />
        </Link>
      ) : null}
    </div>
  );
}
