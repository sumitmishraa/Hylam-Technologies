import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TABS = [
  {
    label: 'Cloud',
    techs: ['AWS', 'Microsoft Azure', 'Google Cloud', 'DigitalOcean', 'Cloudflare'],
  },
  {
    label: 'DevOps',
    techs: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions'],
  },
  {
    label: 'Data',
    techs: ['Apache Spark', 'PostgreSQL', 'MongoDB', 'Tableau', 'Apache Kafka'],
  },
  {
    label: 'Security',
    techs: ['CrowdStrike', 'Splunk', 'Nessus', 'Metasploit', 'Palo Alto'],
  },
  {
    label: 'Frontend',
    techs: ['React', 'Vue.js', 'Node.js', 'TypeScript', 'GraphQL'],
  },
]

export default function Technologies() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="technologies" style={{ background: '#0A0A0F', padding: '100px 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p
            className="gradient-text font-semibold tracking-widest text-xs uppercase mb-4"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            TECH STACK
          </p>
          <h2
            className="font-bold text-white mb-4"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: 'clamp(32px, 5vw, 48px)',
            }}
          >
            Technologies We Master
          </h2>
          <p
            className="text-white/50 max-w-md mx-auto"
            style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '16px', lineHeight: 1.7 }}
          >
            Best-in-class tools across every layer of the modern tech stack.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {TABS.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                minHeight: '44px',
                background: activeTab === i
                  ? 'linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)'
                  : 'rgba(255,255,255,0.05)',
                color: activeTab === i ? '#fff' : 'rgba(255,255,255,0.6)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tech pills grid */}
        <div style={{ minHeight: '120px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="flex flex-wrap justify-center gap-4"
            >
              {TABS[activeTab].techs.map((tech) => (
                <div
                  key={tech}
                  className="px-6 py-3 rounded-xl text-sm text-white/80 transition-all hover:border-indigo-500/40"
                  style={{
                    background: '#16161F',
                    border: '1px solid rgba(255,255,255,0.10)',
                    fontFamily: '"DM Sans", sans-serif',
                    cursor: 'default',
                  }}
                >
                  {tech}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
