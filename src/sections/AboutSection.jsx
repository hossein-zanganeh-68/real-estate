import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons.jsx'

const ease = [0.16, 1, 0.3, 1]

export default function AboutSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="section-label">About Us</span>
            <h2>Who We Are</h2>
            <p>
              At Horizon Properties, we connect people with extraordinary homes and smart investments.
              Integrity, transparency, and client satisfaction are at the heart of everything we do.
            </p>
            <Link to="/about" className="btn btn-navy">
              Learn More <ArrowRight />
            </Link>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">25+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1,200+</div>
                <div className="stat-label">Properties Sold</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">$2B+</div>
                <div className="stat-label">In Sales</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-images"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="about-img-main">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a8a014?auto=format&fit=crop&w=900&q=80"
                alt="Modern luxury home with outdoor lounge area"
                loading="lazy"
              />
              <Link to="/properties" className="about-arrow-btn" aria-label="View properties">
                <ArrowRight />
              </Link>
            </div>
            <div className="about-img-secondary">
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18f6ed8ca?auto=format&fit=crop&w=600&q=80"
                alt="Architectural interior detail"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
