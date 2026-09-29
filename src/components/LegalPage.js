import Link from "next/link";

/**
 * Shared layout for the legal pages — a sticky contents list beside the
 * prose, so a long document stays navigable.
 */
export default function LegalPage({ title, updated, intro, sections }) {
  return (
    <>
      <section className="ecs-page-head pb-0">
        <span className="ecs-glow ecs-glow--tl" />

        <div className="ecs-container">
          <nav aria-label="Breadcrumb" className="ecs-crumbs">
            <Link href="/">Home</Link>
            <i className="bi bi-chevron-right" />
            <span>{title}</span>
          </nav>

          <h1 className="ecs-page-head__title mb-2">{title}</h1>
          <p className="ecs-legal__updated">Last updated: {updated}</p>
          <p className="lead-muted mb-0">{intro}</p>
        </div>
      </section>

      <section className="section-padding pt-4">
        <div className="ecs-container">
          <div className="ecs-legal">
            <aside className="ecs-legal__toc" aria-label="On this page">
              <p className="ecs-legal__toc-title">On this page</p>
              <ol>
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>{s.heading}</a>
                  </li>
                ))}
              </ol>
            </aside>

            <div className="ecs-legal__body">
              {sections.map((s) => (
                <section key={s.id} id={s.id}>
                  <h2>{s.heading}</h2>
                  {s.paragraphs?.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {s.list?.length ? (
                    <ul>
                      {s.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
