import { motion } from 'framer-motion'
import { services } from '../data/services.js'
import { serviceIcons } from '../components/Icons.jsx'

const ease = [0.16, 1, 0.3, 1]

export default function ServicesSection() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="section-label">What We Do</span>
          <h2>Our Services</h2>
        </motion.div>

        <div className="services-grid">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon] || serviceIcons.home
            return (
              <motion.div
                key={service.id}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.05 }}
              >
                <span className="service-number">0{i + 1}</span>
                <div className="service-icon"><Icon /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
