import { Link } from 'react-router-dom'
import { Key, ArrowRight } from './Icons.jsx'
import ScrollReveal from './ScrollReveal.jsx'

export default function CTASection() {
  return (
    <section className="cta-section">
      <ScrollReveal>
        <div className="cta-inner">
          <div className="cta-icon">
            <Key size={36} />
          </div>
          <div className="cta-text">
            <h2>Ready to Find Your Perfect Property?</h2>
            <p>Let our experts guide you to the right home or investment.</p>
          </div>
          <div className="cta-action">
            <Link to="/contact" className="btn btn-navy">
              Get in Touch <ArrowRight size={18} className="arrow" />
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
