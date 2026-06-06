import { motion } from 'framer-motion'

const WORDS_LINE1 = ['Transform', 'Your']
const WORDS_LINE2 = ['Business', 'With']

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const wordVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function DashboardCard() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      style={{ willChange: 'transform', position: 'relative' }}
    >
      {/* Main card */}
      <div
        className="rounded-2xl p-6 relative"
        style={{
          background: '#16161F',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 80px rgba(99,102,241,0.1)',
          width: '340px',
          maxWidth: '100%',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-white/80 text-sm font-medium" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            Infrastructure Monitor
          </span>
          <span className="flex items-center gap-1.5 text-xs text-green-400">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Live
          </span>
        </div>

        {/* Progress bars */}
        {[
          { label: 'Cloud Infra',     value: 98, color: '#22D3EE' },
          { label: 'DevOps Pipeline', value: 95, color: '#6366F1' },
          { label: 'Security Score',  value: 99, color: '#34D399' },
        ].map((item) => (
          <div key={item.label} className="mb-4">
            <div className="flex justify-between mb-1.5">
              <span className="text-xs text-white/50" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                {item.label}
              </span>
              <span className="text-xs font-semibold" style={{ color: item.color, fontFamily: '"Space Grotesk", sans-serif' }}>
                {item.value}%
              </span>
            </div>
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
                className="h-full rounded-full"
                style={{ background: item.color }}
              />
            </div>
          </div>
        ))}

        {/* Bottom stats */}
        <div className="mt-5 pt-4 border-t border-white/5 grid grid-cols-3 gap-2">
          {[
            { label: 'Uptime',    val: '99.9%' },
            { label: 'Incidents', val: '0'     },
            { label: 'SLA',       val: '100%'  },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-white font-bold text-lg" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                {s.val}
              </div>
              <div className="text-white/40 text-[10px]" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badge — top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        style={{
          position: 'absolute',
          top: '-14px',
          right: '-16px',
          background: 'linear-gradient(135deg, #6366F1, #22D3EE)',
          borderRadius: '12px',
          padding: '8px 14px',
          boxShadow: '0 8px 24px rgba(99,102,241,0.4)',
        }}
      >
        <div className="text-white text-xs font-bold" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
          99.9% Uptime
        </div>
      </motion.div>

      {/* Floating badge — bottom left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        style={{
          position: 'absolute',
          bottom: '-14px',
          left: '-16px',
          background: '#16161F',
          border: '1px solid rgba(52,211,153,0.4)',
          borderRadius: '12px',
          padding: '8px 14px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
        }}
      >
        <div className="text-green-400 text-xs font-bold" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
          0 Incidents
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden noise-overlay grid-bg"
      style={{ background: '#0A0A0F', paddingTop: '80px' }}
    >
      {/* Radial blobs */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          left: '-100px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.20) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'pulse-glow 4s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          right: '-100px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'pulse-glow 4s ease-in-out infinite 2s',
          pointerEvents: 'none',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left column */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                border: '1px solid rgba(99,102,241,0.3)',
                background: 'rgba(99,102,241,0.08)',
              }}
            >
              <span>🚀</span>
              <span
                className="text-sm gradient-text font-medium"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                India's Trusted IT Partner
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{ fontFamily: '"Space Grotesk", sans-serif', lineHeight: 1.1, marginBottom: '1.5rem' }}
              className="font-bold"
            >
              {/* Line 1 */}
              <span className="block" style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: '#F8FAFC' }}>
                {WORDS_LINE1.map((w) => (
                  <motion.span key={w} variants={wordVariant} style={{ display: 'inline-block', marginRight: '0.3em' }}>
                    {w}
                  </motion.span>
                ))}
              </span>
              {/* Line 2 */}
              <span className="block" style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: '#F8FAFC' }}>
                {WORDS_LINE2.map((w) => (
                  <motion.span key={w} variants={wordVariant} style={{ display: 'inline-block', marginRight: '0.3em' }}>
                    {w}
                  </motion.span>
                ))}
              </span>
              {/* Line 3 — gradient */}
              <motion.span
                variants={wordVariant}
                className="block gradient-text"
                style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
              >
                Intelligent Tech
              </motion.span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              style={{
                fontSize: '18px',
                color: '#94A3B8',
                maxWidth: '500px',
                lineHeight: 1.7,
                marginBottom: '2rem',
                fontFamily: '"DM Sans", sans-serif',
              }}
            >
              Hylam Technologies delivers end-to-end IT solutions — from cloud infrastructure and DevOps to data analytics,
              cybersecurity, and digital transformation consulting. Based in Delhi. Trusted across India.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.75 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center px-7 py-3 rounded-full font-medium text-white transition-transform hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)',
                  fontFamily: '"DM Sans", sans-serif',
                  minHeight: '44px',
                  boxShadow: '0 8px 32px rgba(99,102,241,0.35)',
                }}
              >
                Start a Project
              </a>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center px-7 py-3 rounded-full font-medium text-white transition-all hover:bg-white/5"
                style={{
                  border: '1px solid rgba(255,255,255,0.2)',
                  fontFamily: '"DM Sans", sans-serif',
                  minHeight: '44px',
                }}
              >
                Explore Services
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.9 }}
              className="flex flex-wrap items-center gap-0"
            >
              {[
                { value: '10+',  label: 'Years Experience' },
                { value: '200+', label: 'Projects Delivered' },
                { value: '50+',  label: 'Enterprise Clients' },
              ].map((stat, i) => (
                <div key={stat.value} className="flex items-center">
                  <div className="px-6 first:pl-0 last:pr-0 text-center">
                    <div
                      className="font-bold text-2xl gradient-text"
                      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/50 mt-0.5" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                      {stat.label}
                    </div>
                  </div>
                  {i < 2 && (
                    <div style={{ width: '1px', height: '36px', background: 'rgba(255,255,255,0.12)' }} />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column — dashboard card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
            style={{ position: 'relative' }}
          >
            {/* Glow behind card */}
            <div
              style={{
                position: 'absolute',
                inset: '-40px',
                background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, rgba(34,211,238,0.08) 50%, transparent 70%)',
                filter: 'blur(40px)',
                pointerEvents: 'none',
              }}
            />
            <DashboardCard />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
