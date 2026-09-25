"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { subjects } from "@/data/site";

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  company: "", // honeypot — must stay empty
};

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle", message: "" });

  // Pre-select the subject when arriving from a "Learn More" link.
  useEffect(() => {
    const preset = searchParams.get("subject");
    if (preset && subjects.includes(preset)) {
      setForm((f) => ({ ...f, subject: preset }));
    }
  }, [searchParams]);

  const update = (field) => (event) => {
    setForm((f) => ({ ...f, [field]: event.target.value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    else if (form.name.trim().length < 2) next.name = "Name is too short.";

    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      next.email = "Please enter a valid email address.";

    if (form.phone.trim() && !/^[\d\s()+-]{7,20}$/.test(form.phone.trim()))
      next.phone = "Please enter a valid phone number.";

    if (!form.subject) next.subject = "Please choose a subject.";

    if (!form.message.trim()) next.message = "Please tell us about your project.";
    else if (form.message.trim().length < 10)
      next.message = "Message should be at least 10 characters.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ state: "idle", message: "" });

    if (!validate()) return;

    setStatus({ state: "loading", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        setStatus({
          state: "error",
          message:
            data.message || "Something went wrong. Please try again shortly.",
        });
        return;
      }

      setForm(EMPTY);
      setStatus({
        state: "success",
        message:
          data.message || "Thanks! Your message is with us — we'll reply within 24 hours.",
      });
    } catch {
      setStatus({
        state: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  };

  const busy = status.state === "loading";

  return (
    <form className="ecs-form-card" onSubmit={onSubmit} noValidate>
      {status.state === "success" ? (
        <div className="ecs-alert ecs-alert--ok mb-3" role="status">
          <i className="bi bi-check-circle-fill me-2" />
          {status.message}
        </div>
      ) : null}

      {status.state === "error" ? (
        <div className="ecs-alert ecs-alert--err mb-3" role="alert">
          <i className="bi bi-exclamation-triangle-fill me-2" />
          {status.message}
        </div>
      ) : null}

      <div className="row g-3">
        <div className="col-md-6">
          <label className="ecs-label d-block" htmlFor="name">
            Full Name <span className="req">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className={`form-control ecs-input${errors.name ? " is-invalid" : ""}`}
            placeholder="Your name"
            value={form.name}
            onChange={update("name")}
            disabled={busy}
            autoComplete="name"
          />
          {errors.name ? <p className="ecs-field-error">{errors.name}</p> : null}
        </div>

        <div className="col-md-6">
          <label className="ecs-label d-block" htmlFor="email">
            Email Address <span className="req">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={`form-control ecs-input${errors.email ? " is-invalid" : ""}`}
            placeholder="you@company.com"
            value={form.email}
            onChange={update("email")}
            disabled={busy}
            autoComplete="email"
          />
          {errors.email ? <p className="ecs-field-error">{errors.email}</p> : null}
        </div>

        <div className="col-md-6">
          <label className="ecs-label d-block" htmlFor="phone">
            Phone <span className="text-muted fw-normal">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={`form-control ecs-input${errors.phone ? " is-invalid" : ""}`}
            placeholder="+92 300 123 4567"
            value={form.phone}
            onChange={update("phone")}
            disabled={busy}
            autoComplete="tel"
          />
          {errors.phone ? <p className="ecs-field-error">{errors.phone}</p> : null}
        </div>

        <div className="col-md-6">
          <label className="ecs-label d-block" htmlFor="subject">
            Subject <span className="req">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            className={`form-select ecs-input${errors.subject ? " is-invalid" : ""}`}
            value={form.subject}
            onChange={update("subject")}
            disabled={busy}
          >
            <option value="">Select a subject</option>
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.subject ? (
            <p className="ecs-field-error">{errors.subject}</p>
          ) : null}
        </div>

        <div className="col-12">
          <label className="ecs-label d-block" htmlFor="message">
            Message <span className="req">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={`form-control ecs-input${errors.message ? " is-invalid" : ""}`}
            placeholder="Tell us about your project..."
            value={form.message}
            onChange={update("message")}
            disabled={busy}
          />
          {errors.message ? (
            <p className="ecs-field-error">{errors.message}</p>
          ) : null}
        </div>

        {/* honeypot — hidden from humans, catches naive bots */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-9999px",
            width: 1,
            height: 1,
            overflow: "hidden",
          }}
        >
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.company}
            onChange={update("company")}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn-ecs" disabled={busy}>
            {busy ? (
              <>
                <span
                  className="spinner-border spinner-border-sm"
                  aria-hidden="true"
                />
                Sending...
              </>
            ) : (
              <>
                Send Message <i className="bi bi-send" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
