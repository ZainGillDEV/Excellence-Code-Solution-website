import Link from "next/link";

import Logo from "./Logo";
import { footerNav, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="ecs-footer">
      <div className="ecs-container">
        <div className="row g-4">
          <div className="col-lg-4">
            <Logo size={46} />
            <p className="ecs-footer__blurb">{site.description}</p>

            <div className="d-flex gap-2 mt-3">
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

          {footerNav.map((col) => (
            <div className="col-lg-2 col-md-4 col-6" key={col.title}>
              <h4 className="ecs-footer__title">{col.title}</h4>
              <ul className="ecs-footer__list">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a href={link.href} className="ecs-footer__link">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="ecs-footer__link">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-lg-2 col-md-12">
            <h4 className="ecs-footer__title">Get in Touch</h4>
            <ul className="ecs-footer__list">
              <li>
                <a href={`mailto:${site.email}`} className="ecs-footer__link">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="ecs-footer__link"
                >
                  {site.phone}
                </a>
              </li>
              <li className="ecs-footer__muted">{site.address}</li>
            </ul>
          </div>
        </div>

        <div className="ecs-footer__bottom">
          <p className="ecs-copy mb-0">
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>
          <p className="ecs-copy mb-0 d-flex flex-wrap gap-3">
            <Link href="/privacy-policy" className="ecs-footer__link">
              Privacy Policy
            </Link>
            <Link href="/terms" className="ecs-footer__link">
              Terms of Service
            </Link>
            <a href="/llms.txt" className="ecs-footer__link">
              llms.txt
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
