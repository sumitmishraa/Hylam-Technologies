import { Link } from 'react-router-dom'

/**
 * HylamLogo — renders the brand PNG at a controlled height.
 *
 * Tailwind preflight applies `height: auto` to all <img> tags, which
 * overrides HTML height attributes. We use an inline CSS `height` style
 * (higher specificity than preflight) to properly constrain the image.
 *
 * onDark=true  → wraps the logo in a white pill (for dark/navy backgrounds)
 * onDark=false → renders directly (for white/light backgrounds)
 */
export function HylamLogo({ height = 52, linkTo = '/', className = '', onDark = false }) {
  const img = (
    <img
      src="/logo.png"
      alt="Hylam Technologies"
      style={{
        height:      height,   /* inline style beats Tailwind preflight height:auto */
        width:       'auto',
        display:     'block',
        maxWidth:    'none',   /* prevent Tailwind max-width:100% from squishing it */
        objectFit:   'contain',
      }}
    />
  )

  const wrapped = onDark ? (
    <div
      style={{
        display:      'inline-flex',
        alignItems:   'center',
        background:   '#ffffff',
        borderRadius: 10,
        padding:      '6px 12px',
      }}
    >
      {img}
    </div>
  ) : img

  return (
    <Link
      to={linkTo}
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
    >
      {wrapped}
    </Link>
  )
}

/* Alias — some components import HylamMark separately */
export function HylamMark({ size = 48, className = '', onDark = false }) {
  return <HylamLogo height={size} linkTo="/" className={className} onDark={onDark} />
}
