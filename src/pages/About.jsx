import { stats, team, whyChoose } from '../data/content.js'
import CTASection from '../components/CTASection.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { ArrowRight, Mail, Facebook, Instagram, Linkedin } from '../components/Icons.jsx'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <section className="page-banner">
        <img src="/images/banner-about.jpg" alt="Luxury modern home" />
        <div className="hero-overlay" />
        <div className="page-banner-content">
          <h1>About Us</h1>
          <div className="breadcrumb">
            <a href="/">Home</a><span>/</span><span>About Us</span>
          </div>
        </div>
      </section>

      <section className="about-page-story">
        <ScrollReveal>
          <span className="section-label">Our Story</span>
          <h2>Two Decades of Trusted Real Estate</h2>
          <p>
            Founded in 2001, Horizon Properties began with a simple belief: that buying or selling
            a home should be as extraordinary as the home itself. What started as a small boutique
            firm has grown into one of the most respected names in luxury real estate, with a
            portfolio spanning the country's most desirable markets.
          </p>
          <p>
            We have never measured success by volume alone. Our advisors take on a limited number
            of clients to ensure every relationship receives the attention, expertise, and
            discretion it deserves. The result is a track record of satisfied clients, record-setting
            sales, and a reputation built one exceptional transaction at a time.
          </p>
        </ScrollReveal>
      </section>

      {/* Stats */}
      <section className="section section-cream">
        <div className="why-stats" style={{ maxWidth: 900, margin: '0 auto', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={(i % 4) + 1}>
              <div className="why-stat" style={{ textAlign: 'center' }}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="section">
        <div className="why-choose">
          <ScrollReveal className="why-left">
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What Sets Us Apart</h2>
            <p>
              Our commitment goes beyond transactions. We build relationships, deliver results,
              and redefine what it means to work with a real estate partner.
            </p>
          </ScrollReveal>
          <div className="why-right">
            {whyChoose.map((item, i) => (
              <ScrollReveal key={i} delay={(i % 2) + 1}>
                <div className="why-item">
                  <div className="why-item-num">0{i + 1}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team preview */}
      <section className="section section-cream">
        <div className="featured-header">
          <ScrollReveal>
            <span className="section-label">Our Team</span>
            <h2 className="section-title center">The People Behind Horizon</h2>
          </ScrollReveal>
        </div>
        <div className="team-grid">
          {team.map((member, i) => (
            <ScrollReveal key={member.id} delay={(i % 4) + 1}>
              <div className="team-card">
                <div className="team-img">
                  <img src={member.image} alt={member.name} loading="lazy" />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <div className="team-social">
                    <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}><Mail size={16} /></a>
                    <a href="#" aria-label={`${member.name} on Facebook`}><Facebook size={16} /></a>
                    <a href="#" aria-label={`${member.name} on Instagram`}><Instagram size={16} /></a>
                    <a href="#" aria-label={`${member.name} on LinkedIn`}><Linkedin size={16} /></a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link to="/team" className="btn btn-outline-navy">View Full Team <ArrowRight size={18} className="arrow" /></Link>
        </div>
      </section>

      <CTASection />
    </>
  )
}
