import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { team } from '../data/team.js'
import { Facebook, Twitter, Linkedin, Mail } from '../components/Icons.jsx'

const ease = [0.16, 1, 0.3, 1]

export default function TeamSection() {
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
          <span className="section-label">Our People</span>
          <h2>Meet the Team</h2>
        </motion.div>

        <div className="team-grid">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              className="team-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
            >
              <div className="team-card-image">
                <img src={member.image} alt={member.name} loading="lazy" />
                <div className="team-card-overlay">
                  <a href="#" aria-label={`${member.name} on Facebook`}><Facebook /></a>
                  <a href="#" aria-label={`${member.name} on Twitter`}><Twitter /></a>
                  <a href="#" aria-label={`${member.name} on LinkedIn`}><Linkedin /></a>
                  <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}><Mail /></a>
                </div>
              </div>
              <div className="team-card-info">
                <div className="team-card-name">{member.name}</div>
                <div className="team-card-role">{member.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
