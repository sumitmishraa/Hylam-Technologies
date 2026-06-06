import { Link } from 'react-router-dom'
import { Mail, MapPin, ArrowRight } from 'lucide-react'
import { HylamLogo } from './Logo'

function LiIcon()  { return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> }
function XIcon()   { return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> }
function GhIcon()  { return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> }

const SERVICES = [
  'Cloud Solutions',
  'DevOps & CI/CD',
  'Data Analytics',
  'Cybersecurity',
  'IT Consulting',
  'Web & App Development',
]

const COMPANY = [
  { label: 'About Us',   to: '/about'   },
  { label: 'Services',   to: '/services' },
  { label: 'Why Us',     to: '/why-us'  },
  { label: 'Contact Us', to: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0A1A33', color: '#ffffff' }}>

      {/* Top band — gold bar */}
      <div style={{ background: '#C8912A', height: 4 }} />

      {/* Main footer content */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px 40px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1 — Brand */}
          <div>
            {/* Logo */}
            <div className="mb-5">
              <HylamLogo height={64} onDark={true} />
            </div>

            <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 24 }}>
              Hylam Technologies Pvt Ltd — Delhi-based IT solutions company helping businesses across India build,
              scale, and secure their digital infrastructure since 2013.
            </p>

            <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 16 }}>
              Powering Digital Transformation
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: LiIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
                { Icon: XIcon,  href: 'https://x.com',        label: 'Twitter' },
                { Icon: GhIcon, href: 'https://github.com',   label: 'GitHub'  },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 36, height: 36,
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.6)',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background='rgba(200,145,42,0.2)'; e.currentTarget.style.color='#F0B429' }}
                  onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.07)'; e.currentTarget.style.color='rgba(255,255,255,0.6)' }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontSize: 14, color: '#C8912A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color='#ffffff'}
                    onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.55)'}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h4 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontSize: 14, color: '#C8912A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {COMPANY.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color='#ffffff'}
                    onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.55)'}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter mini */}
            <div style={{ marginTop: 32 }}>
              <h5 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 12 }}>
                Stay Updated
              </h5>
              <div style={{ display: 'flex', gap: 8 }}>
                <input
                  type="email"
                  placeholder="Your email"
                  style={{
                    flex: 1, padding: '9px 12px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: 6, color: '#ffffff',
                    fontFamily: '"DM Sans", sans-serif', fontSize: 13,
                    outline: 'none',
                  }}
                />
                <button
                  style={{
                    width: 38, height: 38,
                    background: '#C8912A', border: 'none',
                    borderRadius: 6, cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff',
                  }}
                  aria-label="Subscribe"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontSize: 14, color: '#C8912A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                {
                  Icon: MapPin,
                  text: 'Office No 317, 3rd Floor, RG Complex 1, Sector 14, Rohini, New Delhi – 110085',
                },
                {
                  Icon: Mail,
                  text: 'info@hylamtechnologies.com',
                  href: 'mailto:info@hylamtechnologies.com',
                },
              ].map(({ Icon, text, href }) => (
                <div key={text} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: 0, width: 32, height: 32, background: 'rgba(200,145,42,0.15)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                    <Icon size={15} color="#C8912A" />
                  </div>
                  {href ? (
                    <a href={href} style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', lineHeight: 1.6 }}>
                      {text}
                    </a>
                  ) : (
                    <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.6 }}>
                      {text}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '20px 24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.35)', margin: 0 }}>
            © 2025 Hylam Technologies Pvt Ltd. All rights reserved.
          </p>
          <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.35)', margin: 0 }}>
            Made with ❤️ in Delhi, India
          </p>
        </div>
      </div>
    </footer>
  )
}
