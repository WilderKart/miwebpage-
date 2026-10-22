import { useId } from "react";

const tones = {
  a: ["#ff8a1f", "#b52400", "#ffd08a"],
  b: ["#ffa73a", "#ff4a00", "#fff0d2"],
  c: ["#ff5a00", "#2a0a00", "#ffb366"],
  d: ["#ffc13a", "#ff5a00", "#fff3c9"],
  e: ["#2a0e00", "#ff6a00", "#ffc487"],
} as const;

export type Tone = keyof typeof tones;

// Composiciones abstractas propias (sin imágenes de terceros), en la paleta de marca.
export function Shape({ tone = "a", variant = 0 }: { tone?: Tone; variant?: number }) {
  const uid = useId().replace(/:/g, "");
  const [c1, c2, c3] = tones[tone];
  const v = variant % 5;
  return (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`bg${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </linearGradient>
        <linearGradient id={`g${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c3} />
          <stop offset="0.55" stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </linearGradient>
        <radialGradient id={`r${uid}`} cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor={c3} />
          <stop offset="0.45" stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </radialGradient>
        <filter id={`b${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>
      <rect width="400" height="250" fill={`url(#bg${uid})`} />
      <ellipse cx="200" cy="222" rx="120" ry="14" fill="#000" opacity="0.28" filter={`url(#b${uid})`} />
      {v === 0 && (
        <g>
          <polygon points="200,36 292,125 200,214 108,125" fill={`url(#g${uid})`} />
          <polygon points="200,36 292,125 200,125" fill="#fff" opacity="0.22" />
          <polygon points="200,214 108,125 200,125" fill="#000" opacity="0.22" />
        </g>
      )}
      {v === 1 && (
        <g>
          <circle cx="200" cy="125" r="78" fill="none" stroke={`url(#g${uid})`} strokeWidth="34" />
          <circle cx="200" cy="125" r="34" fill={`url(#r${uid})`} />
        </g>
      )}
      {v === 2 && (
        <g>
          <rect x="112" y="136" width="176" height="42" rx="12" fill={`url(#g${uid})`} />
          <rect x="102" y="102" width="196" height="42" rx="12" fill={`url(#g${uid})`} opacity="0.92" />
          <rect x="122" y="68" width="156" height="42" rx="12" fill={`url(#g${uid})`} opacity="0.85" />
          <rect x="122" y="68" width="156" height="10" rx="5" fill="#fff" opacity="0.28" />
        </g>
      )}
      {v === 3 && (
        <g>
          <circle cx="200" cy="120" r="82" fill={`url(#r${uid})`} />
          <ellipse cx="170" cy="86" rx="26" ry="14" fill="#fff" opacity="0.35" transform="rotate(-30 170 86)" />
        </g>
      )}
      {v === 4 && (
        <g>
          <rect x="108" y="52" width="184" height="116" rx="10" fill="#0b0b0b" />
          <rect x="116" y="60" width="168" height="100" rx="5" fill={`url(#g${uid})`} />
          <path d="M116 140 C 160 100, 210 150, 284 96 L284 160 L116 160 Z" fill="#000" opacity="0.28" />
          <rect x="190" y="168" width="20" height="24" fill="#cfcfcf" />
          <rect x="160" y="190" width="80" height="8" rx="4" fill="#e8e8e8" />
        </g>
      )}
    </svg>
  );
}

export default function Art({ tone = "a", variant = 0, className = "" }: { tone?: Tone; variant?: number; className?: string }) {
  return (
    <div className={`tile ${className}`}>
      <Shape tone={tone} variant={variant} />
    </div>
  );
}
