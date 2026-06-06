import { motion } from 'framer-motion'
import { Cloud, GitBranch, BarChart3, Shield, Cpu, Globe } from 'lucide-react'

const SERVICES = [
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    desc: 'Design, migrate, and manage AWS, Azure & GCP infrastructure. Scalable, secure, cost-optimised cloud architectures for enterprise workloads.',
  },
  {
    icon: GitBranch,
    title: 'DevOps & CI/CD',
    desc: 'Automate delivery pipelines, container orchestration with Kubernetes & Docker, and infrastructure-as-code with Terraform and Ansible.',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    desc: 'Transform raw data into business intelligence. Custom dashboards, ETL pipelines, predictive analytics, and data warehouse solutions.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    desc: 'End-to-end security audits, penetration testing, SIEM implementation, compliance consulting (ISO 27001, SOC 2), and 24/7 threat monitoring.',
  },
  {
    icon: Cpu,
    title: 'IT Consulting',
    desc: 'Strategic technology advisory — digital transformation roadmaps, technology stack selection, architecture reviews, and CTO-as-a-service.',
  },
  {
    icon: Globe,
    title: 'Web & App Development',
    desc: 'Full-stack web applications, enterprise portals, API development, mobile apps, and custom software tailored to your business processes.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariant = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <section id="services" style={{ background: '#0A0A0F', padding: '100px 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="gradient-text font-semibold tracking-widest text-xs uppercase mb-4"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            WHAT WE DO
          </p>
          <h2
            className="font-bold text-white mb-4"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: 'clamp(32px, 5vw, 48px)',
              lineHeight: 1.1,
            }}
          >
            End-to-End IT Services
          </h2>
          <p
            className="text-white/50 max-w-xl mx-auto"
            style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '16px', lineHeight: 1.7 }}
          >
            From strategy to execution — we cover every layer of your technology stack.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((svc) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={svc.title}
                variants={cardVariant}
                whileHover={{ y: -6, borderColor: 'rgba(99,102,241,0.5)' }}
                className="rounded-2xl p-8 flex flex-col gap-5 cursor-default"
                style={{
                  background: '#16161F',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  willChange: 'transform',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(99,102,241,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(34,211,238,0.2) 100%)',
                  }}
                >
                  <Icon size={22} style={{ color: '#6366F1' }} />
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="font-semibold text-white mb-2"
                    style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '20px' }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="text-white/50 leading-relaxed"
                    style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '14px', lineHeight: 1.7 }}
                  >
                    {svc.desc}
                  </p>
                </div>

                {/* Link */}
                <div className="mt-auto">
                  <span
                    className="gradient-text text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                  >
                    Learn more →
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
