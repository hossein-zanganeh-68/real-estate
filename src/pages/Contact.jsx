import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight } from '../components/Icons.jsx'

const ease = [0.16, 1, 0.3, 1]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Contact</span>
          <h1>Get In Touch</h1>
          <p>Have a question or ready to start your property journey? Our team is here to help.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <h2>Let's Talk</h2>
              <p>Whether you're buying, selling, or investing, we'd love to hear from you. Reach out through any of the channels below or fill out the form.</p>

              <div className="contact-detail">
                <div className="contact-detail-icon"><Phone /></div>
                <div>
                  <h4>Phone</h4>
                  <p>(555) 246-7890</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><Mail /></div>
                <div>
                  <h4>Email</h4>
                  <p>info@horizonproperties.com</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><MapPin /></div>
                <div>
                  <h4>Office</h4>
                  <p>1234 Architectural Boulevard<br />Beverly Hills, CA 90210</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-form"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
            >
              {sent && (
                <div className="form-success">
                  Thank you for reaching out! We'll get back to you within 24 hours.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" type="text" required value={form.name} onChange={update('name')} placeholder="John Smith" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" required value={form.email} onChange={update('email')} placeholder="john@example.com" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" type="tel" value={form.phone} onChange={update('phone')} placeholder="(555) 000-0000" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" value={form.subject} onChange={update('subject')}>
                      <option value="">Select a topic</option>
                      <option>Buying a Property</option>
                      <option>Selling a Property</option>
                      <option>Investment Inquiry</option>
                      <option>Schedule a Viewing</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" required value={form.message} onChange={update('message')} placeholder="Tell us how we can help..." />
                </div>
                <button type="submit" className="btn btn-navy" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message <ArrowRight />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
