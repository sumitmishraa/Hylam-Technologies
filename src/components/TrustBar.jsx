const TECHS = [
  'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Python',
  'React', 'Node.js', 'PostgreSQL', 'Jenkins', 'Ansible', 'Linux', 'Nginx', 'MongoDB',
]

export default function TrustBar() {
  const doubled = [...TECHS, ...TECHS]

  return (
    <section
      style={{
        background: '#111118',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        padding: '20px 0',
        overflow: 'hidden',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3">
        <p
          className="text-center text-sm text-white/40"
          style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
          Trusted technologies we work with:
        </p>
      </div>

      {/* Marquee wrapper */}
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        {/* Fade edges */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '80px',
            background: 'linear-gradient(90deg, #111118, transparent)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '80px',
            background: 'linear-gradient(-90deg, #111118, transparent)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        <div className="animate-marquee flex gap-3 w-max" style={{ padding: '4px 0' }}>
          {doubled.map((tech, i) => (
            <span
              key={i}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: '9999px',
                padding: '6px 16px',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.60)',
                fontFamily: '"DM Sans", sans-serif',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
