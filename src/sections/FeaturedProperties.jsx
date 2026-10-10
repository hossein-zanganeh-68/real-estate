import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import PropertyCard from '../components/PropertyCard.jsx'
import { featuredProperties } from '../data/properties.js'
import { ArrowLeft, ArrowRight } from '../components/Icons.jsx'

const ease = [0.16, 1, 0.3, 1]

export default function FeaturedProperties() {
  const carouselRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollStart, setScrollStart] = useState(0)

  const scroll = useCallback((dir) => {
    const el = carouselRef.current
    if (!el) return
    const cardWidth = 360
    el.scrollBy({ left: dir * cardWidth, behavior: 'smooth' })
  }, [])

  const onMouseDown = (e) => {
    const el = carouselRef.current
    if (!el) return
    setIsDragging(true)
    setStartX(e.pageX - el.offsetLeft)
    setScrollStart(el.scrollLeft)
    el.classList.add('dragging')
  }

  const onMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const el = carouselRef.current
    if (!el) return
    const x = e.pageX - el.offsetLeft
    el.scrollLeft = scrollStart - (x - startX)
  }

  const onMouseUp = () => {
    setIsDragging(false)
    carouselRef.current?.classList.remove('dragging')
  }

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
          <span className="section-label">Featured</span>
          <h2>Featured Properties</h2>
        </motion.div>
      </div>

      <div className="container">
        <div className="carousel-wrapper">
          <div
            className="carousel"
            ref={carouselRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Featured properties"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            {featuredProperties.map((p, i) => (
              <PropertyCard key={p.id} property={p} variant={i === 0 ? 'wide' : 'narrow'} />
            ))}
          </div>
        </div>

        <div className="carousel-nav">
          <button className="carousel-btn" onClick={() => scroll(-1)} aria-label="Previous properties">
            <ArrowLeft />
          </button>
          <button className="carousel-btn" onClick={() => scroll(1)} aria-label="Next properties">
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}
