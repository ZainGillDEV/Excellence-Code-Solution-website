import Link from "next/link";

import Logo from "./Logo";
import { navLinks, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="ecs-footer">
      <div className="ecs-container">
        <div className="row align-items-center g-3">
          <div className="col-lg-3 col-md-4">
            <Logo size={46} />
          </div>

          <div className="col-lg-6 col-md-8">
            <ul className="nav justify-content-md-center justify-content-start">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.href}>
                  <Link href={link.href} className="nav-link ecs-footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 d-flex gap-2 justify-content-lg-end">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="ecs-social"
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`bi ${s.icon}`} />
              </a>
            ))}
          </div>
        </div>

        <hr style={{ borderColor: "var(--ecs-border)", opacity: 1 }} />

        <p className="ecs-copy text-center mb-0">
          © {new Date().getFullYear()} {site.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
