const iconClass = "h-[26px] w-[26px]";

import type { ReactNode } from "react";

function IconFrame({ children }: { children: ReactNode }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={iconClass}
    >
      {children}
    </svg>
  );
}

export function ServiceIcon({ slug }: { slug: string }) {
  switch (slug) {
    case "3d-architectural-rendering":
      return (
        <IconFrame>
          <path d="M3 20V9l6-4 6 4v11" />
          <path d="M9 20v-6h6v6" />
          <path d="M15 11h6v9h-6" />
          <path d="M18 11V8l3 2" />
        </IconFrame>
      );
    case "landscape-rendering":
      return (
        <IconFrame>
          <path d="M3 20h18" />
          <path d="M5 20c1.2-4 3.2-7 5-7s2.2 1.5 3 3c.6-3.2 2.4-6 4.5-6 2 0 3.5 3.2 3.5 10" />
          <path d="M12 13v7" />
          <circle cx="7.5" cy="6.5" r="1.4" />
        </IconFrame>
      );
    case "3d-interior-renderings":
      return (
        <IconFrame>
          <path d="M4 10h16v10H4z" />
          <path d="M2 10h20" />
          <path d="M8 6h8l4 4H4l4-4z" />
          <path d="M9 20v-4h6v4" />
        </IconFrame>
      );
    case "interior-design-support":
      return (
        <IconFrame>
          <path d="M4 20h16" />
          <path d="M6 20V12h12v8" />
          <path d="M9 12V9a3 3 0 0 1 6 0v3" />
          <path d="M10 16h4" />
        </IconFrame>
      );
    case "ar-vr":
      return (
        <IconFrame>
          <path d="M3 9.5h18v7.5H3z" />
          <path d="M7 9.5V8a5 5 0 0 1 10 0v1.5" />
          <path d="M3 13h3.5a2 2 0 0 1 2 1.6V17" />
          <path d="M21 13h-3.5a2 2 0 0 0-2 1.6V17" />
        </IconFrame>
      );
    case "3d-walkthrough-videos":
      return (
        <IconFrame>
          <rect x="3" y="5" width="13" height="10" rx="1.2" />
          <path d="M16 8.5l5-2.5v8l-5-2.5z" />
          <path d="M4 19h6M4 21h10" />
          <path d="M16 19h4v2h-4z" />
        </IconFrame>
      );
    default:
      return (
        <IconFrame>
          <path d="M4 20V8l8-4 8 4v12" />
          <path d="M9 20v-6h6v6" />
        </IconFrame>
      );
  }
}
