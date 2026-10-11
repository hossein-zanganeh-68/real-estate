import { useRef, useState, useCallback, useEffect } from 'react'
import PropertyCard from './PropertyCard.jsx'
import { ChevronLeft, ChevronRight } from './Icons.jsx'

export default function PropertyCarousel({ properties }) {
  const trackRef = useRef(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const dragData = useRef({ startX: 0, scrollLeft: 0, moved: false })

  const updateArrows = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 10)
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }, [])

  useEffect(() => {
    updateArrows()
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [updateArrows])

  const scrollBy = (dir) => {
    const el = trackRef.current
    if (!el) return
    const amount = el.clientWidth * 0.8
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  // Mouse drag support
  const onMouseDown = (e) => {
    const el = trackRef.current
    if (!el) return
    setIsDragging(true)
    dragData.current = { startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft, moved: false }
  }
  const onMouseMove = (e) => {
    if (!isDragging) return
    const el = trackRef.current
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = x - dragData.current.startX
    if (Math.abs(walk) > 5) dragData.current.moved = true
    el.scrollLeft = dragData.current.scrollLeft - walk
  }
  const endDrag = () => {
    setIsDragging(false)
    // restore snap after a short delay so the drag doesn't fight CSS
    setTimeout(() => {
      if (trackRef.current) trackRef.current.style.scrollSnapType = 'x mandatory'
    }, 200)
  }

  return (
    <div className="carousel-section">
      <div className="carousel-wrapper">
        <div className="carousel-fade-left" />
        <div
          ref={trackRef}
          className={`carousel-track ${isDragging ? 'dragging' : ''}`}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onMouseDownCapture={(e) => { if (trackRef.current) trackRef.current.style.scrollSnapType = 'none' }}
        >
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
        <div className="carousel-fade-right" />
      </div>
      <div className="carousel-nav">
        <button className="carousel-btn" onClick={() => scrollBy(-1)} disabled={!canLeft} aria-label="Previous properties">
          <ChevronLeft size={22} />
        </button>
        <button className="carousel-btn" onClick={() => scrollBy(1)} disabled={!canRight} aria-label="Next properties">
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  )
}
