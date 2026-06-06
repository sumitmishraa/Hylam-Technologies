import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STEPS = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We audit your current tech landscape, identify gaps, and define objectives aligned with your business goals.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Architecture blueprints, technology selection, and a detailed project roadmap tailored to your team.',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Agile sprints, weekly demos, full QA, and transparent progress tracking — you\'re never left in the dark.',
  },
  {
    num: '04',
    title: 'Scale',
    desc: 'Deployment, monitoring, optimisation, and ongoing managed services to keep your systems running at peak.',
  },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function ConnectorLine() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div
      ref={ref}
      className="hidden lg:block flex-1 mx-2"
      style={{ height: '2px', position: 'relative', top: '-32px' }}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: '100%' } : { width: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, #6366F1, #22D3EE)',
        }}
      />
    </div>
  )
}

export default function Process() {
  return (
    <section id="process" style={{ background: '#0A0A0F', padding: '100px 0' }}>
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
            How We Work
          </h2>
          <p
            className="text-white/50 max-w-md mx-auto"
            style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '16px', lineHeight: 1.7 }}
          >
            A proven 4-step engagement model that delivers results.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-0">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex lg:flex-col items-start lg:items-start flex-1 gap-4 lg:gap-0">

              {/* Mobile: icon + line */}
              <div className="flex flex-col items-center lg:hidden">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg"
                  style={{
                    background: 'linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)',
                    fontFamily: '"Space Grotesk", sans-serif',
                  }}
                >
                  {step.num}
                </div>
                {i < STEPS.length - 1 && (
                  <div style={{ width: '2px', height: '60px', background: 'linear-gradient(180deg, #6366F1, #22D3EE)', marginTop: '8px' }} />
                )}
              </div>

              {/* Desktop layout */}
              <div className="w-full">
                {/* Number circle (desktop only) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="hidden lg:flex w-12 h-12 rounded-full items-center justify-center font-bold text-white text-lg mb-6"
                  style={{
                    background: 'linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)',
                    fontFamily: '"Space Grotesk", sans-serif',
                  }}
                >
                  {step.num}
                </motion.div>

                <motion.div
                  initial={fadeUp.hidden}
                  whileInView={fadeUp.visible}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: i * 0.15 }}
                >
                  <h3
                    className="font-semibold text-white mb-2"
                    style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '20px' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-white/50 leading-relaxed pr-6"
                    style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '14px', lineHeight: 1.7 }}
                  >
                    {step.desc}
                  </p>
                </motion.div>
              </div>

              {/* Connector line between steps (desktop) */}
              {i < STEPS.length - 1 && <ConnectorLine />}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
