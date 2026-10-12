import { Link } from 'react-router-dom'
import { properties } from '../data/properties.js'
import { services, team, stats, whyChoose } from '../data/content.js'
import PropertyCarousel from '../components/PropertyCarousel.jsx'
import CTASection from '../components/CTASection.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { ArrowRight, ChevronDown, IconHome, IconChart, IconMegaphone, IconCompass, IconScale, IconPin, Mail, Facebook, Instagram, Twitter, Linkedin } from '../components/Icons.jsx'

const serviceIcons = { home: IconHome, chart: IconChart, megaphone: IconMegaphone, compass: IconCompass, scale: IconScale, pin: IconPin }

export default function Home() {
  const featured = properties.filter((p) => p.featured)

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <img
          className="hero-image"
          src="/images/hero.jpg"
          alt="Modern luxury villa with pool at dusk"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Discover Exceptional<br />Homes & Investments</h1>
          <p>Premium properties in prime locations. Find your dream home or the perfect investment with confidence.</p>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <ChevronDown size={18} />
        </div>
      </section>

      {/* ===== ABOUT / WHO WE ARE ===== */}
      <section className="about-section">
        <ScrollReveal className="about-text">
          <span className="section-label">About Us</span>
          <h2 className="section-title">Who We Are</h2>
          <p>
            At Horizon Properties, we connect people with extraordinary homes and smart investments.
            Integrity, transparency, and client satisfaction are at the heart of everything we do.
          </p>
          <p>
            For over two decades, our team of dedicated advisors has guided buyers, sellers, and
            investors through the luxury real estate market with discretion and expertise — building
            lasting relationships founded on trust and exceptional results.
          </p>
          <Link to="/about" className="btn btn-navy">Learn More <ArrowRight size={18} className="arrow" /></Link>
        </ScrollReveal>

        <ScrollReveal delay={1} className="about-images">
          <div className="about-img-main">
            <img src="/images/about-main.jpg" alt="Luxury modern villa with pool" loading="lazy" />
          </div>
          <div className="about-img-secondary">
            <img src="/images/about-secondary.jpg" alt="Modern home with pool" loading="lazy" />
          </div>
          <Link to="/properties" className="about-arrow-btn" aria-label="Browse properties">
            <ArrowRight size={24} />
          </Link>
        </ScrollReveal>
      </section>

      {/* ===== FEATURED PROPERTIES ===== */}
      <section className="section section-gray">
        <div className="featured-header">
          <ScrollReveal>
            <span className="section-label">Featured</span>
            <h2 className="section-title center">Featured Properties</h2>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={1}>
          <PropertyCarousel properties={featured} />
        </ScrollReveal>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section">
        <div className="featured-header">
          <ScrollReveal>
            <span className="section-label">Services</span>
            <h2 className="section-title center">What We Offer</h2>
          </ScrollReveal>
        </div>
        <div className="services-grid">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon]
            return (
              <ScrollReveal key={s.id} delay={(i % 3) + 1}>
                <div className="service-card">
                  <div className="service-icon">{Icon && <Icon size={48} />}</div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <Link to="/services" className="service-link">Learn More <ArrowRight size={16} /></Link>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      {/* ===== WHY CHOOSE HORIZON ===== */}
      <section className="section section-cream">
        <div className="why-choose">
          <ScrollReveal className="why-left">
            <span className="section-label">Why Horizon</span>
            <h2 className="section-title">A Higher Standard of Real Estate</h2>
            <p>
              We combine deep market intelligence with a genuinely personal approach — so every
              decision is informed, every transaction is seamless, and every client feels like our
              only client.
            </p>
            <div className="why-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="why-stat">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
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

      {/* ===== TEAM ===== */}
      <section className="section">
        <div className="featured-header">
          <ScrollReveal>
            <span className="section-label">Our Team</span>
            <h2 className="section-title center">Meet the Experts</h2>
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
                    <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}><Mail /></a>
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

      {/* ===== CTA ===== */}
      <CTASection />
    </>
  )
}
