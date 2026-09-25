export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "start",
  className = "",
}) {
  const alignClass =
    align === "center" ? "text-center mx-auto" : "text-start";

  return (
    <div
      className={`${alignClass} ${className}`}
      style={align === "center" ? { maxWidth: 680 } : undefined}
    >
      {eyebrow ? <p className="ecs-eyebrow mb-2">{eyebrow}</p> : null}
      {title ? <h2 className="mb-2">{title}</h2> : null}
      {text ? (
        <p
          className="lead-muted mb-0"
          style={align === "center" ? { marginInline: "auto" } : undefined}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
