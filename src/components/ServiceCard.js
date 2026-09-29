import Link from "next/link";

export default function ServiceCard({ service, detailed = false }) {
  const href = `/services/${service.slug}`;

  const body = (
    <>
      <span className="ecs-card__icon">
        <i className={`bi ${service.icon}`} />
      </span>

      <h3 className="ecs-card__title">{service.title}</h3>
      <p className="ecs-card__text">
        {detailed ? service.description : service.short}
      </p>

      {detailed ? (
        <span className="link-arrow mt-3">
          Learn More <i className="bi bi-arrow-right" />
        </span>
      ) : null}
    </>
  );

  if (detailed) {
    return (
      <Link href={href} className="ecs-card d-block">
        {body}
      </Link>
    );
  }

  return <div className="ecs-card">{body}</div>;
}
