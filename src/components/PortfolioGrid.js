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

                  {project.stack?.length ? (
                    <div className="ecs-project__stack">
                      {project.stack.slice(0, 3).map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  ) : null}

                  {project.result ? (
                    <p className="ecs-project__result">
                      <i className="bi bi-graph-up-arrow" />
                      {project.result}
                    </p>
                  ) : null}

                  <div className="ecs-project__links">
                    {project.demo ? (
                      <a
                        href={project.demo}
                        className="ecs-project__btn is-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-box-arrow-up-right" />
                        Live Demo
                      </a>
                    ) : null}

                    {project.source ? (
                      <a
                        href={project.source}
                        className="ecs-project__btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-github" />
                        Source
                      </a>
                    ) : null}

                    {!project.demo && !project.source ? (
                      <Link
                        href={`/contact?subject=${encodeURIComponent(
                          project.category
                        )}`}
                        className="link-arrow"
                      >
                        Ask About This <i className="bi bi-arrow-right" />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
