import { Link } from 'react-router-dom'

/**
 * HT Monogram — the Hylam Technologies logo mark.
 *
 * Design language:
 *   • Navy rounded-square container
 *   • H (white) on the left half  — two pillars + gold crossbar
 *   • T (white/gold) on the right — stem + gold top-bar at same x-height as H crossbar
 *   • The two gold elements (H crossbar + T top-bar) sit at the same visual weight,
 *     tying both letters into one unified mark
 *   • Subtle radial highlight in top-left corner gives depth without skeuomorphism
 */
export function HylamMark({ size = 48, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ── Container ────────────────────────────────── */}
      <rect width="52" height="52" rx="11" fill="#1B3A6B" />

      {/* Subtle top-left sheen */}
      <rect width="52" height="52" rx="11" fill="url(#htSheen)" opacity="0.18" />

      {/* ── H  ───────────────────────────────────────── */}
      {/* Left pillar */}
      <rect x="5"  y="8" width="7" height="36" rx="2" fill="white" />
      {/* Right pillar */}
      <rect x="18" y="8" width="7" height="36" rx="2" fill="white" />
      {/* Gold crossbar — the "bridge" */}
      <rect x="12" y="22" width="6" height="8"  rx="2" fill="#C8912A" />

      {/* ── T  ───────────────────────────────────────── */}
      {/* Gold top bar  */}
      <rect x="27" y="8"  width="20" height="8" rx="2" fill="#C8912A" />
      {/* White stem */}
      <rect x="34" y="16" width="6"  height="28" rx="2" fill="white"   />

      {/* ── Defs ─────────────────────────────────────── */}
      <defs>
        <radialGradient id="htSheen" cx="0%" cy="0%" r="80%">
          <stop offset="0%"   stopColor="white" stopOpacity="0.35" />
          <stop offset="100%" stopColor="white" stopOpacity="0"    />
        </radialGradient>
      </defs>
    </svg>
  )
}

/**
 * Full horizontal lockup — mark + wordmark.
 * light=true  → wordmark in white  (use on dark/navy backgrounds)
 * light=false → wordmark in navy   (use on white backgrounds)
 */
export function HylamLogo({ light = false, size = 44, linkTo = '/', className = '' }) {
  const primary   = light ? '#ffffff'              : '#1B3A6B'
  const secondary = light ? 'rgba(255,255,255,0.45)' : '#9CA3AF'

  return (
    <Link
      to={linkTo}
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 11, textDecoration: 'none' }}
    >
      <HylamMark size={size} />
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span
          style={{
            fontFamily:    '"Space Grotesk", sans-serif',
            fontWeight:    700,
            fontSize:      21,
            color:         primary,
            letterSpacing: '-0.4px',
            lineHeight:    1.15,
          }}
        >
          Hylam
        </span>
        <span
          style={{
            fontFamily:    '"DM Sans", sans-serif',
            fontWeight:    500,
            fontSize:      9.5,
            color:         secondary,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            marginTop:     3,
          }}
        >
          Technologies
        </span>
      </div>
    </Link>
  )
}
