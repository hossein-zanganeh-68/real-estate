import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { Phone, Mail, MapPin, ArrowRight } from '../components/Icons.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <>
      <section className="page-banner">
        <img src="/images/banner-contact.jpg" alt="Modern building exterior" />
        <div className="hero-overlay" />
        <div className="page-banner-content">
          <h1>Contact</h1>
          <div className="breadcrumb">
            <a href="/">Home</a><span>/</span><span>Contact</span>
          </div>
        </div>
      </section>

      <section className="contact-layout">
        <ScrollReveal className="contact-info">
          <span className="section-label">Get in Touch</span>
          <h2>Let's Start a Conversation</h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', marginBottom: '2rem' }}>
            Whether you're searching for your dream home, looking to sell, or seeking expert
            investment advice, our team is ready to help. Reach out and we'll respond within 24 hours.
          </p>

          <div className="contact-info-item">
            <div className="ci-icon"><Phone size={20} /></div>
            <div>
              <h4>Phone</h4>
              <p>(555) 246-7890</p>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="ci-icon"><Mail size={20} /></div>
            <div>
              <h4>Email</h4>
              <p>info@horizonproperties.com</p>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="ci-icon"><MapPin size={20} /></div>
            <div>
              <h4>Office</h4>
              <p>1200 Architectural Blvd, Suite 500<br />Beverly Hills, CA 90210</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1} className="contact-form">
          <h3>Send Us a Message</h3>
          <p>Fill out the form below and we'll get back to you shortly.</p>
          {submitted ? (
            <div style={{ padding: '2rem 1rem', textAlign: 'center' }}>
              <h3 style={{ color: 'var(--gold-dark)', marginBottom: '0.5rem' }}>Thank you!</h3>
              <p style={{ color: 'var(--text-light)' }}>Your message has been received. We'll respond within 24 hours.</p>
              <button className="btn btn-outline-navy" style={{ marginTop: '1.5rem' }} onClick={() => setSubmitted(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="Your email" />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Your phone number" />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required value={form.message} onChange={handleChange} placeholder="Tell us how we can help..." />
              </div>
              <button type="submit" className="btn btn-navy">Send Message <ArrowRight size={18} className="arrow" /></button>
            </form>
          )}
        </ScrollReveal>
      </section>
    </>
  )
}
