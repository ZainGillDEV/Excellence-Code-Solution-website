"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import Logo from "./Logo";
import { navLinks } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Click outside / Escape closes the open dropdown.
  useEffect(() => {
    const onDown = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Stop the page scrolling behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = useCallback(
    (item) => {
      if (item.href === "/") return pathname === "/";
      if (pathname === item.href || pathname.startsWith(`${item.href}/`)) return true;
      return (item.children || []).some(
        (child) => child.href !== "/" && pathname === child.href
      );
    },
    [pathname]
  );

  const toggleDropdown = (label) =>
    setOpenDropdown((current) => (current === label ? null : label));

  return (
    <nav
      ref={navRef}
      className={`ecs-navbar${scrolled ? " is-scrolled" : ""}`}
    >
      <div className="ecs-container ecs-nav__inner">
        <Logo size={52} priority />

        <button
          type="button"
          className="ecs-nav__toggle"
          aria-expanded={menuOpen}
          aria-controls="ecs-nav-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`} />
        </button>

        <div
          id="ecs-nav-menu"
          className={`ecs-nav__menu${menuOpen ? " is-open" : ""}`}
        >
          <ul className="ecs-nav__list">
            {navLinks.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const open = openDropdown === item.label;

              return (
                <li
                  key={item.label}
                  className={`ecs-nav__item${hasChildren ? " has-children" : ""}${
                    open ? " is-open" : ""
                  }`}
                  onMouseEnter={
                    hasChildren ? () => setOpenDropdown(item.label) : undefined
                  }
                  onMouseLeave={hasChildren ? () => setOpenDropdown(null) : undefined}
                >
                  <span className="ecs-nav__row">
                    <Link
                      href={item.href}
                      className={`ecs-nav__link${isActive(item) ? " active" : ""}`}
                    >
                      {item.label}
                    </Link>

                    {hasChildren ? (
                      <button
                        type="button"
                        className="ecs-nav__caret"
                        aria-expanded={open}
                        aria-label={`${open ? "Hide" : "Show"} ${item.label} menu`}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleDropdown(item.label);
                        }}
                      >
                        <i className="bi bi-chevron-down" />
                      </button>
                    ) : null}
                  </span>

                  {hasChildren ? (
                    <ul className="ecs-dropdown" role="menu">
                      {item.children.map((child) => (
                        <li key={child.href} role="none">
                          <Link
                            href={child.href}
                            role="menuitem"
                            className={`ecs-dropdown__link${
                              pathname === child.href ? " active" : ""
                            }${child.featured ? " featured" : ""}`}
                          >
                            {child.icon ? (
                              <i className={`bi ${child.icon}`} />
                            ) : null}
                            <span>{child.label}</span>
                            {child.featured ? (
                              <em className="ecs-dropdown__tag">New</em>
                            ) : null}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>

          <Link href="/contact" className="btn-ecs ecs-nav__cta">
            Get Started <i className="bi bi-arrow-right" />
          </Link>
        </div>
      </div>

      {menuOpen ? (
        <button
          type="button"
          className="ecs-nav__scrim"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
    </nav>
  );
}
