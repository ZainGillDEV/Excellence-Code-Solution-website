import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";
import StatsBar from "@/components/StatsBar";
import { culture, initials, leadership, members } from "@/data/team";

export const metadata = {
  title: "Our Team",
  description:
    "The leadership, engineers, designers and strategists behind Excellence Code Solution.",
};

function Avatar({ member, size = 120 }) {
  if (member.photo) {
    // Plain <img>: the source may be a base64 data URI, which the Next.js
    // image optimiser cannot process.
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={member.photo}
        alt={`${member.name}, ${member.role}`}
        className="ecs-member__photo"
        style={{ width: size, height: size }}
        loading="lazy"
      />
    );
  }

  return (
    <span
      className="ecs-member__photo ecs-member__photo--empty"
      style={{ width: size, height: size, fontSize: size * 0.32 }}
      aria-hidden="true"
    >
      {initials(member.name)}
    </span>
  );
}

function LeaderCard({ member, mirrored }) {
  return (
    <div className={`ecs-leader${mirrored ? " is-mirrored" : ""}`}>
      <div className="ecs-leader__media">
        <Avatar member={member} size={mirrored ? 160 : 190} />
      </div>

      <div className="ecs-leader__body">
        <p className="ecs-eyebrow mb-2">
          {member.rank === 1 ? "Chief Executive" : "Management"}
        </p>
        <h2 className="mb-1" style={{ fontSize: mirrored ? "1.45rem" : "1.65rem" }}>
          {member.name}
        </h2>
        <p className="ecs-member__role mb-3">{member.role}</p>
        <p className="ecs-card__text mb-3" style={{ fontSize: "0.93rem" }}>
          {member.bio}
        </p>

        <div className="ecs-chips justify-content-start mb-3">
          {member.focus.map((f) => (
            <span className="ecs-chip" key={f}>
              {f}
            </span>
          ))}
        </div>

        <div className="d-flex gap-2">
          {member.socials?.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="ecs-social"
              aria-label={`${member.name} on ${s.label}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`bi ${s.icon}`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      {/* -------------------------------------------------------------- intro */}
      <section className="ecs-page-head">
        <span className="ecs-glow ecs-glow--tl" />

        <div className="ecs-container">
          <div className="text-center mx-auto" style={{ maxWidth: 720 }}>
            <span className="ecs-badge mb-3">
              <i className="bi bi-people" />
              Our Team
            </span>

            <h1 className="ecs-page-head__title mb-3">
              The People Behind{" "}
              <span className="text-gradient">Your Project</span>
            </h1>

            <p className="lead-muted mb-0 mx-auto">
              A small, senior team — engineers, designers and strategists who
              work directly with you rather than through a layer of account
              managers.
            </p>
          </div>

          <div className="mt-5">
            <StatsBar showIcons />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- leadership */}
      <section className="section-padding-sm">
        <div className="ecs-container">
          <SectionHeading
            eyebrow="Leadership"
            title="Who runs the work"
            align="center"
            className="mb-4"
          />

          <div className="d-grid gap-4">
            {leadership.map((member, i) => (
              <LeaderCard key={member.name} member={member} mirrored={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- the team */}
      <section className="section-padding pt-4">
        <div className="ecs-container">
          <SectionHeading
            eyebrow="The Team"
            title="Who you'll actually work with"
            text="No hand-off to a junior team after the pitch — these are the people on your project."
            align="center"
            className="mb-5"
          />

          <div className="row g-4">
            {members.map((member, i) => (
              <div className="col-lg-4 col-md-6" key={`${member.name}-${i}`}>
                <div className="ecs-member">
                  <Avatar member={member} />
                  <h3 className="ecs-member__name">{member.name}</h3>
                  <p className="ecs-member__role">{member.role}</p>
                  <p className="ecs-card__text">{member.bio}</p>

                  <div className="ecs-chips mt-3">
                    {member.focus.map((f) => (
                      <span className="ecs-chip" key={f}>
                        {f}
                      </span>
                    ))}
                  </div>

                  {member.socials?.length ? (
                    <div className="d-flex gap-2 justify-content-center mt-3">
                      {member.socials.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          className="ecs-social"
                          aria-label={`${member.name} on ${s.label}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={`bi ${s.icon}`} />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ culture */}
      <section className="section-padding bg-lilac">
        <div className="ecs-container">
          <SectionHeading
            eyebrow="How We Work"
            title="What it's like to work with us"
            align="center"
            className="mb-5"
          />

          <div className="row g-4">
            {culture.map((c) => (
              <div className="col-lg-3 col-md-6" key={c.title}>
                <div className="ecs-card">
                  <span className="ecs-card__icon">
                    <i className={`bi ${c.icon}`} />
                  </span>
                  <h3 className="ecs-card__title">{c.title}</h3>
                  <p className="ecs-card__text">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="ecs-container">
          <CTABanner
            eyebrow="We're Hiring"
            title="Want to join the team?"
            text="Send us your work — we read every message, and we reply."
            buttonLabel="Get in Touch"
            href="/contact?subject=Careers"
            icon="bi-person-plus"
          />
        </div>
      </section>
    </>
  );
}
