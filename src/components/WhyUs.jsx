import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Zap, HeadphonesIcon, MapPin } from 'lucide-react'

const STATS = [
  { value: 10,    suffix: '+',  label: 'Years in Business' },
  { value: 200,   suffix: '+',  label: 'Projects Delivered' },
  { value: 50,    suffix: '+',  label: 'Enterprise Clients' },
  { value: 99.9,  suffix: '%',  label: 'Avg Uptime SLA' },
]

const FEATURES = [
  {
    icon: Award,
    title: 'Certified Experts',
    desc: 'AWS, Azure, GCP & security-certified engineers with deep hands-on experience across Fortune 500 projects.',
  },
  {
    icon: Zap,
    title: 'Agile Delivery',
    desc: 'Sprint-based delivery with full visibility & reporting — your team is always in the loop.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    desc: 'Round-the-clock monitoring, incident response & helpdesk — because your business never stops.',
  },
  {
    icon: MapPin,
    title: 'Delhi-Based, India-Wide',
    desc: 'Local team, national reach across all major metros. On-site when you need us, remote-first always.',
  },
]

function AnimatedCounter({ value, suffix }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const end = value
    const duration = 1500
    const step = duration / 60
    const increment = end / (duration / step)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setDisplay(end)
        clearInterval(timer)
      } else {
        setDisplay(parseFloat(start.toFixed(1)))
      }
    }, step)

    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref}>
      {Number.isInteger(value) ? Math.floor(display) : display.toFixed(1)}
      {suffix}
    </span>
  )
}

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function WhyUs() {
  return (
    <section id="about" style={{ background: '#0A0A0F', padding: '100px 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left — statement */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="lg:col-span-5"
          >
            <p
              className="gradient-text font-semibold tracking-widest text-xs uppercase mb-4"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              WHY HYLAM
            </p>

            <h2
              className="font-bold text-white mb-6"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: 'clamp(32px, 4.5vw, 56px)',
                lineHeight: 1.1,
              }}
            >
              We don't just<br />
              build tech.<br />
              We build your{' '}
              <span className="gradient-text">competitive edge.</span>
            </h2>

            <p
              className="text-white/50 mb-10 leading-relaxed"
              style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '16px', lineHeight: 1.7 }}
            >
              With deep expertise across the full tech stack and a client-first approach, Hylam Technologies
              has been helping businesses across India modernise, scale, and secure their digital operations
              since 2013.
            </p>

            {/* Stat counters */}
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div
                    className="gradient-text font-bold mb-1"
                    style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '32px' }}
                  >
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div
                    className="text-white/40 text-sm"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — features */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {FEATURES.map((feat) => {
              const Icon = feat.icon
              return (
                <motion.div
                  key={feat.title}
                  variants={fadeUp}
                  className="flex gap-5 p-6 rounded-2xl"
                  style={{
                    background: '#16161F',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderLeft: '2px solid transparent',
                    backgroundImage: 'linear-gradient(#16161F, #16161F), linear-gradient(135deg, #6366F1, #22D3EE)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                  }}
                >
                  <div
                    className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl mt-0.5"
                    style={{
                      background: 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(34,211,238,0.2) 100%)',
                    }}
                  >
                    <Icon size={20} style={{ color: '#6366F1' }} />
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-white mb-1.5"
                      style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '17px' }}
                    >
                      {feat.title}
                    </h4>
                    <p
                      className="text-white/50 leading-relaxed"
                      style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '14px', lineHeight: 1.7 }}
                    >
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
