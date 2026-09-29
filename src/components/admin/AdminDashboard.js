"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import { LogoMark } from "@/components/Logo";

const STATUS_META = {
  new: { label: "New", className: "is-new", icon: "bi-envelope" },
  read: { label: "Read", className: "is-read", icon: "bi-envelope-open" },
  replied: { label: "Replied", className: "is-replied", icon: "bi-reply" },
  archived: { label: "Archived", className: "is-archived", icon: "bi-archive" },
};

const FILTERS = ["all", "new", "read", "replied", "archived"];

function formatWhen(iso) {
  if (!iso) return "—";
  const date = new Date(iso);
  const mins = Math.round((Date.now() - date.getTime()) / 60000);

  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  if (mins < 1440) return `${Math.round(mins / 60)}h ago`;
  if (mins < 10080) return `${Math.round(mins / 1440)}d ago`;

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function AdminDashboard({ contacts, counts, storage }) {
  const router = useRouter();
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState(null);
  const [busyId, setBusyId] = useState(null);
  const [error, setError] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return contacts.filter((c) => {
      if (filter !== "all" && c.status !== filter) return false;
      if (!q) return true;
      return [c.name, c.email, c.subject, c.message, c.phone]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [contacts, filter, query]);

  const setStatus = async (id, status) => {
    setBusyId(id);
    setError("");
    try {
      const res = await fetch(`/api/admin/contacts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.message || "Could not update that enquiry.");
      } else {
        router.refresh();
      }
    } catch {
      setError("Network error. Try again.");
    }
    setBusyId(null);
  };

  const remove = async (id) => {
    setBusyId(id);
    setError("");
    try {
      const res = await fetch(`/api/admin/contacts/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.message || "Could not delete that enquiry.");
      } else {
        setOpenId(null);
        router.refresh();
      }
    } catch {
      setError("Network error. Try again.");
    }
    setBusyId(null);
  };

  const signOut = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  };

  const exportCsv = () => {
    const header = [
      "Date",
      "Name",
      "Email",
      "Phone",
      "Subject",
      "Status",
      "Message",
    ];
    const escape = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const rows = visible.map((c) =>
      [
        c.createdAt ? new Date(c.createdAt).toISOString() : "",
        c.name,
        c.email,
        c.phone,
        c.subject,
        c.status,
        c.message,
      ]
        .map(escape)
        .join(",")
    );

    const blob = new Blob([[header.map(escape).join(","), ...rows].join("\n")], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ecs-enquiries-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="ecs-admin">
      <header className="ecs-admin__bar">
        <div className="ecs-container ecs-admin__bar-inner">
          <div className="d-flex align-items-center gap-2">
            <LogoMark size={34} />
            <div>
              <strong className="ecs-admin__title">Enquiries</strong>
              <span className="ecs-admin__sub">{storage}</span>
            </div>
          </div>

          <div className="d-flex align-items-center gap-2">
            <button
              type="button"
              className="ecs-admin__ghost"
              onClick={() => router.refresh()}
            >
              <i className="bi bi-arrow-clockwise" />
              <span className="d-none d-sm-inline">Refresh</span>
            </button>
            <button type="button" className="ecs-admin__ghost" onClick={exportCsv}>
              <i className="bi bi-download" />
              <span className="d-none d-sm-inline">CSV</span>
            </button>
            <button type="button" className="ecs-admin__ghost" onClick={signOut}>
              <i className="bi bi-box-arrow-right" />
              <span className="d-none d-sm-inline">Sign out</span>
            </button>
          </div>
        </div>
      </header>

      <div className="ecs-container py-4">
        {/* counters */}
        <div className="row g-3 mb-4">
          {[
            { key: "total", label: "Total", icon: "bi-inbox" },
            { key: "new", label: "New", icon: "bi-envelope" },
            { key: "replied", label: "Replied", icon: "bi-reply" },
            { key: "archived", label: "Archived", icon: "bi-archive" },
          ].map((tile) => (
            <div className="col-6 col-lg-3" key={tile.key}>
              <div className="ecs-admin__tile">
                <span className="ecs-card__icon mb-2">
                  <i className={`bi ${tile.icon}`} />
                </span>
                <div className="ecs-stat__value">{counts[tile.key] ?? 0}</div>
                <div className="ecs-stat__label">{tile.label}</div>
              </div>
            </div>
          ))}
        </div>

        {error ? (
          <div className="ecs-alert ecs-alert--err mb-3" role="alert">
            <i className="bi bi-exclamation-triangle-fill me-2" />
            {error}
          </div>
        ) : null}

        {/* controls */}
        <div className="ecs-admin__controls">
          <div className="ecs-filter">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`ecs-filter__btn${filter === f ? " is-active" : ""}`}
                aria-pressed={filter === f}
              >
                {f === "all" ? "All" : STATUS_META[f].label}
                <span className="ms-1 opacity-75">
                  {f === "all" ? counts.total ?? 0 : counts[f] ?? 0}
                </span>
              </button>
            ))}
          </div>

          <div className="ecs-admin__search">
            <i className="bi bi-search" />
            <input
              type="search"
              className="form-control ecs-input"
              placeholder="Search name, email, subject…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search enquiries"
            />
          </div>
        </div>

        {/* list */}
        {!visible.length ? (
          <div className="ecs-empty mt-4">
            {contacts.length
              ? "No enquiries match this filter."
              : "No enquiries yet. They will appear here as soon as someone uses the contact form."}
          </div>
        ) : (
          <ul className="ecs-admin__list mt-4">
            {visible.map((c) => {
              const meta = STATUS_META[c.status] || STATUS_META.new;
              const open = openId === c._id;

              return (
                <li key={c._id} className={`ecs-admin__row${open ? " is-open" : ""}`}>
                  <button
                    type="button"
                    className="ecs-admin__summary"
                    aria-expanded={open}
                    onClick={() => setOpenId(open ? null : c._id)}
                  >
                    <span className={`ecs-admin__dot ${meta.className}`} />

                    <span className="ecs-admin__who">
                      <strong>{c.name}</strong>
                      <span>{c.email}</span>
                    </span>

                    <span className="ecs-admin__subject">{c.subject}</span>

                    <span className={`ecs-status ${meta.className}`}>
                      <i className={`bi ${meta.icon}`} />
                      {meta.label}
                    </span>

                    <span className="ecs-admin__when">
                      {formatWhen(c.createdAt)}
                    </span>

                    <i
                      className={`bi bi-chevron-down ecs-admin__chev${
                        open ? " is-open" : ""
                      }`}
                    />
                  </button>

                  {open ? (
                    <div className="ecs-admin__detail">
                      <p className="ecs-admin__message">{c.message}</p>

                      <dl className="ecs-admin__meta">
                        <div>
                          <dt>Email</dt>
                          <dd>
                            <a href={`mailto:${c.email}`}>{c.email}</a>
                          </dd>
                        </div>
                        {c.phone ? (
                          <div>
                            <dt>Phone</dt>
                            <dd>
                              <a href={`tel:${c.phone.replace(/\s/g, "")}`}>
                                {c.phone}
                              </a>
                            </dd>
                          </div>
                        ) : null}
                        <div>
                          <dt>Received</dt>
                          <dd>
                            {c.createdAt
                              ? new Date(c.createdAt).toLocaleString("en-GB")
                              : "—"}
                          </dd>
                        </div>
                        {c.meta?.ip ? (
                          <div>
                            <dt>IP</dt>
                            <dd>{c.meta.ip}</dd>
                          </div>
                        ) : null}
                      </dl>

                      <div className="ecs-admin__actions">
                        <a
                          className="btn-ecs"
                          href={`mailto:${c.email}?subject=${encodeURIComponent(
                            `Re: ${c.subject}`
                          )}`}
                        >
                          <i className="bi bi-reply" /> Reply
                        </a>

                        {["new", "read", "replied", "archived"]
                          .filter((s) => s !== c.status)
                          .map((s) => (
                            <button
                              key={s}
                              type="button"
                              className="btn-ecs-outline"
                              disabled={busyId === c._id}
                              onClick={() => setStatus(c._id, s)}
                            >
                              <i className={`bi ${STATUS_META[s].icon}`} />
                              Mark {STATUS_META[s].label.toLowerCase()}
                            </button>
                          ))}

                        <button
                          type="button"
                          className="ecs-admin__delete"
                          disabled={busyId === c._id}
                          onClick={() => remove(c._id)}
                        >
                          <i className="bi bi-trash" /> Delete
                        </button>
                      </div>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
