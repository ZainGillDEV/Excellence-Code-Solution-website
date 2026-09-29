"use client";

import { usePathname } from "next/navigation";

/**
 * The admin dashboard has its own header and needs the full viewport, so the
 * marketing navbar and footer are left out on /admin routes.
 *
 * `navbar` and `footer` arrive as already-rendered elements, so they can
 * stay server components.
 */
export default function SiteChrome({ navbar, footer, children }) {
  const pathname = usePathname();
  const bare = pathname?.startsWith("/admin");

  if (bare) return <main>{children}</main>;

  return (
    <>
      {navbar}
      <main>{children}</main>
      {footer}
    </>
  );
}
