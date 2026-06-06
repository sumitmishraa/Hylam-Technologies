import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Phone, Send, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }

const FAQS = [
  { q: 'What is the typical timeline for a cloud migration project?', a: 'Scope varies widely, but most mid-size migrations (50–200 servers) take 8–14 weeks. We provide a detailed project timeline after the discovery phase — and we stick to it.' },
  { q: 'Do you work with startups, or only enterprises?', a: 'Both. We have dedicated engagement models for startups (fixed-scope, fixed-price packages) and enterprises (T&M or managed services). We\'ve served organisations from 5 to 5,000 employees.' },
  { q: 'Can you take over an existing IT infrastructure or project?', a: 'Absolutely. Roughly 40% of our engagements start as infrastructure takeovers or project rescues. We\'ll audit what exists, document it properly, and stabilise before improving.' },
  { q: 'What does a typical engagement look like financially?', a: 'We offer three models: fixed-price (scoped projects), time & materials (ongoing development), and managed services (monthly retainer). Minimums start at ₹2.5L for scoped projects.' },
  { q: 'Do you provide post-project support?', a: 'Yes — all engagements include a 30-day hypercare period post go-live at no extra cost. After that, clients move to one of our managed services tiers with SLA-backed support.' },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ border: '1px solid #E5E7EB', borderRadius: 10, overflow: 'hidden', marginBottom: 8 }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{ width: '100%', padding: '18px 24px', background: open ? '#F5F7FA' : '#ffffff', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, textAlign: 'left' }}
      >
        <span style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 600, fontSize: 15, color: '#111827' }}>{q}</span>
        {open ? <ChevronUp size={18} color="#1B3A6B" style={{ flexShrink: 0 }} /> : <ChevronDown size={18} color="#6B7280" style={{ flexShrink: 0 }} />}
      </button>
      {open && (
        <div style={{ padding: '4px 24px 20px', fontFamily: '"DM Sans",sans-serif', fontSize: 15, color: '#374151', lineHeight: 1.75 }}>
          {a}
        </div>
      )}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1200)
  }

  const field = (label, name, type = 'text', required = true) => (
    <div style={{ marginBottom: 20 }}>
      <label style={{ display: 'block', fontFamily: '"DM Sans",sans-serif', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>
        {label} {required && <span style={{ color: '#C8912A' }}>*</span>}
      </label>
      <input
        type={type}
        value={form[name]}
        onChange={e => setForm(f => ({ ...f, [name]: e.target.value }))}
        required={required}
        style={{ width: '100%', padding: '12px 16px', border: '1px solid #D1D5DB', borderRadius: 8, fontFamily: '"DM Sans",sans-serif', fontSize: 15, color: '#111827', outline: 'none', transition: 'border-color 0.2s', background: '#fff' }}
        onFocus={e => e.target.style.borderColor = '#1B3A6B'}
        onBlur={e => e.target.style.borderColor = '#D1D5DB'}
      />
    </div>
  )

  return (
    <>
      {/* Page banner */}
      <div style={{ position: 'relative', background: '#1B3A6B', padding: '80px 24px 70px', overflow: 'hidden' }}>
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=60" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.12 }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, fontFamily: '"DM Sans",sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#C8912A' }}>Contact Us</span>
          </div>
          <h1 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 800, fontSize: 'clamp(32px,5vw,56px)', color: '#ffffff', marginBottom: 16, lineHeight: 1.1 }}>Contact Us</h1>
          <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 18, color: 'rgba(255,255,255,0.65)', maxWidth: 540, lineHeight: 1.7 }}>
            Free consultation. No commitment. Just an honest conversation about what we can build together.
          </p>
        </div>
      </div>

      {/* ── Contact form + info ─────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Form — 3 cols */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="lg:col-span-3"
              style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: '40px 40px 44px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
            >
              <h2 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 26, color: '#111827', marginBottom: 8 }}>Send Us a Message</h2>
              <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 15, color: '#6B7280', marginBottom: 32 }}>We typically respond within one business day.</p>

              {sent ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <CheckCircle2 size={56} color="#C8912A" style={{ margin: '0 auto 20px' }} />
                  <h3 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 22, color: '#111827', marginBottom: 12 }}>Message Received!</h3>
                  <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 15, color: '#4B5563' }}>Thank you for reaching out. Our team will be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4">
                    <div>{field('Full Name', 'name')}</div>
                    <div>{field('Email Address', 'email', 'email')}</div>
                  </div>
                  {field('Company Name', 'company', 'text', false)}
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', fontFamily: '"DM Sans",sans-serif', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>
                      Service of Interest
                    </label>
                    <select
                      value={form.service}
                      onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                      style={{ width: '100%', padding: '12px 16px', border: '1px solid #D1D5DB', borderRadius: 8, fontFamily: '"DM Sans",sans-serif', fontSize: 15, color: form.service ? '#111827' : '#9CA3AF', outline: 'none', background: '#fff', cursor: 'pointer' }}
                    >
                      <option value="">Select a service...</option>
                      {['Cloud Solutions', 'DevOps & CI/CD', 'Data Analytics', 'Cybersecurity', 'IT Consulting', 'Web & App Development', 'General Inquiry'].map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div style={{ marginBottom: 28 }}>
                    <label style={{ display: 'block', fontFamily: '"DM Sans",sans-serif', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>
                      Tell Us About Your Project <span style={{ color: '#C8912A' }}>*</span>
                    </label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      required
                      rows={5}
                      placeholder="Describe your current situation, goals, and any specific challenges..."
                      style={{ width: '100%', padding: '12px 16px', border: '1px solid #D1D5DB', borderRadius: 8, fontFamily: '"DM Sans",sans-serif', fontSize: 15, color: '#111827', outline: 'none', resize: 'vertical', lineHeight: 1.6 }}
                      onFocus={e => e.target.style.borderColor = '#1B3A6B'}
                      onBlur={e => e.target.style.borderColor = '#D1D5DB'}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    style={{ background: loading ? '#6B7280' : '#1B3A6B', color: '#fff', padding: '14px 36px', borderRadius: 8, fontFamily: '"DM Sans",sans-serif', fontWeight: 600, fontSize: 15, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'background 0.2s' }}
                  >
                    {loading ? 'Sending...' : (<>Send Message <Send size={16} /></>)}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info — 2 cols */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.65, delay: 0.2 } } }}
              className="lg:col-span-2"
            >
              <h3 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 22, color: '#111827', marginBottom: 28 }}>Get in Touch</h3>

              {[
                { Icon: Mail,    label: 'Email Us',       value: 'info@hylamtechnologies.com', href: 'mailto:info@hylamtechnologies.com' },
                { Icon: MapPin,  label: 'Our Office',     value: 'Office No 317, 3rd Floor, RG Complex 1, Sector 14, Rohini, New Delhi – 110085', href: null },
                { Icon: Clock,   label: 'Business Hours', value: 'Mon – Sat: 9:00 AM – 7:00 PM IST\nEmergency support: 24/7', href: null },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} style={{ display: 'flex', gap: 14, marginBottom: 28 }}>
                  <div style={{ width: 44, height: 44, background: '#EEF2F8', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} color="#1B3A6B" />
                  </div>
                  <div>
                    <div style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 600, fontSize: 14, color: '#1B3A6B', marginBottom: 4 }}>{label}</div>
                    {href ? (
                      <a href={href} style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 14, color: '#374151', textDecoration: 'none', lineHeight: 1.6 }}>{value}</a>
                    ) : (
                      <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 14, color: '#374151', margin: 0, lineHeight: 1.7, whiteSpace: 'pre-line' }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Image */}
              <div style={{ borderRadius: 14, overflow: 'hidden', marginTop: 8, boxShadow: '0 8px 32px rgba(27,58,107,0.12)' }}>
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80"
                  alt="Hylam Technologies office"
                  style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }}
                  onError={e => {
                    e.target.src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80'
                  }}
                />
              </div>

              {/* Quick badges */}
              <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['AWS Certified', 'ISO 27001', 'SOC 2 Ready', '24/7 Support'].map(b => (
                  <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#FDF3DC', border: '1px solid rgba(200,145,42,0.3)', borderRadius: 100, padding: '5px 12px' }}>
                    <CheckCircle2 size={12} color="#C8912A" />
                    <span style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 12, fontWeight: 500, color: '#A67020' }}>{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────── */}
      <section style={{ background: '#F5F7FA', padding: '88px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-eyebrow">Common Questions</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(26px,4vw,40px)' }}>Frequently Asked Questions</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            {FAQS.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </motion.div>
          <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 15, color: '#6B7280', textAlign: 'center', marginTop: 32 }}>
            Don't see your question?{' '}
            <a href="mailto:info@hylamtechnologies.com" style={{ color: '#1B3A6B', fontWeight: 600 }}>
              Email us directly →
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
