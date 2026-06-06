import { useId } from 'react'
import { Link } from 'react-router-dom'

/**
 * Hylam Technologies brand mark.
 *
 * Design language (inspired by the provided brand image):
 *   • 4-pointed star in gold  — the badge / achievement shape
 *   • Stylised H in navy      — left pillar + crossbar
 *   • Upward diagonal arrow   — right "pillar" becomes a growth arrow
 *   • Circuit nodes           — two ring-dots on the crossbar
 *
 * Built as SVG so it's infinitely sharp, zero background issues,
 * and works identically on white (navbar) or dark navy (footer).
 *
 * useId() gives each mounted instance unique gradient/filter IDs
 * so multiple instances on the same page never clash.
 */
export function HylamMark({ size = 48, light = false, className = '' }) {
  const uid  = useId().replace(/:/g, '_')
  const navy = light ? '#FFFFFF'  : '#1B3A6B'
  const dark = light ? '#C8D8FF' : '#0D2244'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Gold gradient — top-left bright → bottom-right rich */}
        <linearGradient id={`${uid}gd`} x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%"   stopColor="#F7DC6F" />
          <stop offset="40%"  stopColor="#D4922A" />
          <stop offset="100%" stopColor="#966018" />
        </linearGradient>
        {/* Soft drop shadow under the star */}
        <filter id={`${uid}sh`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="2" stdDeviation="3.5" floodColor="rgba(0,0,0,0.20)" />
        </filter>
      </defs>

      {/* ── 4-pointed star ─────────────────────────────
          Quadratic bezier sides give soft concave curves
          between each tip — matching the brand image.   */}
      <path
        d="M50 7 Q63 37 93 50 Q63 63 50 93 Q37 63 7 50 Q37 37 50 7 Z"
        fill={`url(#${uid}gd)`}
        filter={`url(#${uid}sh)`}
      />
      {/* Top-left sheen — lights the star from above */}
      <path
        d="M50 7 Q44 21 23 33 Q35 37 37 37 Q37 21 50 7 Z"
        fill="rgba(255,255,255,0.30)"
      />
      {/* Bottom-right shadow — gives subtle depth */}
      <path
        d="M93 50 Q68 63 50 93 Q60 72 70 60 Z"
        fill="rgba(0,0,0,0.12)"
      />

      {/* ── H — left vertical pillar ───────────────────── */}
      <line
        x1="28" y1="71"
        x2="28" y2="26"
        stroke={navy}
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* ── H — crossbar ───────────────────────────────── */}
      <line
        x1="28" y1="50"
        x2="52" y2="50"
        stroke={navy}
        strokeWidth="9"
        strokeLinecap="round"
      />

      {/* ── Circuit nodes (two rings on the crossbar) ───── */}
      {/* Left node */}
      <circle cx="36" cy="50" r="5.5" fill={light ? 'rgba(255,255,255,0.25)' : 'white'} />
      <circle cx="36" cy="50" r="2.5" fill="#C8912A" />
      {/* Right node */}
      <circle cx="44" cy="50" r="5.5" fill={light ? 'rgba(255,255,255,0.25)' : 'white'} />
      <circle cx="44" cy="50" r="2.5" fill={navy} />

      {/* ── Growth arrow (right side of H, diagonal up-right) */}
      <line
        x1="52" y1="71"
        x2="68" y2="28"
        stroke={navy}
        strokeWidth="12"
        strokeLinecap="round"
      />
      {/* Arrow head — triangle at the tip */}
      <polygon
        points="72,20  62,28  70,36"
        fill={dark}
      />
    </svg>
  )
}

/**
 * Full horizontal lockup — mark + "HYLAM / Technologies" wordmark.
 *
 * light=false  →  navy wordmark   (white / light backgrounds — Navbar)
 * light=true   →  white wordmark  (dark / navy backgrounds   — Footer)
 */
export function HylamLogo({ size = 44, linkTo = '/', className = '', light = false }) {
  return (
    <Link
      to={linkTo}
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}
    >
      <HylamMark size={size} light={light} />

      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        {/* Company name */}
        <span style={{
          fontFamily:    '"Space Grotesk", sans-serif',
          fontWeight:    800,
          fontSize:      Math.round(size * 0.50),
          color:         light ? '#FFFFFF' : '#1B3A6B',
          letterSpacing: '0.05em',
          lineHeight:    1.1,
        }}>
          HYLAM
        </span>
        {/* Descriptor */}
        <span style={{
          fontFamily:    '"DM Sans", sans-serif',
          fontWeight:    500,
          fontSize:      Math.round(size * 0.22),
          color:         light ? '#F7DC6F' : '#C8912A',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          marginTop:     4,
        }}>
          Technologies
        </span>
      </div>
    </Link>
  )
}
