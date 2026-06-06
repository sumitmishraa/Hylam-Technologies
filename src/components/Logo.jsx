import { Link } from 'react-router-dom'

/**
 * Hylam Technologies H-mark
 *
 * Two perspective-skewed parallelogram pillars:
 *   Left  — Gold  (#C8912A)  : the warm accent face
 *   Right — Navy  (#1B3A6B)  : the primary brand face
 *
 * The H crossbar is a circuit-trace motif — a horizontal line capped
 * by two ring nodes — reinforcing the technology identity without
 * relying on a literal crossbar.
 */
export function HylamMark({ size = 48, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Hylam Technologies"
    >
      {/* ── Left pillar — Gold ─────────────────────────── */}
      {/* Slight rightward lean: top-right edge at 36, bottom-right at 31 */}
      <polygon points="7,4 36,4 31,96 2,96" fill="#C8912A" />
      {/* Top-left sheen strip — simulates light hitting the left face */}
      <polygon points="7,4 16,4 11,96 2,96" fill="rgba(255,255,255,0.18)" />

      {/* ── Right pillar — Navy ────────────────────────── */}
      {/* Mirrored lean: bottom-right edge at 98, top-right at 93 */}
      <polygon points="64,4 93,4 98,96 69,96" fill="#1B3A6B" />
      {/* Right-edge depth shadow */}
      <polygon points="85,4 93,4 98,96 90,96" fill="rgba(0,0,0,0.20)" />

      {/* ── Circuit crossbar — at ~49% height ──────────── */}
      {/*
        At y=49 the inner edges of each pillar converge to:
          Left  pillar right edge → x ≈ 33.5
          Right pillar left  edge → x ≈ 66.5
        The line and nodes span/straddle the gap between pillars.
      */}
      <line
        x1="33" y1="49"
        x2="67" y2="49"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Left node — sits on the gold pillar inner edge */}
      <circle cx="33" cy="49" r="5.5" fill="white" />
      <circle cx="33" cy="49" r="2.5" fill="#C8912A" />
      {/* Right node — sits on the navy pillar inner edge */}
      <circle cx="67" cy="49" r="5.5" fill="white" />
      <circle cx="67" cy="49" r="2.5" fill="#1B3A6B" />
    </svg>
  )
}

/**
 * Full horizontal lockup — mark + wordmark.
 *
 * light=true  → white wordmark text  (dark/navy backgrounds, e.g. Footer)
 * light=false → navy wordmark text   (white/light backgrounds, e.g. Navbar)
 */
export function HylamLogo({ light = false, size = 44, linkTo = '/', className = '' }) {
  const primary   = light ? '#ffffff'               : '#1B3A6B'
  const secondary = light ? 'rgba(255,255,255,0.45)' : '#9CA3AF'

  return (
    <Link
      to={linkTo}
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}
    >
      <HylamMark size={size} />
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span
          style={{
            fontFamily:    '"Space Grotesk", sans-serif',
            fontWeight:    700,
            fontSize:      Math.round(size * 0.52),
            color:         primary,
            letterSpacing: '-0.4px',
            lineHeight:    1.1,
          }}
        >
          Hylam
        </span>
        <span
          style={{
            fontFamily:    '"DM Sans", sans-serif',
            fontWeight:    500,
            fontSize:      Math.round(size * 0.22),
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
