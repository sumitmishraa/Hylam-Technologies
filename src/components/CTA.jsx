import { motion } from 'framer-motion'

export default function CTA() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="contact"
      style={{ background: '#0A0A0F', padding: '120px 0', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.12) 0%, rgba(34,211,238,0.06) 40%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2
            className="font-bold text-white mb-6"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              lineHeight: 1.1,
            }}
          >
            Ready to Build Something{' '}
            <span className="gradient-text">Extraordinary?</span>
          </h2>

          <p
            className="text-white/50 mb-10 text-lg"
            style={{ fontFamily: '"DM Sans", sans-serif', lineHeight: 1.7 }}
          >
            Talk to our experts today. Free consultation. No commitment.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href="mailto:info@hylamtechnologies.com"
              className="inline-flex items-center px-8 py-3.5 rounded-full font-medium text-white transition-transform hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)',
                fontFamily: '"DM Sans", sans-serif',
                minHeight: '44px',
                boxShadow: '0 8px 40px rgba(99,102,241,0.4)',
              }}
            >
              Book Free Consultation
            </a>
            <a
              href="tel:+911140001234"
              className="inline-flex items-center px-8 py-3.5 rounded-full font-medium text-white transition-all hover:bg-white/5"
              style={{
                border: '1px solid rgba(255,255,255,0.2)',
                fontFamily: '"DM Sans", sans-serif',
                minHeight: '44px',
              }}
            >
              Call Us Now
            </a>
          </div>

          {/* Contact info */}
          <div
            className="flex items-center justify-center gap-2 text-white/50 text-sm"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            <span>📧</span>
            <a
              href="mailto:info@hylamtechnologies.com"
              className="hover:text-white/80 transition-colors"
            >
              info@hylamtechnologies.com
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
