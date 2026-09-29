"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { LogoMark } from "@/components/Logo";

export default function AdminLogin({ configured }) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!password) {
      setError("Enter the admin password.");
      return;
    }

    setBusy(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.message || "Could not sign you in.");
        setBusy(false);
        return;
      }

      setPassword("");
      router.refresh();
    } catch {
      setError("Network error. Check your connection and try again.");
      setBusy(false);
    }
  };

  return (
    <div className="ecs-admin-login">
      <form className="ecs-admin-login__card" onSubmit={onSubmit}>
        <div className="text-center mb-4">
          <LogoMark size={44} />
          <h1 className="mt-3 mb-1" style={{ fontSize: "1.3rem" }}>
            Admin Sign In
          </h1>
          <p className="ecs-card__text">
            Enquiries from the contact form live here.
          </p>
        </div>

        {!configured ? (
          <div className="ecs-alert ecs-alert--err mb-3">
            <i className="bi bi-exclamation-triangle-fill me-2" />
            <span>
              <strong>Not set up yet.</strong> Add <code>ADMIN_PASSWORD</code> to
              your environment variables and redeploy, then sign in here.
            </span>
          </div>
        ) : null}

        {error ? (
          <div className="ecs-alert ecs-alert--err mb-3" role="alert">
            <i className="bi bi-exclamation-triangle-fill me-2" />
            {error}
          </div>
        ) : null}

        <label className="ecs-label d-block" htmlFor="admin-password">
          Password
        </label>
        <input
          id="admin-password"
          name="password"
          type="password"
          className="form-control ecs-input"
          placeholder="••••••••••"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          disabled={busy || !configured}
          autoComplete="current-password"
          autoFocus
        />

        <button
          type="submit"
          className="btn-ecs w-100 justify-content-center mt-3"
          disabled={busy || !configured}
        >
          {busy ? (
            <>
              <span className="spinner-border spinner-border-sm" aria-hidden="true" />
              Signing in...
            </>
          ) : (
            <>
              Sign In <i className="bi bi-box-arrow-in-right" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
