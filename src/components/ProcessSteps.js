import { process as defaultProcess } from "@/data/stats";

export default function ProcessSteps({ steps = defaultProcess }) {
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-start gap-2 gap-lg-0">
      {steps.map((step, i) => (
        <div
          key={step.step}
          className="d-flex align-items-start"
          style={{ flex: "1 1 170px", maxWidth: 260 }}
        >
          <div className="ecs-process__step flex-grow-1">
            <span className="ecs-process__icon">
              <i className={`bi ${step.icon}`} />
              <span className="ecs-process__num">{step.step}</span>
            </span>
            <h4 className="ecs-process__title">{step.title}</h4>
            <p className="ecs-process__text">{step.text}</p>
          </div>

          {i < steps.length - 1 ? (
            <i className="bi bi-chevron-right ecs-process__arrow" />
          ) : null}
        </div>
      ))}
    </div>
  );
}
