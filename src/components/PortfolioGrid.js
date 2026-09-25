"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { ProjectArt } from "./Illustrations";
import { categories as defaultCategories } from "@/data/projects";

export default function PortfolioGrid({ projects = [], categories = defaultCategories }) {
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active, projects]
  );

  return (
    <>
      <div className="ecs-filter mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`ecs-filter__btn${active === cat ? " is-active" : ""}`}
            aria-pressed={active === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="ecs-empty">
          No projects in this category yet — check back soon.
        </div>
      ) : (
        <div className="row g-4">
          {visible.map((project) => (
            <div className="col-lg-3 col-md-6" key={project.slug}>
              <article className="ecs-project">
                <div className="ecs-project__media">
                  <ProjectArt theme={project.theme} />
                  <span className="ecs-project__tag">{project.category}</span>
                </div>

                <div className="ecs-project__body">
                  <h3 className="ecs-project__title">{project.title}</h3>
                  <p className="ecs-project__text">{project.description}</p>

                  {project.result ? (
                    <p
                      className="mb-2 mt-1"
                      style={{
                        fontSize: "0.76rem",
                        fontWeight: 600,
                        color: "var(--ecs-primary)",
                      }}
                    >
                      <i className="bi bi-graph-up-arrow me-1" />
                      {project.result}
                    </p>
                  ) : null}

                  <Link
                    href={`/contact?subject=${encodeURIComponent(project.category)}`}
                    className="link-arrow mt-1"
                  >
                    View Project <i className="bi bi-arrow-right" />
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
