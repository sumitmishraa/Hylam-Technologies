import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Cloud, GitBranch, BarChart3, Shield, Cpu, Globe, CheckCircle2, ArrowRight } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }

const SERVICES = [
  {
    id: 'cloud',
    Icon: Cloud,
    title: 'Cloud Solutions',
    tagline: 'Scale Without Limits',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    description: 'We design, migrate, and manage cloud infrastructure across AWS, Azure, and Google Cloud Platform. Every architecture we build is secure, scalable, and cost-optimised — built to grow with your business without surprise billing.',
    points: [
      'Cloud readiness assessments & migration planning',
      'Multi-cloud and hybrid cloud architectures',
      'Cost optimisation — average 30% savings',
      'Managed cloud operations & 24/7 monitoring',
      'Disaster recovery and business continuity',
    ],
    tools: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Cloudflare', 'DigitalOcean'],
  },
  {
    id: 'devops',
    Icon: GitBranch,
    title: 'DevOps & CI/CD',
    tagline: 'Deploy With Confidence',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    description: 'We collapse the wall between development and operations. Our engineers build fully automated delivery pipelines that take code from commit to production in minutes — with zero manual steps and comprehensive rollback capability.',
    points: [
      'CI/CD pipeline design and implementation',
      'Docker containerisation & Kubernetes orchestration',
      'Infrastructure-as-Code with Terraform & Ansible',
      'GitOps workflows and environment management',
      'Performance monitoring and alerting setup',
    ],
    tools: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions'],
  },
  {
    id: 'data',
    Icon: BarChart3,
    title: 'Data Analytics',
    tagline: 'Data-Driven Decisions',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description: 'Your data is your most valuable asset. We build the infrastructure to collect, process, and visualise it — turning raw numbers into clear business intelligence that drives decisions at every level of your organisation.',
    points: [
      'Data strategy, architecture and governance',
      'ETL pipeline development and automation',
      'Business intelligence dashboards (Tableau, Power BI)',
      'Predictive analytics and ML models',
      'Data warehouse design (Snowflake, BigQuery, Redshift)',
    ],
    tools: ['Apache Spark', 'PostgreSQL', 'MongoDB', 'Tableau', 'Apache Kafka'],
  },
  {
    id: 'security',
    Icon: Shield,
    title: 'Cybersecurity',
    tagline: 'Protect What Matters Most',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    description: 'A single breach can cost crores and years of reputation. We proactively identify and eliminate vulnerabilities, implement enterprise-grade security controls, and keep your organisation audit-ready at all times.',
    points: [
      'Comprehensive security audits and risk assessments',
      'Penetration testing (web, mobile, network)',
      'SIEM implementation and 24/7 threat monitoring',
      'ISO 27001 and SOC 2 compliance consulting',
      'Incident response and recovery planning',
    ],
    tools: ['CrowdStrike', 'Splunk', 'Nessus', 'Palo Alto', 'Metasploit'],
  },
  {
    id: 'consulting',
    Icon: Cpu,
    title: 'IT Consulting',
    tagline: 'Strategy Meets Technology',
    img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
    description: 'Technology decisions made today define your competitive position for the next decade. Our consultants bring C-suite thinking and engineering-level precision — helping you choose the right path, not just the popular one.',
    points: [
      'Digital transformation strategy and roadmaps',
      'Technology stack selection and architecture reviews',
      'IT due diligence for M&A transactions',
      'CTO-as-a-service for growing startups',
      'Vendor evaluation and procurement guidance',
    ],
    tools: ['TOGAF', 'ITIL', 'Agile', 'PRINCE2', 'AWS Well-Architected'],
  },
  {
    id: 'webdev',
    Icon: Globe,
    title: 'Web & App Development',
    tagline: 'Software That Scales',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    description: 'We build software that\'s fast, reliable, and maintainable — not just functional. From customer-facing portals to internal tools to mobile applications, every line of code we write is designed to scale with your ambitions.',
    points: [
      'Full-stack web application development',
      'Enterprise portals and customer-facing platforms',
      'REST and GraphQL API design and development',
      'Mobile applications (iOS & Android)',
      'Legacy system modernisation and migration',
    ],
    tools: ['React', 'Node.js', 'TypeScript', 'Vue.js', 'GraphQL'],
  },
]

export default function Services() {
  return (
    <>
      {/* Page banner */}
      <div style={{ position: 'relative', background: '#1B3A6B', padding: '80px 24px 70px', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=60"
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.12 }}
        />
        <div style={{ position: 'absolute', bottom: -80, right: -80, width: 320, height: 320, borderRadius: '50%', background: 'rgba(200,145,42,0.08)' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, fontFamily: '"DM Sans",sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#C8912A' }}>Services</span>
          </div>
          <h1 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 800, fontSize: 'clamp(32px,5vw,56px)', color: '#ffffff', marginBottom: 16, lineHeight: 1.1 }}>
            Our Services
          </h1>
          <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 18, color: 'rgba(255,255,255,0.65)', maxWidth: 540, lineHeight: 1.7 }}>
            Six practice areas. One team. Complete coverage of your IT needs — from infrastructure to applications.
          </p>
        </div>
      </div>

      {/* Services overview pills */}
      <div style={{ background: '#F5F7FA', borderBottom: '1px solid #E5E7EB', padding: '20px 24px', overflowX: 'auto' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {SERVICES.map(s => (
            <a key={s.id} href={`#${s.id}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 16px', background: '#ffffff', border: '1px solid #E5E7EB', borderRadius: 100, fontFamily: '"DM Sans",sans-serif', fontSize: 13, fontWeight: 500, color: '#374151', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'border-color 0.2s, color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='#1B3A6B'; e.currentTarget.style.color='#1B3A6B' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='#E5E7EB'; e.currentTarget.style.color='#374151' }}
            >
              <s.Icon size={13} />{s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Detailed service sections */}
      {SERVICES.map((svc, i) => {
        const isEven = i % 2 === 0
        const Icon = svc.Icon
        return (
          <section key={svc.id} id={svc.id} style={{ background: isEven ? '#ffffff' : '#F5F7FA', padding: '88px 24px' }}>
            <div style={{ maxWidth: 1280, margin: '0 auto' }}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? '' : 'direction-reverse'}`}>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7 }}
                  style={{ order: isEven ? 1 : 2 }}
                >
                  <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 16px 56px rgba(27,58,107,0.14)', position: 'relative' }}>
                    <img src={svc.img} alt={svc.title} style={{ width: '100%', height: 400, objectFit: 'cover', display: 'block', transition: 'transform 0.6s' }} onMouseEnter={e=>e.currentTarget.style.transform='scale(1.04)'} onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'} />
                    {/* Service label overlay */}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 24px', background: 'linear-gradient(to top, rgba(10,26,51,0.8), transparent)', display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 36, height: 36, background: '#C8912A', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size={18} color="#fff" />
                      </div>
                      <span style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 16, color: '#ffffff' }}>{svc.title}</span>
                    </div>
                  </div>

                  {/* Tools row */}
                  <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {svc.tools.map(t => (
                      <span key={t} style={{ background: '#EEF2F8', border: '1px solid #D5E0EF', borderRadius: 100, padding: '5px 14px', fontFamily: '"DM Sans",sans-serif', fontSize: 12, fontWeight: 500, color: '#1B3A6B' }}>{t}</span>
                    ))}
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: 0.12 }}
                  style={{ order: isEven ? 2 : 1 }}
                >
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FDF3DC', border: '1px solid rgba(200,145,42,0.3)', borderRadius: 100, padding: '6px 14px', marginBottom: 20 }}>
                    <Icon size={13} color="#C8912A" />
                    <span style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 12, fontWeight: 600, color: '#A67020', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{svc.tagline}</span>
                  </div>
                  <h2 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 800, fontSize: 'clamp(26px,3.5vw,38px)', color: '#1B3A6B', marginBottom: 8, lineHeight: 1.15 }}>{svc.title}</h2>
                  <div style={{ width: 48, height: 4, background: '#C8912A', borderRadius: 2, marginBottom: 24 }} />
                  <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 16, color: '#374151', lineHeight: 1.8, marginBottom: 28 }}>{svc.description}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                    {svc.points.map(p => (
                      <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <CheckCircle2 size={17} color="#C8912A" style={{ flexShrink: 0, marginTop: 3 }} />
                        <span style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 15, color: '#374151', lineHeight: 1.6 }}>{p}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" style={{ background: '#1B3A6B', color: '#fff', padding: '13px 28px', borderRadius: 8, fontFamily: '"DM Sans",sans-serif', fontWeight: 600, fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    Discuss This Service <ArrowRight size={15} />
                  </Link>
                </motion.div>

              </div>
            </div>
          </section>
        )
      })}

      {/* Bottom CTA */}
      <section style={{ background: '#1B3A6B', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 800, fontSize: 'clamp(26px,4vw,40px)', color: '#ffffff', marginBottom: 16 }}>
            Not Sure Which Service You Need?
          </h2>
          <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 17, color: 'rgba(255,255,255,0.65)', marginBottom: 36, lineHeight: 1.7 }}>
            Book a free 30-minute discovery call. We'll assess your situation and recommend the right approach — honestly, with no upselling.
          </p>
          <Link to="/contact" style={{ background: '#C8912A', color: '#fff', padding: '16px 40px', borderRadius: 8, fontFamily: '"DM Sans",sans-serif', fontWeight: 600, fontSize: 16, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Book Free Consultation <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  )
}
