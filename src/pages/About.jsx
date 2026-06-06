import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Users, Target, Heart, Award } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }

const TEAM = [
  { name: 'Ankit Sharma',   role: 'Founder & CEO',          cert: 'AWS Solutions Architect',   avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80', initials: 'AS', color: '#1B3A6B' },
  { name: 'Neha Kapoor',    role: 'CTO & Head of Cloud',    cert: 'Azure Solutions Expert',     avatar: 'https://images.unsplash.com/photo-1573496799515-eebbb63814f2?auto=format&fit=crop&w=300&q=80', initials: 'NK', color: '#2B5EA7' },
  { name: 'Vikram Singh',   role: 'Head of Cybersecurity',  cert: 'CISSP & CEH Certified',      avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80', initials: 'VS', color: '#C8912A' },
  { name: 'Ritu Verma',     role: 'Lead Data Architect',    cert: 'GCP Professional Data Eng.',  avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80', initials: 'RV', color: '#1B3A6B' },
]

const VALUES = [
  { Icon: Target,  title: 'Client-First',   text: 'Every decision we make is filtered through one question: does this serve our client\'s actual business goals?' },
  { Icon: Award,   title: 'Excellence',     text: 'We hold ourselves to the same standard whether we\'re building for a startup or a multinational.' },
  { Icon: Heart,   title: 'Integrity',      text: 'We\'d rather lose a deal than win it by overpromising. Our relationships are built on honest conversations.' },
  { Icon: Users,   title: 'Collaboration',  text: 'We embed with your team, not just deliver to it. The best outcomes happen when we build together.' },
]

const MILESTONES = [
  { year: '2013', title: 'Founded',           text: 'Hylam Technologies started as a 3-person consultancy in Rohini, Delhi.' },
  { year: '2015', title: 'Cloud Practice',    text: 'Launched our dedicated cloud migration practice as AWS adoption took off in India.' },
  { year: '2017', title: '50th Client',       text: 'Crossed 50 enterprise clients with our first national manufacturing company project.' },
  { year: '2019', title: 'Security Division', text: 'Built a dedicated cybersecurity team following the RBI\'s NBFC security framework mandate.' },
  { year: '2021', title: 'Data Practice',     text: 'Launched data analytics and ML practice as digital-first transformation accelerated post-COVID.' },
  { year: '2023', title: 'Scale & Growth',    text: 'Grew to 80+ engineers. 200+ projects delivered. Recognised as a Top IT Partner in Delhi NCR.' },
]

export default function About() {
  return (
    <>
      {/* Page banner */}
      <div style={{ position: 'relative', background: '#1B3A6B', padding: '80px 24px 70px', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=60"
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }}
        />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, fontFamily: '"DM Sans",sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#C8912A' }}>About Us</span>
          </div>
          <h1 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 800, fontSize: 'clamp(32px,5vw,56px)', color: '#ffffff', marginBottom: 16, lineHeight: 1.1 }}>
            About Us
          </h1>
          <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 18, color: 'rgba(255,255,255,0.65)', maxWidth: 540, lineHeight: 1.7 }}>
            A Delhi-based team of certified engineers and strategists who've been transforming Indian businesses through technology since 2013.
          </p>
        </div>
      </div>

      {/* ── Our Story ──────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 60px rgba(27,58,107,0.15)' }}>
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                  alt="Hylam Technologies Delhi office"
                  style={{ width: '100%', height: 480, objectFit: 'cover', display: 'block' }}
                />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.12 }}>
              <span className="section-eyebrow">Our Story</span>
              <h2 className="section-title" style={{ fontSize: 'clamp(28px,4vw,42px)', marginBottom: 16 }}>From Three Desks in Rohini to India's Go-To IT Partner</h2>
              <div style={{ width: 56, height: 4, background: '#C8912A', borderRadius: 2, marginBottom: 28 }} />
              <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 16, color: '#374151', lineHeight: 1.85, marginBottom: 20 }}>
                In 2013, three engineers who'd grown frustrated with the industry's tendency to oversell and underdeliver decided to build something different. Hylam Technologies was founded on a single idea: that honest, technically excellent IT work could speak for itself.
              </p>
              <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 16, color: '#374151', lineHeight: 1.85, marginBottom: 20 }}>
                We started with infrastructure consulting for small businesses in Delhi NCR. Word spread. Clients referred us to their networks. Within three years we were working with enterprises across five industries.
              </p>
              <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 16, color: '#374151', lineHeight: 1.85, marginBottom: 32 }}>
                Today, Hylam has 80+ engineers, six practice areas, and a reputation built entirely on results — not marketing budgets.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: '2013', label: 'Year Founded' },
                  { num: '80+',  label: 'Engineers on Team' },
                  { num: '200+', label: 'Projects Delivered' },
                  { num: '6',    label: 'Practice Areas' },
                ].map(s => (
                  <div key={s.label} style={{ padding: '20px', background: '#F5F7FA', borderRadius: 12, border: '1px solid #E5E7EB' }}>
                    <div style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 800, fontSize: 28, color: '#1B3A6B' }}>{s.num}</div>
                    <div style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 13, color: '#6B7280', marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mission / Vision / Values ──────────────────── */}
      <section style={{ background: '#F5F7FA', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-eyebrow">What Drives Us</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(28px,4vw,42px)' }}>Mission, Vision & Values</h2>
          </motion.div>

          {/* Mission + Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { label: 'Our Mission', colour: '#1B3A6B', text: 'To help Indian businesses compete at a global level by building the technology foundations that enable speed, security, and scale — without the enterprise tax.' },
              { label: 'Our Vision',  colour: '#C8912A', text: 'To become the most trusted technology partner for mid-market and enterprise businesses across India — recognised not for size, but for the outcomes we deliver.' },
            ].map(m => (
              <motion.div key={m.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                style={{ background: '#ffffff', border: '1px solid #E5E7EB', borderRadius: 14, padding: '36px', borderTop: `4px solid ${m.colour}` }}
              >
                <h3 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 20, color: m.colour, marginBottom: 16 }}>{m.label}</h3>
                <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 16, color: '#374151', lineHeight: 1.8 }}>{m.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => {
              const Icon = v.Icon
              return (
                <motion.div key={v.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{ background: '#ffffff', border: '1px solid #E5E7EB', borderRadius: 14, padding: '28px 24px', textAlign: 'center' }}
                >
                  <div style={{ width: 52, height: 52, background: '#EEF2F8', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <Icon size={24} color="#1B3A6B" />
                  </div>
                  <h4 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 17, color: '#111827', marginBottom: 10 }}>{v.title}</h4>
                  <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 14, color: '#6B7280', lineHeight: 1.7 }}>{v.text}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Team ───────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-eyebrow">The People</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(28px,4vw,42px)', marginBottom: 12 }}>Leadership Team</h2>
            <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 17, color: '#4B5563', maxWidth: 500, margin: '0 auto' }}>
              Certified experts who've built careers on solving complex technical challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: '#ffffff', border: '1px solid #E5E7EB', borderRadius: 14, overflow: 'hidden', transition: 'box-shadow 0.25s, transform 0.25s' }}
                whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(27,58,107,0.12)' }}
              >
                <div style={{ height: 200, overflow: 'hidden', background: '#EEF2F8' }}>
                  <img src={m.avatar} alt={m.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.5s' }}
                    onMouseEnter={e=>e.currentTarget.style.transform='scale(1.06)'}
                    onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}
                    onError={e => {
                      e.target.style.display = 'none'
                      e.target.parentElement.style.display = 'flex'
                      e.target.parentElement.style.alignItems = 'center'
                      e.target.parentElement.style.justifyContent = 'center'
                      e.target.parentElement.innerHTML = `<span style="font-family:Space Grotesk;font-weight:800;font-size:32px;color:${m.color}">${m.initials}</span>`
                    }}
                  />
                </div>
                <div style={{ padding: '20px 20px 24px' }}>
                  <h4 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 16, color: '#111827', marginBottom: 4 }}>{m.name}</h4>
                  <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 13, color: '#1B3A6B', fontWeight: 600, marginBottom: 8 }}>{m.role}</p>
                  <div style={{ display: 'inline-block', background: '#FDF3DC', border: '1px solid rgba(200,145,42,0.3)', borderRadius: 100, padding: '3px 10px', fontFamily: '"DM Sans",sans-serif', fontSize: 11, color: '#A67020', fontWeight: 500 }}>{m.cert}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline / Milestones ─────────────────────── */}
      <section style={{ background: '#F5F7FA', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-eyebrow">Our Journey</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(28px,4vw,42px)' }}>10+ Years of Milestones</h2>
          </motion.div>

          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: '#E5E7EB', transform: 'translateX(-50%)' }} className="hidden md:block" />

            {MILESTONES.map((m, i) => (
              <motion.div key={m.year} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 ${i % 2 === 0 ? '' : 'md:direction-reverse'}`}
              >
                {/* Content */}
                <div style={{ display: 'flex', justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start' }} className={i % 2 !== 0 ? 'md:order-2' : ''}>
                  <div style={{ maxWidth: 380, background: '#ffffff', border: '1px solid #E5E7EB', borderRadius: 14, padding: '24px 28px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
                    <h4 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 18, color: '#111827', marginBottom: 8 }}>{m.title}</h4>
                    <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 14, color: '#4B5563', lineHeight: 1.7 }}>{m.text}</p>
                  </div>
                </div>
                {/* Year dot */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end' }} className={`hidden md:flex ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingLeft: i % 2 === 0 ? 20 : 0, paddingRight: i % 2 !== 0 ? 20 : 0, flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}>
                    <div style={{ width: 48, height: 48, background: '#1B3A6B', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #fff', boxShadow: '0 0 0 2px #1B3A6B', flexShrink: 0 }}>
                      <span style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 800, fontSize: 10, color: '#C8912A', textAlign: 'center', lineHeight: 1 }}>{m.year}</span>
                    </div>
                  </div>
                </div>
                {/* Mobile year */}
                <div className="md:hidden" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: -16 }}>
                  <div style={{ width: 32, height: 32, background: '#1B3A6B', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 800, fontSize: 8, color: '#C8912A' }}>{m.year}</span>
                  </div>
                  <span style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 14, color: '#1B3A6B' }}>{m.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section style={{ background: '#1B3A6B', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=60" alt="" style={{ position: 'absolute', display: 'none' }} />
          <h2 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 800, fontSize: 'clamp(26px,4vw,40px)', color: '#ffffff', marginBottom: 16 }}>
            Work With a Team That Takes Ownership
          </h2>
          <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 17, color: 'rgba(255,255,255,0.65)', marginBottom: 36, lineHeight: 1.7 }}>
            We don't just complete tickets — we take responsibility for outcomes. Let's talk about what that looks like for your project.
          </p>
          <Link to="/contact" style={{ background: '#C8912A', color: '#fff', padding: '16px 40px', borderRadius: 8, fontFamily: '"DM Sans",sans-serif', fontWeight: 600, fontSize: 16, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Start the Conversation <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  )
}
