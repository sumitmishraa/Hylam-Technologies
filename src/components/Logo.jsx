import { Link } from 'react-router-dom'

/**
 * HylamMark — just the icon (used where only the mark is needed, e.g. favicon area)
 * HylamLogo — full logo image (navbar, footer, etc.)
 */

export function HylamMark({ size = 48, className = '' }) {
  return (
    <img
      src="/logo.png"
      alt="Hylam Technologies"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain', display: 'block' }}
    />
  )
}

export function HylamLogo({ size = 48, linkTo = '/', className = '' }) {
  return (
    <Link
      to={linkTo}
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
    >
      <img
        src="/logo.png"
        alt="Hylam Technologies"
        height={size}
        style={{ objectFit: 'contain', display: 'block' }}
      />
    </Link>
  )
}
