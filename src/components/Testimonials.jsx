import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    quote: 'Hylam completely transformed our cloud infrastructure. We moved from chaotic on-prem servers to a fully managed AWS setup in just 8 weeks. Exceptional work.',
    name:  'Rajesh Mehta',
    role:  'CTO',
    company: 'NovaStar Fintech, Mumbai',
    initial: 'N',
    color: '#6366F1',
  },
  {
    quote: 'Their DevOps team cut our deployment time from 3 days to under 2 hours. The CI/CD pipeline they built is bulletproof. Highly recommended for any serious tech company.',
    name:  'Priya Sharma',
    role:  'VP Engineering',
    company: 'LogiTrack India, Bengaluru',
    initial: 'L',
    color: '#22D3EE',
  },
  {
    quote: 'The cybersecurity audit revealed critical vulnerabilities we didn\'t know existed. Hylam\'s team patched everything and got us ISO 27001 compliant within 4 months.',
    name:  'Amit Gupta',
    role:  'CISO',
    company: 'RetailEdge Solutions, Delhi',
    initial: 'R',
    color: '#34D399',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariant = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section style={{ background: '#0A0A0F', padding: '100px 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="font-bold text-white mb-4"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: 'clamp(32px, 5vw, 48px)',
            }}
          >
            What Our Clients Say
          </h2>
          <p
            className="text-white/50 max-w-md mx-auto"
            style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '16px', lineHeight: 1.7 }}
          >
            Don't take our word for it — hear from the teams we've helped transform.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t) => (
            <motion.article
              key={t.name}
              variants={cardVariant}
              className="rounded-2xl p-8 flex flex-col gap-5"
              style={{
                background: '#16161F',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <Stars />

              <p
                className="text-white/70 leading-relaxed flex-1"
                style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '15px', lineHeight: 1.75 }}
              >
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${t.color}33, ${t.color}66)`,
                    border: `1px solid ${t.color}44`,
                    fontFamily: '"Space Grotesk", sans-serif',
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <div
                    className="text-white font-semibold text-sm"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-white/40 text-xs"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
