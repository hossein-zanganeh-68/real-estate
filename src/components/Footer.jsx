import { Link } from 'react-router-dom'
import { useState } from 'react'
import { navLinks } from '../data/content.js'
import { Logo, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowRight } from './Icons.jsx'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) { setSubscribed(true); setEmail('') }
  }

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <Logo size={28} />
            <span className="logo-text">Horizon Properties</span>
          </Link>
          <p>
            Connecting discerning buyers with extraordinary homes and smart investments.
            Integrity, transparency, and client satisfaction at the heart of everything we do.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}>{link.label}</Link>
          ))}
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <Link to="/services">Luxury Home Sales</Link>
          <Link to="/services">Property Investment</Link>
          <Link to="/services">Property Marketing</Link>
          <Link to="/services">Real Estate Advisory</Link>
          <Link to="/services">Property Valuation</Link>
          <Link to="/services">Relocation Services</Link>
        </div>

        <div className="footer-col footer-contact">
          <h4>Get in Touch</h4>
          <p><Phone size={16} /> (555) 246-7890</p>
          <p><Mail size={16} /> info@horizonproperties.com</p>
          <p><MapPin size={16} /> 1200 Architectural Blvd, Suite 500<br />Beverly Hills, CA 90210</p>
          <form className="newsletter" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder={subscribed ? 'Subscribed!' : 'Your email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email for newsletter"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Horizon Properties. All rights reserved.
      </div>
    </footer>
  )
}
