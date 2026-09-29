"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { ProjectArt } from "./Illustrations";
import { categories as defaultCategories, formatDate } from "@/data/blog";

export default function BlogGrid({ posts = [], categories = defaultCategories }) {
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () => (active === "All" ? posts : posts.filter((p) => p.category === active)),
    [active, posts]
  );

  const [lead, ...rest] = visible;

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

      {!visible.length ? (
        <div className="ecs-empty">
          No posts in this category yet — check back soon.
        </div>
      ) : (
        <>
          {/* lead post */}
          <Link href={`/blog/${lead.slug}`} className="ecs-post-lead mb-4">
            <div className="ecs-post-lead__media">
              <ProjectArt theme={lead.theme} />
            </div>
            <div className="ecs-post-lead__body">
              <span className="ecs-post__meta">
                <span className="ecs-post__cat">{lead.category}</span>
                <span>{formatDate(lead.date)}</span>
                <span>·</span>
                <span>{lead.readingTime}</span>
              </span>
              <h2 className="ecs-post-lead__title">{lead.title}</h2>
              <p className="ecs-post__excerpt">{lead.excerpt}</p>
              <span className="link-arrow mt-2">
                Read Article <i className="bi bi-arrow-right" />
              </span>
            </div>
          </Link>

          {/* the rest */}
          <div className="row g-4">
            {rest.map((post) => (
              <div className="col-lg-4 col-md-6" key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="ecs-project d-flex">
                  <div className="ecs-project__media">
                    <ProjectArt theme={post.theme} />
                    <span className="ecs-project__tag">{post.category}</span>
                  </div>

                  <div className="ecs-project__body">
                    <span className="ecs-post__meta mb-2">
                      <span>{formatDate(post.date)}</span>
                      <span>·</span>
                      <span>{post.readingTime}</span>
                    </span>
                    <h3 className="ecs-project__title">{post.title}</h3>
                    <p className="ecs-project__text">{post.excerpt}</p>
                    <span className="link-arrow mt-1">
                      Read More <i className="bi bi-arrow-right" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
