import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Key, ArrowRight } from '../components/Icons.jsx'

const ease = [0.16, 1, 0.3, 1]

export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          className="cta-bar"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="cta-icon"><Key /></div>
          <div className="cta-content">
            <h2>Ready to Find Your Perfect Property?</h2>
            <p>Let our experts guide you to the right home or investment.</p>
          </div>
          <Link to="/contact" className="btn btn-navy">
            Get in Touch <ArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
