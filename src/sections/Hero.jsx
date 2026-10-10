import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons.jsx'
import House3DModel from '../components/House3DModel.jsx'

const ease = [0.16, 1, 0.3, 1]

export default function Hero() {
  return (
    <section className="hero hero-3d">
      <div className="hero-3d-bg" />
      <div className="hero-3d-grid" />
      <div className="hero-3d-glow" />
      <div className="hero-content hero-3d-content">
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
          Homes & Investments
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
      <div className="hero-3d-canvas-wrap">
        <House3DModel />
        <div className="hero-3d-hint">
          <span>Drag to explore</span>
        </div>
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
