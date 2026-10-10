import { motion } from 'framer-motion'
import { whyChooseHorizon } from '../data/services.js'

const ease = [0.16, 1, 0.3, 1]

export default function WhyChooseHorizon() {
  return (
    <section className="section section-ivory">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="section-label">Why Horizon</span>
          <h2>Why Choose Horizon</h2>
        </motion.div>

        <div className="why-grid">
          {whyChooseHorizon.map((item, i) => (
            <motion.div
              key={item.number}
              className="why-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
            >
              <div className="why-number">{item.number}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
