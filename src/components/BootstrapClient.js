"use client";

import { useEffect } from "react";

/**
 * Loads Bootstrap's JavaScript bundle (navbar collapse, dropdowns, etc.)
 * on the client only — it touches `document`, so it cannot be imported
 * from a server component.
 */
export default function BootstrapClient() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
}
