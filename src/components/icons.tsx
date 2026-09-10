import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/* ---------- Área de atuação ------------------------------------------- */

export const areaIcons = {
  lungs: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 3v9" />
      <path d="M9.5 7.5C9.5 10 8 11 6.6 12.2 5.2 13.4 4.5 14.8 4.5 17a3 3 0 0 0 4.6 2.5c.6-.4.9-1 .9-1.7V9" />
      <path d="M14.5 7.5c0 2.5 1.5 3.5 2.9 4.7 1.4 1.2 2.1 2.6 2.1 4.8a3 3 0 0 1-4.6 2.5c-.6-.4-.9-1-.9-1.7V9" />
    </svg>
  ),
  skin: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M4 8.5c2-1.6 4-1.6 6 0s4 1.6 6 0 3.2-1.3 4 0" />
      <path d="M4 13c2-1.6 4-1.6 6 0s4 1.6 6 0 3.2-1.3 4 0" />
      <path d="M4 17.5c2-1.6 4-1.6 6 0s4 1.6 6 0 3.2-1.3 4 0" />
    </svg>
  ),
  food: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M7 3v7a2.5 2.5 0 0 0 5 0V3" />
      <path d="M9.5 10v11" />
      <path d="M17.5 3c-1.4 1.4-2 3.2-2 5.3V13h4V8.3c0-2.1-.6-3.9-2-5.3Z" />
      <path d="M17.5 13v8" />
    </svg>
  ),
  pill: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="2.5" y="8.5" width="19" height="7" rx="3.5" transform="rotate(-20 12 12)" />
      <path d="M8.4 6.8 11.9 16" />
    </svg>
  ),
  alert: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 3.5 21 19H3l9-15.5Z" />
      <path d="M12 9.5v4" />
      <path d="M12 16.6h.01" />
    </svg>
  ),
  shield: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 3 4.5 6v5.6c0 4.2 3 8 7.5 9.4 4.5-1.4 7.5-5.2 7.5-9.4V6L12 3Z" />
      <path d="m9.2 12 2 2 3.6-3.8" />
    </svg>
  ),
  flame: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 21c3.3 0 6-2.4 6-5.6 0-3.9-3.4-5.6-4.3-9.4-.2-.8-1.2-1.1-1.7-.4C10.4 7.8 11 9.4 11 10.6c0 1-.7 1.8-1.6 1.8-1 0-1.7-.9-1.6-1.9-1.1 1.3-1.8 3-1.8 4.9C6 18.6 8.7 21 12 21Z" />
    </svg>
  ),
  cycle: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M20 12a8 8 0 0 1-13.7 5.6" />
      <path d="M4 12a8 8 0 0 1 13.7-5.6" />
      <path d="M17.5 3v3.6h-3.6" />
      <path d="M6.5 21v-3.6h3.6" />
    </svg>
  ),
  bug: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M9 5.5a3 3 0 0 1 6 0" />
      <rect x="8" y="7.5" width="8" height="12" rx="4" />
      <path d="M8 11.5H4.5M16 11.5H19.5M8 15.5H4.5M16 15.5H19.5M9.5 8 7 5M14.5 8 17 5" />
    </svg>
  ),
  glove: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M7 21v-4.2L5.4 15A2.2 2.2 0 0 1 8.5 12l.5.5V4.6a1.6 1.6 0 1 1 3.2 0v5.2M12 9.8V4a1.6 1.6 0 0 1 3.2 0v5.8M15.2 9.8V6.4a1.6 1.6 0 0 1 3.2 0v8.2c0 2.5-.7 4.3-1.6 6.4" />
    </svg>
  ),
} satisfies Record<string, (p: IconProps) => React.ReactElement>;

export type AreaIconName = keyof typeof areaIcons;

/* ---------- UI --------------------------------------------------------- */

export function WhatsAppIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.94L2 22l5.36-1.4a9.8 9.8 0 0 0 4.68 1.19h.01c5.43 0 9.84-4.4 9.84-9.84S17.47 2 12.04 2Zm0 17.94h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.18.83.85-3.1-.2-.32a8.14 8.14 0 0 1-1.25-4.36c0-4.51 3.68-8.18 8.2-8.18a8.18 8.18 0 0 1 8.18 8.19c0 4.51-3.67 8.18-8.13 8.18Zm4.49-6.13c-.25-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.13-.16.24-.63.79-.77.96-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.97-1.22-.73-.65-1.22-1.45-1.36-1.7-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.3-.22.25-.86.84-.86 2.05s.88 2.37 1 2.54c.13.16 1.73 2.64 4.2 3.7.58.26 1.04.41 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.45-.59 1.66-1.17.2-.57.2-1.06.14-1.16-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

export function InstagramIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <path d="M17.2 6.8h.01" strokeWidth={2} />
    </svg>
  );
}

export function ArrowIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h13" />
      <path d="m12.5 6 6 6-6 6" />
    </svg>
  );
}

export function PinIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function VideoIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="2.5" y="6" width="13" height="12" rx="2.5" />
      <path d="m15.5 10.5 6-3v9l-6-3z" />
    </svg>
  );
}

export function StarIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="m12 2.8 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.3l6.1-.9L12 2.8Z" />
    </svg>
  );
}

export function ChevronIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function CheckIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}
