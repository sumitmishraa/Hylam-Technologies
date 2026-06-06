import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Cloud, GitBranch, BarChart3, Shield, Cpu, Globe,
  CheckCircle2, ArrowRight, Quote, Star, ChevronRight,
} from 'lucide-react'

/* ─── animated counter ──────────────────────────────────── */
function Counter({ to, suffix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const ran = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !ran.current) {
        ran.current = true
        let start = 0
        const steps = 60
        const inc = to / steps
        const t = setInterval(() => {
          start = Math.min(start + inc, to)
          setVal(parseFloat(start.toFixed(to % 1 !== 0 ? 1 : 0)))
          if (start >= to) clearInterval(t)
        }, 20)
      }
    }, { threshold: 0.4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [to])

  return (
    <span ref={ref}>
      {Number.isInteger(to) ? Math.round(val) : val.toFixed(1)}{suffix}
    </span>
  )
}

/* ─── service cards ──────────────────────────────────────── */
const SERVICES = [
  { Icon: Cloud,    title: 'Cloud Solutions',        colour: '#1B3A6B', desc: 'AWS, Azure & GCP migration, management and cost optimisation.' },
  { Icon: GitBranch,title: 'DevOps & CI/CD',         colour: '#2B5EA7', desc: 'Automated pipelines, Kubernetes orchestration and IaC with Terraform.' },
  { Icon: BarChart3,title: 'Data Analytics',         colour: '#C8912A', desc: 'Business intelligence, ETL pipelines and predictive analytics.' },
  { Icon: Shield,   title: 'Cybersecurity',          colour: '#1B3A6B', desc: 'Security audits, pen-testing, SIEM and ISO 27001 compliance.' },
  { Icon: Cpu,      title: 'IT Consulting',          colour: '#2B5EA7', desc: 'Digital transformation roadmaps and CTO-as-a-service.' },
  { Icon: Globe,    title: 'Web & App Development',  colour: '#C8912A', desc: 'Full-stack apps, enterprise portals, APIs and mobile solutions.' },
]

/* ─── testimonials ───────────────────────────────────────── */
const TESTIMONIALS = [
  {
    quote: 'Hylam moved us from chaotic on-prem servers to a fully managed AWS setup in just 8 weeks. Our downtime dropped to zero.',
    name: 'Rajesh Mehta', role: 'CTO', company: 'NovaStar Fintech',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=80&q=80',
    initials: 'RM',
  },
  {
    quote: 'Their DevOps team cut our deployment time from 3 days to under 2 hours. The CI/CD pipeline they built is absolutely bulletproof.',
    name: 'Priya Sharma', role: 'VP Engineering', company: 'LogiTrack India',
    avatar: 'https://images.unsplash.com/photo-1573496799515-eebbb63814f2?auto=format&fit=crop&w=80&q=80',
    initials: 'PS',
  },
  {
    quote: 'The cybersecurity audit uncovered vulnerabilities we had no idea about. Hylam got us ISO 27001 compliant within 4 months.',
    name: 'Amit Gupta', role: 'CISO', company: 'RetailEdge Solutions',
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=80&q=80',
    initials: 'AG',
  },
]

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

export default function Home() {
  return (
    <>
      {/* ══════ HERO ══════════════════════════════════════════ */}
      <section style={{ background: '#ffffff', minHeight: 'calc(100vh - 72px)', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px', width: '100%' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — copy */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              {/* Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FDF3DC', border: '1px solid rgba(200,145,42,0.35)', borderRadius: 100, padding: '7px 16px', marginBottom: 24 }}>
                <span style={{ width: 8, height: 8, background: '#C8912A', borderRadius: '50%' }} />
                <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 13, fontWeight: 600, color: '#A67020' }}>
                  Certified IT Excellence Since 2013
                </span>
              </div>

              <h1
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(36px, 5vw, 62px)',
                  lineHeight: 1.08,
                  color: '#111827',
                  marginBottom: 24,
                  letterSpacing: '-1px',
                }}
              >
                Transforming Businesses<br />
                Through{' '}
                <span style={{ color: '#1B3A6B' }}>Intelligent</span>
                <br />
                <span style={{ borderBottom: '4px solid #C8912A', paddingBottom: 2 }}>Technology</span>
              </h1>

              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 18, color: '#4B5563', lineHeight: 1.75, maxWidth: 480, marginBottom: 36 }}>
                End-to-end IT solutions — cloud, DevOps, data analytics, cybersecurity, and consulting.
                Headquartered in Delhi, trusted by enterprises across India.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 48 }}>
                <Link to="/contact" className="btn-navy" style={{ background: '#1B3A6B', color: '#fff', padding: '14px 32px', borderRadius: 8, fontFamily: '"DM Sans",sans-serif', fontWeight: 600, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  Start a Project <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="btn-outline" style={{ borderColor: '#1B3A6B', color: '#1B3A6B', padding: '14px 32px', borderRadius: 8, border: '2px solid #1B3A6B', fontFamily: '"DM Sans",sans-serif', fontWeight: 600, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                  Explore Services
                </Link>
              </div>

              {/* Stats row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
                {[
                  { val: 10, suf: '+',  label: 'Years Experience' },
                  { val: 200, suf: '+', label: 'Projects Delivered' },
                  { val: 50, suf: '+',  label: 'Enterprise Clients' },
                ].map((s, i) => (
                  <div key={s.label} style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ paddingRight: 28, paddingLeft: i === 0 ? 0 : 28 }}>
                      <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 800, fontSize: 28, color: '#1B3A6B' }}>
                        <Counter to={s.val} suffix={s.suf} />
                      </div>
                      <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 13, color: '#6B7280' }}>{s.label}</div>
                    </div>
                    {i < 2 && <div style={{ width: 1, height: 44, background: '#E5E7EB' }} />}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — hero image */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }} style={{ position: 'relative' }}>
              <div style={{ borderRadius: 16, overflow: 'hidden', position: 'relative', boxShadow: '0 24px 80px rgba(27,58,107,0.18)' }}>
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80"
                  alt="Technology professionals at work"
                  style={{ width: '100%', height: 480, objectFit: 'cover', display: 'block' }}
                />
                {/* Navy colour overlay — bottom */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(10,26,51,0.65), transparent)' }} />
              </div>

              {/* Floating badge 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', top: 24, right: -20,
                  background: '#ffffff', borderRadius: 12,
                  boxShadow: '0 8px 32px rgba(27,58,107,0.18)',
                  padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 10,
                  border: '1px solid #E5E7EB',
                }}
              >
                <div style={{ width: 36, height: 36, background: '#FDF3DC', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Shield size={18} color="#C8912A" />
                </div>
                <div>
                  <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: 14, color: '#111827' }}>ISO 27001</div>
                  <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 11, color: '#6B7280' }}>Compliant</div>
                </div>
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                style={{
                  position: 'absolute', bottom: 32, left: -20,
                  background: '#1B3A6B', borderRadius: 12,
                  boxShadow: '0 8px 32px rgba(27,58,107,0.35)',
                  padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 10,
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: 20, color: '#C8912A' }}>99.9%</span>
                  <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>Avg Uptime SLA</span>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════ STATS BAR ═════════════════════════════════════ */}
      <section style={{ background: '#1B3A6B', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: 10,   suf: '+',  label: 'Years of Excellence',    sub: 'Delivering IT solutions since 2013' },
              { val: 200,  suf: '+',  label: 'Projects Delivered',     sub: 'Across industries nationwide' },
              { val: 50,   suf: '+',  label: 'Enterprise Clients',     sub: 'Trusted partners, not just customers' },
              { val: 99.9, suf: '%',  label: 'Uptime SLA',             sub: 'Round-the-clock reliability' },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 800, fontSize: 40, color: '#C8912A', lineHeight: 1 }}>
                  <Counter to={s.val} suffix={s.suf} />
                </div>
                <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontSize: 15, color: '#ffffff', marginTop: 6 }}>{s.label}</div>
                <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SERVICES PREVIEW ══════════════════════════════ */}
      <section style={{ background: '#ffffff', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-eyebrow">What We Do</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(28px,4vw,44px)', marginBottom: 16 }}>
              End-to-End IT Services
            </h2>
            <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 17, color: '#4B5563', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              From strategy to execution — we cover every layer of your technology stack.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SERVICES.map(({ Icon, title, colour, desc }) => (
              <motion.div key={title} variants={fadeUp}
                style={{ background: '#ffffff', border: '1px solid #E5E7EB', borderRadius: 14, padding: '32px 28px', cursor: 'default', transition: 'box-shadow 0.25s, transform 0.25s, border-color 0.25s' }}
                whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(27,58,107,0.12)', borderColor: 'rgba(27,58,107,0.25)' }}
              >
                <div style={{ width: 52, height: 52, background: colour === '#C8912A' ? '#FDF3DC' : '#EEF2F8', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <Icon size={24} color={colour} />
                </div>
                <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: 18, color: '#111827', marginBottom: 10 }}>{title}</h3>
                <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 14, color: '#6B7280', lineHeight: 1.7, marginBottom: 20 }}>{desc}</p>
                <Link to="/services" style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 14, fontWeight: 600, color: '#1B3A6B', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  Learn More <ChevronRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <Link to="/services" className="btn-primary" style={{ background: '#1B3A6B', color: '#fff', padding: '14px 36px', borderRadius: 8, fontFamily: '"DM Sans",sans-serif', fontWeight: 600, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════ ABOUT PREVIEW ════════════════════════════════ */}
      <section style={{ background: '#F5F7FA', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image left */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ position: 'relative' }}>
              <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 60px rgba(27,58,107,0.15)' }}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Hylam Technologies team collaborating"
                  style={{ width: '100%', height: 480, objectFit: 'cover', display: 'block' }}
                />
              </div>
              {/* Experience badge */}
              <div style={{ position: 'absolute', bottom: -20, right: -12, background: '#C8912A', borderRadius: 14, padding: '20px 24px', boxShadow: '0 12px 40px rgba(200,145,42,0.4)', textAlign: 'center' }}>
                <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 800, fontSize: 36, color: '#ffffff', lineHeight: 1 }}>10+</div>
                <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.85)', marginTop: 4 }}>Years of<br />Experience</div>
              </div>
            </motion.div>

            {/* Text right */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
              <span className="section-eyebrow">About Hylam</span>
              <h2 className="section-title" style={{ fontSize: 'clamp(28px,4vw,42px)', marginBottom: 20 }}>
                Delhi's Most Trusted<br />IT Solutions Partner
              </h2>
              <div style={{ width: 56, height: 4, background: '#C8912A', borderRadius: 2, marginBottom: 24 }} />
              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 16, color: '#374151', lineHeight: 1.8, marginBottom: 24 }}>
                Founded in 2013, Hylam Technologies Pvt Ltd has grown from a boutique consultancy to a full-service IT solutions firm serving enterprises across India. We combine deep technical expertise with genuine business understanding.
              </p>
              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 16, color: '#374151', lineHeight: 1.8, marginBottom: 32 }}>
                Our certified engineers have delivered transformative projects for fintech, retail, healthcare, logistics, and government organisations — always on time, always on budget.
              </p>
              {[
                'AWS, Azure & GCP certified engineers',
                'ISO 27001 security-aligned processes',
                'Agile delivery with weekly client demos',
                '24/7 monitoring and incident response',
              ].map((point) => (
                <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
                  <CheckCircle2 size={18} color="#C8912A" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 15, color: '#374151' }}>{point}</span>
                </div>
              ))}
              <div style={{ marginTop: 36 }}>
                <Link to="/about" style={{ background: '#1B3A6B', color: '#fff', padding: '14px 32px', borderRadius: 8, fontFamily: '"DM Sans",sans-serif', fontWeight: 600, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  Our Full Story <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════ WHY CHOOSE US (3 pillars) ════════════════════ */}
      <section style={{ background: '#ffffff', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-eyebrow">Why Hylam</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(28px,4vw,44px)', marginBottom: 12 }}>Built Different. Built Better.</h2>
            <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 17, color: '#4B5563', maxWidth: 500, margin: '0 auto' }}>Three commitments that set us apart from every other IT firm in India.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80',
                title: 'Certified Expertise',
                text: 'Our engineers hold active certifications from AWS, Microsoft, Google, and leading security bodies. Not badges — real, practised knowledge applied to your project every day.',
              },
              {
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
                title: 'Transparent Delivery',
                text: 'Weekly sprint demos, shared dashboards, and a dedicated project manager. You\'ll never wonder what\'s happening — full visibility is built into our process.',
              },
              {
                img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
                title: '24/7 Support & Care',
                text: 'Round-the-clock monitoring, sub-30-minute incident response, and a helpdesk that actually answers — because your business runs even when you don\'t.',
              },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                style={{ borderRadius: 14, overflow: 'hidden', background: '#fff', border: '1px solid #E5E7EB', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}
              >
                <div style={{ height: 200, overflow: 'hidden' }}>
                  <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} onMouseEnter={e=>e.currentTarget.style.transform='scale(1.05)'} onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'} />
                </div>
                <div style={{ padding: '28px 28px 32px' }}>
                  <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: 20, color: '#111827', marginBottom: 12 }}>{item.title}</h3>
                  <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 15, color: '#4B5563', lineHeight: 1.75 }}>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <Link to="/why-us" style={{ border: '2px solid #1B3A6B', color: '#1B3A6B', padding: '13px 36px', borderRadius: 8, fontFamily: '"DM Sans",sans-serif', fontWeight: 600, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Why Choose Hylam <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════ TESTIMONIALS ══════════════════════════════════ */}
      <section style={{ background: '#F5F7FA', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-eyebrow">Client Stories</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>What Our Clients Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                style={{ background: '#ffffff', border: '1px solid #E5E7EB', borderRadius: 14, padding: '32px', position: 'relative' }}
              >
                <Quote size={28} color="#EEF2F8" style={{ position: 'absolute', top: 24, right: 24 }} />
                {/* Stars */}
                <div style={{ display: 'flex', gap: 3, marginBottom: 20 }}>
                  {[...Array(5)].map((_, j) => <Star key={j} size={15} fill="#F0B429" color="#F0B429" />)}
                </div>
                <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 15, color: '#374151', lineHeight: 1.8, marginBottom: 24, fontStyle: 'italic' }}>
                  "{t.quote}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 20, borderTop: '1px solid #F0F2F5' }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid #E5E7EB' }}>
                    <img src={t.avatar} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { e.target.style.display='none'; e.target.parentElement.style.background='#EEF2F8'; e.target.parentElement.innerHTML=`<span style="font-family:Space Grotesk;font-weight:700;font-size:14px;color:#1B3A6B;display:flex;align-items:center;justify-content:center;width:100%;height:100%">${t.initials}</span>` }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontSize: 14, color: '#111827' }}>{t.name}</div>
                    <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 12, color: '#9CA3AF' }}>{t.role} · {t.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CTA BANNER ════════════════════════════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=70"
          alt="Modern office"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,26,51,0.85)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '96px 24px', textAlign: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span style={{ display: 'inline-block', background: 'rgba(200,145,42,0.2)', border: '1px solid rgba(200,145,42,0.5)', borderRadius: 100, padding: '6px 18px', fontFamily: '"DM Sans",sans-serif', fontSize: 13, fontWeight: 600, color: '#F0B429', marginBottom: 24 }}>
              Let's Build Something Great
            </span>
            <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 800, fontSize: 'clamp(28px,5vw,52px)', color: '#ffffff', marginBottom: 20, lineHeight: 1.15 }}>
              Ready to Transform<br />Your Business?
            </h2>
            <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 500, margin: '0 auto 40px', lineHeight: 1.7 }}>
              Free consultation. No commitment. Just an honest conversation about what we can achieve together.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
              <Link to="/contact" style={{ background: '#C8912A', color: '#fff', padding: '16px 36px', borderRadius: 8, fontFamily: '"DM Sans",sans-serif', fontWeight: 600, fontSize: 16, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Book Free Consultation <ArrowRight size={17} />
              </Link>
              <a href="mailto:info@hylamtechnologies.com" style={{ background: 'transparent', border: '2px solid rgba(255,255,255,0.4)', color: '#fff', padding: '14px 34px', borderRadius: 8, fontFamily: '"DM Sans",sans-serif', fontWeight: 600, fontSize: 16, textDecoration: 'none' }}>
                info@hylamtechnologies.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
