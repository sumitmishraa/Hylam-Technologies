import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, XCircle, ArrowRight, Clock, Award, Headphones, MapPin, Zap, Shield } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }

function Counter({ to, suffix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const ran = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !ran.current) {
        ran.current = true
        let start = 0; const inc = to / 60
        const t = setInterval(() => { start = Math.min(start + inc, to); setVal(parseFloat(start.toFixed(to % 1 !== 0 ? 1 : 0))); if (start >= to) clearInterval(t) }, 20)
      }
    }, { threshold: 0.4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [to])
  return <span ref={ref}>{Number.isInteger(to) ? Math.round(val) : val.toFixed(1)}{suffix}</span>
}

const DIFFERENTIATORS = [
  {
    Icon: Award,
    title: 'Certified, Not Just Experienced',
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
    text: 'Our engineers hold 40+ active certifications across AWS, Azure, GCP, Kubernetes, and leading security frameworks. We invest over ₹50 lakhs annually in team certifications and training — not because clients demand it, but because it\'s the right standard.',
    points: ['AWS Certified Solutions Architects', 'Azure & GCP Professional certifications', 'CISSP, CEH, CISM security certifications', 'Kubernetes CKA/CKAD certified engineers'],
  },
  {
    Icon: Zap,
    title: 'Agile Delivery, Real Transparency',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    text: 'We work in 2-week sprints with a dedicated project manager and shared project dashboard. You get weekly demo calls, not monthly status reports. We surface problems early — not when they\'ve become crises.',
    points: ['Dedicated project manager on every engagement', 'Shared live project dashboard', 'Weekly demo and progress calls', 'Issues surfaced early, always'],
  },
  {
    Icon: Headphones,
    title: 'Round-the-Clock Support',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    text: 'Our support team doesn\'t disappear after go-live. We offer tiered managed services with SLAs starting at 4-hour response times, and critical incident response within 30 minutes for production systems.',
    points: ['24/7 infrastructure monitoring', 'Sub-30-minute critical incident response', 'Dedicated support portal and ticketing', 'Quarterly business reviews included'],
  },
  {
    Icon: MapPin,
    title: 'Local Team, National Reach',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
    text: 'Based in Delhi, we work with clients across Mumbai, Bengaluru, Hyderabad, Pune, and Chennai. Our team can be on-site within 24 hours anywhere in India — and our remote-first culture means you get the same quality service regardless of location.',
    points: ['Headquarters in Rohini, Delhi NCR', 'On-site capability across major metros', 'India Standard Time support (always)', 'Deep understanding of Indian compliance landscape'],
  },
]

const COMPARISON = [
  { feature: 'Certified engineers (not just experienced)', us: true,  them: false },
  { feature: 'Weekly demos and transparent reporting',     us: true,  them: false },
  { feature: '24/7 monitoring with SLA guarantees',        us: true,  them: null  },
  { feature: 'Fixed-price engagements available',          us: true,  them: false },
  { feature: 'ISO 27001 aligned security practices',       us: true,  them: null  },
  { feature: 'Dedicated project manager included',         us: true,  them: false },
  { feature: 'On-site capability across India',            us: true,  them: null  },
]

const PROCESS = [
  { num: '01', title: 'Discovery',   desc: 'We audit your current environment, understand your goals, and identify the gaps — honestly, with no upselling.' },
  { num: '02', title: 'Design',      desc: 'Architecture blueprints, technology selection, effort estimates, and a project roadmap you can actually hold us to.' },
  { num: '03', title: 'Build',       desc: 'Agile sprints, weekly demos, full QA at every stage. You see working software continuously, not at the end.' },
  { num: '04', title: 'Scale',       desc: 'Go-live, handover, training, and ongoing managed services — we don\'t disappear after deployment.' },
]

export default function WhyUs() {
  return (
    <>
      {/* Page banner */}
      <div style={{ position: 'relative', background: '#1B3A6B', padding: '80px 24px 70px', overflow: 'hidden' }}>
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=60" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.12 }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, fontFamily: '"DM Sans",sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#C8912A' }}>Why Us</span>
          </div>
          <h1 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 800, fontSize: 'clamp(32px,5vw,56px)', color: '#ffffff', marginBottom: 16, lineHeight: 1.1 }}>Why Choose Hylam</h1>
          <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 18, color: 'rgba(255,255,255,0.65)', maxWidth: 540, lineHeight: 1.7 }}>
            India has hundreds of IT firms. Here's why 50+ enterprises chose us — and stayed.
          </p>
        </div>
      </div>

      {/* ── 4 Differentiators ──────────────────────────── */}
      {DIFFERENTIATORS.map((d, i) => {
        const Icon = d.Icon
        const isEven = i % 2 === 0
        return (
          <section key={d.title} style={{ background: isEven ? '#ffffff' : '#F5F7FA', padding: '88px 24px' }}>
            <div style={{ maxWidth: 1280, margin: '0 auto' }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <motion.div initial={{ opacity: 0, x: isEven ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ order: isEven ? 1 : 2 }}>
                  <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 16px 56px rgba(27,58,107,0.14)' }}>
                    <img src={d.img} alt={d.title} style={{ width: '100%', height: 380, objectFit: 'cover', display: 'block', transition: 'transform 0.6s' }} onMouseEnter={e=>e.currentTarget.style.transform='scale(1.04)'} onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'} />
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: isEven ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.12 }} style={{ order: isEven ? 2 : 1 }}>
                  <div style={{ width: 52, height: 52, background: '#EEF2F8', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <Icon size={24} color="#1B3A6B" />
                  </div>
                  <h2 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 800, fontSize: 'clamp(24px,3.5vw,36px)', color: '#1B3A6B', marginBottom: 8, lineHeight: 1.15 }}>{d.title}</h2>
                  <div style={{ width: 48, height: 4, background: '#C8912A', borderRadius: 2, marginBottom: 24 }} />
                  <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 16, color: '#374151', lineHeight: 1.85, marginBottom: 28 }}>{d.text}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {d.points.map(p => (
                      <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <CheckCircle2 size={16} color="#C8912A" style={{ flexShrink: 0, marginTop: 3 }} />
                        <span style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 15, color: '#374151' }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}

      {/* ── Stats ──────────────────────────────────────── */}
      <section style={{ background: '#1B3A6B', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: 10,   suf: '+',  label: 'Years Experience',    icon: Clock },
              { val: 40,   suf: '+',  label: 'Certifications Held', icon: Award },
              { val: 99.9, suf: '%',  label: 'Client Retention',    icon: Shield },
              { val: 30,   suf: 'min',label: 'Avg Incident Response',icon: Zap },
            ].map(({ val, suf, label, icon: Icon }, i) => (
              <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ textAlign: 'center' }}>
                <div style={{ width: 52, height: 52, background: 'rgba(200,145,42,0.15)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Icon size={24} color="#C8912A" />
                </div>
                <div style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 800, fontSize: 40, color: '#C8912A', lineHeight: 1 }}>
                  <Counter to={val} suffix={suf} />
                </div>
                <div style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.6)', marginTop: 8 }}>{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison table ───────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '88px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-eyebrow">The Honest Comparison</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(26px,4vw,40px)' }}>Hylam vs. Typical IT Vendors</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: 14, overflow: 'hidden' }}>
              {/* Header */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#1B3A6B' }}>
                <div style={{ padding: '16px 24px', fontFamily: '"Space Grotesk",sans-serif', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Feature</div>
                <div style={{ padding: '16px 24px', fontFamily: '"Space Grotesk",sans-serif', fontSize: 14, fontWeight: 700, color: '#C8912A', textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>Hylam Technologies</div>
                <div style={{ padding: '16px 24px', fontFamily: '"Space Grotesk",sans-serif', fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.5)', textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>Typical IT Vendor</div>
              </div>
              {/* Rows */}
              {COMPARISON.map((row, i) => (
                <div key={row.feature} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: i % 2 === 0 ? '#ffffff' : '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
                  <div style={{ padding: '16px 24px', fontFamily: '"DM Sans",sans-serif', fontSize: 14, color: '#374151' }}>{row.feature}</div>
                  <div style={{ padding: '16px 24px', textAlign: 'center', borderLeft: '1px solid #E5E7EB' }}>
                    <CheckCircle2 size={20} color="#C8912A" style={{ margin: '0 auto' }} />
                  </div>
                  <div style={{ padding: '16px 24px', textAlign: 'center', borderLeft: '1px solid #E5E7EB' }}>
                    {row.them === true  && <CheckCircle2 size={20} color="#22C55E" style={{ margin: '0 auto' }} />}
                    {row.them === false && <XCircle      size={20} color="#EF4444" style={{ margin: '0 auto' }} />}
                    {row.them === null  && <span style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 13, color: '#9CA3AF' }}>Varies</span>}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Our Process ────────────────────────────────── */}
      <section style={{ background: '#F5F7FA', padding: '88px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-eyebrow">How We Work</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(26px,4vw,40px)', marginBottom: 12 }}>Our 4-Step Engagement Model</h2>
            <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 16, color: '#4B5563', maxWidth: 480, margin: '0 auto' }}>Proven across 200+ projects. Predictable, transparent, and effective.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: '#ffffff', border: '1px solid #E5E7EB', borderRadius: 14, padding: '32px 28px', position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ position: 'absolute', top: 16, right: 20, fontFamily: '"Space Grotesk",sans-serif', fontWeight: 800, fontSize: 56, color: '#F0F2F5', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>{s.num}</div>
                <div style={{ width: 48, height: 48, background: '#1B3A6B', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <span style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 800, fontSize: 16, color: '#C8912A' }}>{s.num}</span>
                </div>
                <h4 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 18, color: '#111827', marginBottom: 12 }}>{s.title}</h4>
                <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 14, color: '#4B5563', lineHeight: 1.75 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section style={{ position: 'relative', background: '#1B3A6B', padding: '88px 24px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -60, top: -60, width: 280, height: 280, borderRadius: '50%', background: 'rgba(200,145,42,0.08)' }} />
        <div style={{ maxWidth: 640, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 800, fontSize: 'clamp(26px,4vw,40px)', color: '#ffffff', marginBottom: 16 }}>
            Experience the Hylam Difference
          </h2>
          <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 17, color: 'rgba(255,255,255,0.65)', marginBottom: 36, lineHeight: 1.7 }}>
            Book a free 30-minute discovery call. No commitment, no sales pitch — just an honest look at what we can build together.
          </p>
          <Link to="/contact" style={{ background: '#C8912A', color: '#fff', padding: '16px 40px', borderRadius: 8, fontFamily: '"DM Sans",sans-serif', fontWeight: 600, fontSize: 16, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Book Free Discovery Call <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  )
}
