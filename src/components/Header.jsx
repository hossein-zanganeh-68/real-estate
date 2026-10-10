import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo.jsx'
import { Phone, ArrowRight } from './Icons.jsx'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/properties', label: 'Properties' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isHome = location.pathname === '/'
  const headerClass = scrolled || !isHome ? 'header-scrolled' : 'header-transparent'

  return (
    <>
      <header className={`header ${headerClass}`}>
        <div className="header-inner">
          <Logo scrolled={scrolled || !isHome} />
          <nav className="nav-desktop" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a href="tel:+15552467890" className="header-phone">
            <Phone />
            (555) 246-7890
          </a>
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`mobile-nav-link ${location.pathname === link.to ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:+15552467890" className="btn btn-navy" style={{ marginTop: '24px', justifyContent: 'center' }}>
                <Phone /> (555) 246-7890
              </a>
              <div className="mobile-menu-contact">
                <p>1234 Architectural Boulevard</p>
                <p>Beverly Hills, CA 90210</p>
                <p>info@horizonproperties.com</p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
