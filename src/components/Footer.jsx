import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, ArrowRight } from './Icons.jsx'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/properties', label: 'Properties' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>Connecting people with extraordinary homes and smart investments. Integrity, transparency, and client satisfaction at the heart of everything we do.</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><Facebook /></a>
              <a href="#" aria-label="Twitter"><Twitter /></a>
              <a href="#" aria-label="Instagram"><Instagram /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.to}><Link to={link.to}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Luxury Home Sales</Link></li>
              <li><Link to="/services">Property Investment</Link></li>
              <li><Link to="/services">Property Marketing</Link></li>
              <li><Link to="/services">Real Estate Advisory</Link></li>
              <li><Link to="/services">Property Valuation</Link></li>
              <li><Link to="/services">Relocation Services</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li><Phone /> (555) 246-7890</li>
              <li><Mail /> info@horizonproperties.com</li>
              <li><MapPin /> 1234 Architectural Boulevard, Beverly Hills, CA 90210</li>
            </ul>
            <div className="footer-newsletter">
              <h4 style={{ marginTop: '24px' }}>Newsletter</h4>
              <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your email address" aria-label="Email for newsletter" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Horizon Properties. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
