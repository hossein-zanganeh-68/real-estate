import { services } from '../data/content.js'
import CTASection from '../components/CTASection.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { ArrowRight, IconHome, IconChart, IconMegaphone, IconCompass, IconScale, IconPin } from '../components/Icons.jsx'
import { Link } from 'react-router-dom'

const serviceIcons = { home: IconHome, chart: IconChart, megaphone: IconMegaphone, compass: IconCompass, scale: IconScale, pin: IconPin }

export default function Services() {
  return (
    <>
      <section className="page-banner">
        <img src="/images/banner-services.jpg" alt="Luxury estate" />
        <div className="hero-overlay" />
        <div className="page-banner-content">
          <h1>Services</h1>
          <div className="breadcrumb">
            <a href="/">Home</a><span>/</span><span>Services</span>
          </div>
        </div>
      </section>

      <section className="services-page-intro">
        <ScrollReveal>
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Comprehensive Real Estate Services</h2>
          <p>
            From acquiring your dream home to building a strategic investment portfolio, Horizon
            Properties offers a full spectrum of services designed to meet the needs of luxury
            buyers, sellers, and investors.
          </p>
        </ScrollReveal>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="services-grid">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon]
            return (
              <ScrollReveal key={s.id} delay={(i % 3) + 1}>
                <div className="service-card">
                  <div className="service-icon">{Icon && <Icon size={48} />}</div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <Link to="/contact" className="service-link">Get Started <ArrowRight size={16} /></Link>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      <CTASection />
    </>
  )
}
