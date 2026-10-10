import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons.jsx'

const ease = [0.16, 1, 0.3, 1]

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1600596542815-52ad1878e1d0?auto=format&fit=crop&w=1920&q=80"
          alt="Modern luxury villa with infinity pool at dusk"
        />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <motion.p
          className="hero-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
        >
          Premium Real Estate
        </motion.p>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
        >
          Discover Exceptional
          <br />
          Homes &amp; Investments
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.4 }}
        >
          Premium properties in prime locations. Find your dream home or the perfect investment with confidence.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.6 }}
        >
          <Link to="/properties" className="btn btn-navy">
            Explore Properties <ArrowRight />
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Contact Us
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </motion.div>
    </section>
  )
}
