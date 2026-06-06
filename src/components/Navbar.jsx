import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu, X, ChevronDown, ArrowRight,
  Cloud, GitBranch, BarChart3, Shield, Cpu, Globe,
} from 'lucide-react'
import { HylamLogo } from './Logo'

/* ── Services list ──────────────────────────────────────── */
const SERVICES = [
  { id: 'cloud',       Icon: Cloud,     label: 'Cloud Solutions',       colour: '#1B3A6B' },
  { id: 'devops',      Icon: GitBranch, label: 'DevOps & CI/CD',        colour: '#2B5EA7' },
  { id: 'data',        Icon: BarChart3, label: 'Data Analytics',        colour: '#C8912A' },
  { id: 'security',    Icon: Shield,    label: 'Cybersecurity',         colour: '#1B3A6B' },
  { id: 'consulting',  Icon: Cpu,       label: 'IT Consulting',         colour: '#2B5EA7' },
  { id: 'webdev',      Icon: Globe,     label: 'Web & App Development', colour: '#C8912A' },
]

/* ── Compact dropdown ───────────────────────────────────── */
function ServicesMenu({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0,  scale: 1    }}
      exit  ={{ opacity: 0, y: -8, scale: 0.97 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      style={{
        position:     'absolute',
        top:          'calc(100% + 10px)',
        left:         '50%',
        transform:    'translateX(-50%)',
        width:        234,
        background:   '#ffffff',
        borderRadius: 12,
        boxShadow:    '0 8px 36px rgba(27,58,107,0.15), 0 0 0 1px rgba(27,58,107,0.09)',
        overflow:     'hidden',
        zIndex:       200,
      }}
    >
      {/* Items */}
      <div style={{ padding: '6px 0' }}>
        {SERVICES.map(({ id, Icon, label, colour }) => (
          <Link
            key={id}
            to={`/services#${id}`}
            onClick={onClose}
            style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 16px', textDecoration: 'none', transition: 'background 0.12s' }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#F5F7FA'
              e.currentTarget.querySelector('.svc-label').style.color = '#1B3A6B'
              e.currentTarget.querySelector('.svc-label').style.fontWeight = '600'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.querySelector('.svc-label').style.color = '#374151'
              e.currentTarget.querySelector('.svc-label').style.fontWeight = '500'
            }}
          >
            {/* Icon circle */}
            <span
              style={{
                width:          30,
                height:         30,
                borderRadius:   8,
                background:     colour === '#C8912A' ? '#FDF3DC' : '#EEF2F8',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                flexShrink:     0,
              }}
            >
              <Icon size={15} color={colour} />
            </span>

            {/* Label */}
            <span
              className="svc-label"
              style={{
                fontFamily:  '"DM Sans", sans-serif',
                fontSize:    13.5,
                fontWeight:  500,
                color:       '#374151',
                transition:  'color 0.12s, font-weight 0.12s',
                lineHeight:  1,
              }}
            >
              {label}
            </span>
          </Link>
        ))}
      </div>

      {/* Footer link */}
      <div
        style={{
          borderTop:  '1px solid #F0F2F5',
          padding:    '9px 16px',
          background: '#FAFAFA',
        }}
      >
        <Link
          to="/services"
          onClick={onClose}
          style={{
            display:        'inline-flex',
            alignItems:     'center',
            gap:            5,
            fontFamily:     '"DM Sans", sans-serif',
            fontSize:       12.5,
            fontWeight:     600,
            color:          '#C8912A',
            textDecoration: 'none',
          }}
        >
          View all services <ArrowRight size={12} />
        </Link>
      </div>
    </motion.div>
  )
}

/* ── Navbar ─────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled,   setScrolled] = useState(false)
  const [mobileOpen, setMobile]   = useState(false)
  const [dropdown,   setDropdown] = useState(false)
  const [mobileSvc,  setMobileSvc]= useState(false)
  const { pathname }              = useLocation()
  const closeTimer                = useRef(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMobile(false); setDropdown(false) }, [pathname])
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  const openDd  = () => { clearTimeout(closeTimer.current); setDropdown(true)  }
  const closeDd = () => { closeTimer.current = setTimeout(() => setDropdown(false), 160) }

  const svcActive = pathname.startsWith('/services')

  return (
    <header
      style={{
        position:   'fixed',
        inset:      '0 0 auto 0',
        zIndex:     100,
        background: '#ffffff',
        borderBottom: scrolled ? '1px solid #E5E7EB' : '1px solid transparent',
        boxShadow:  scrolled ? '0 2px 20px rgba(0,0,0,0.07)' : 'none',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

        {/* Logo */}
        <HylamLogo size={44} />

        {/* ── Desktop nav ───────────────────────────── */}
        <nav className="hidden lg:flex items-center" style={{ gap: 2 }}>

          <NavLink to="/" end style={({ isActive }) => linkStyle(isActive)}>
            {({ isActive }) => <Lbl text="Home" active={isActive} />}
          </NavLink>

          {/* Services with hover dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={openDd}
            onMouseLeave={closeDd}
          >
            <button
              onClick={() => setDropdown(v => !v)}
              style={{ ...linkStyle(svcActive), background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 3 }}
              aria-haspopup="true"
              aria-expanded={dropdown}
            >
              <Lbl text="Services" active={svcActive} />
              <motion.span
                animate={{ rotate: dropdown ? 180 : 0 }}
                transition={{ duration: 0.18 }}
                style={{ display: 'inline-flex', marginTop: -1 }}
              >
                <ChevronDown size={13} color={svcActive ? '#1B3A6B' : '#9CA3AF'} />
              </motion.span>
            </button>

            <AnimatePresence>
              {dropdown && <ServicesMenu onClose={() => setDropdown(false)} />}
            </AnimatePresence>
          </div>

          <NavLink to="/about"   style={({ isActive }) => linkStyle(isActive)}>
            {({ isActive }) => <Lbl text="About Us" active={isActive} />}
          </NavLink>

          <NavLink to="/why-us"  style={({ isActive }) => linkStyle(isActive)}>
            {({ isActive }) => <Lbl text="Why Us" active={isActive} />}
          </NavLink>

          <NavLink to="/contact" style={({ isActive }) => linkStyle(isActive)}>
            {({ isActive }) => <Lbl text="Contact Us" active={isActive} />}
          </NavLink>
        </nav>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex"
          style={{ alignItems: 'center', gap: 7, background: '#C8912A', color: '#fff', padding: '10px 22px', borderRadius: 7, fontFamily: '"DM Sans",sans-serif', fontWeight: 600, fontSize: 14, textDecoration: 'none', display: 'inline-flex', transition: 'background 0.18s, transform 0.15s' }}
          onMouseEnter={e => { e.currentTarget.style.background='#A67020'; e.currentTarget.style.transform='translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.background='#C8912A'; e.currentTarget.style.transform='translateY(0)' }}
        >
          Free Consultation
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMobile(v => !v)}
          className="lg:hidden"
          aria-label="Toggle menu"
          style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: '#1B3A6B' }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile drawer ─────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit  ={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            style={{ background: '#fff', borderTop: '1px solid #E5E7EB', overflow: 'hidden' }}
          >
            <div style={{ padding: '14px 24px 28px' }}>
              <NavLink to="/" end style={({ isActive }) => mobileLink(isActive)}>Home</NavLink>

              {/* Expandable services */}
              <button
                onClick={() => setMobileSvc(v => !v)}
                style={{ ...mobileLink(svcActive), width: '100%', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span>Services</span>
                <motion.span animate={{ rotate: mobileSvc ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={15} />
                </motion.span>
              </button>

              <AnimatePresence>
                {mobileSvc && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit  ={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ overflow: 'hidden', background: '#F8F9FB', borderRadius: 10, marginBottom: 4 }}
                  >
                    {SERVICES.map(({ id, Icon, label, colour }) => (
                      <Link
                        key={id}
                        to={`/services#${id}`}
                        onClick={() => { setMobile(false); setMobileSvc(false) }}
                        style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 14px', textDecoration: 'none', borderBottom: '1px solid #EAECEF' }}
                      >
                        <Icon size={14} color={colour} />
                        <span style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 14, color: '#374151', fontWeight: 500 }}>{label}</span>
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      onClick={() => { setMobile(false); setMobileSvc(false) }}
                      style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '11px 14px', textDecoration: 'none', fontFamily: '"DM Sans",sans-serif', fontWeight: 600, fontSize: 13, color: '#C8912A' }}
                    >
                      View all services <ArrowRight size={12} />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              <NavLink to="/about"   style={({ isActive }) => mobileLink(isActive)}>About Us</NavLink>
              <NavLink to="/why-us"  style={({ isActive }) => mobileLink(isActive)}>Why Us</NavLink>
              <NavLink to="/contact" style={({ isActive }) => mobileLink(isActive)}>Contact Us</NavLink>

              <Link
                to="/contact"
                onClick={() => setMobile(false)}
                style={{ display: 'flex', justifyContent: 'center', marginTop: 14, background: '#C8912A', color: '#fff', padding: '13px', borderRadius: 8, fontFamily: '"DM Sans",sans-serif', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}
              >
                Get Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ── Helpers ────────────────────────────────────────────── */
function linkStyle(active) {
  return {
    fontFamily:    '"DM Sans", sans-serif',
    fontSize:      15,
    fontWeight:    active ? 600 : 500,
    color:         active ? '#1B3A6B' : '#374151',
    textDecoration:'none',
    padding:       '8px 13px',
    borderRadius:  6,
    transition:    'color 0.15s',
  }
}

function Lbl({ text, active }) {
  return (
    <span style={{ position: 'relative', paddingBottom: 1 }}>
      {text}
      {active && (
        <span style={{ position: 'absolute', bottom: -5, left: 0, right: 0, height: 2, background: '#C8912A', borderRadius: 2 }} />
      )}
    </span>
  )
}

function mobileLink(active) {
  return {
    display:        'block',
    fontFamily:     '"DM Sans", sans-serif',
    fontSize:       16,
    fontWeight:     active ? 600 : 500,
    color:          active ? '#1B3A6B' : '#374151',
    textDecoration: 'none',
    padding:        '13px 0',
    borderBottom:   '1px solid #F0F2F5',
  }
}
