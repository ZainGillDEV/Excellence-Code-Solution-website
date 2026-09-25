import { stats as defaultStats } from "@/data/stats";

export default function StatsBar({ items = defaultStats, showIcons = false }) {
  return (
    <div className="ecs-stats">
      <div className="row row-cols-2 row-cols-sm-4 g-0">
        {items.map((s) => (
          <div className="col ecs-stat-col" key={s.label}>
            <div className="ecs-stat">
              {showIcons && s.icon ? (
                <span className="ecs-stat__icon">
                  <i className={`bi ${s.icon}`} />
                </span>
              ) : null}
              <div className="ecs-stat__value">{s.value}</div>
              <div className="ecs-stat__label">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
