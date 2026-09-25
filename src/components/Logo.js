import Image from "next/image";
import Link from "next/link";

import { site } from "@/data/site";

/* Native dimensions of the artwork in /public — both files are the same
   lockup, so they share one aspect ratio. */
const LOCKUP = { w: 910, h: 400 };

/**
 * The ECS logo. `size` is the rendered height in pixels; the width follows
 * the artwork's own proportions.
 *
 * The company name is set inside the mark itself, so there is no separate
 * wordmark to place beside it — this one image is the whole identity.
 */
export default function Logo({ size = 52, href = "/", priority = false }) {
  const img = (
    <Image
      src="/logo.png"
      alt={`${site.fullName} logo`}
      width={LOCKUP.w}
      height={LOCKUP.h}
      priority={priority}
      style={{ height: size, width: "auto" }}
    />
  );

  if (!href) return <span className="ecs-logo">{img}</span>;

  return (
    <Link href={href} className="ecs-logo" aria-label={`${site.name} home`}>
      {img}
    </Link>
  );
}

/** Smaller file of the same lockup — for tight spaces such as an email footer. */
export function LogoMark({ size = 40, priority = false }) {
  return (
    <Image
      src="/logo-mark.png"
      alt={`${site.name} logo`}
      width={455}
      height={200}
      priority={priority}
      style={{ height: size, width: "auto" }}
    />
  );
}
