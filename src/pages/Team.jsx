import { team } from '../data/content.js'
import CTASection from '../components/CTASection.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { Mail, Phone, Facebook, Instagram, Linkedin } from '../components/Icons.jsx'

export default function Team() {
  return (
    <>
      <section className="page-banner">
        <img src="/images/banner-team.jpg" alt="Modern architecture" />
        <div className="hero-overlay" />
        <div className="page-banner-content">
          <h1>Our Team</h1>
          <div className="breadcrumb">
            <a href="/">Home</a><span>/</span><span>Team</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="featured-header">
          <ScrollReveal>
            <span className="section-label">The Experts</span>
            <h2 className="section-title center">Meet the Horizon Team</h2>
            <p className="section-subtitle center">
              Our advisors bring decades of combined experience, deep market knowledge, and an
              unwavering commitment to client success.
            </p>
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
                    <a href={`tel:${member.phone}`} aria-label={`Call ${member.name}`}><Phone size={16} /></a>
                    <a href="#" aria-label={`${member.name} on Facebook`}><Facebook size={16} /></a>
                    <a href="#" aria-label={`${member.name} on Instagram`}><Instagram size={16} /></a>
                    <a href="#" aria-label={`${member.name} on LinkedIn`}><Linkedin size={16} /></a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
