import { useState, useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Expand, X } from './Icons.jsx'

export default function ImageGallery({ images }) {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const next = useCallback(() => setActive((i) => (i + 1) % images.length), [images.length])
  const prev = useCallback(() => setActive((i) => (i - 1 + images.length) % images.length), [images.length])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(false)
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, next, prev])

  return (
    <>
      <div className="detail-gallery">
        <div className="gallery-main">
          <img src={images[active].url} alt={images[active].alt} />
          <button className="gallery-arrow prev" onClick={prev} aria-label="Previous image">
            <ChevronLeft size={24} />
          </button>
          <button className="gallery-arrow next" onClick={next} aria-label="Next image">
            <ChevronRight size={24} />
          </button>
          <span className="gallery-counter">{active + 1} / {images.length}</span>
          <button className="gallery-fullscreen" onClick={() => setLightbox(true)} aria-label="View fullscreen">
            <Expand size={20} />
          </button>
        </div>
        <div className="gallery-thumbs">
          {images.map((img, i) => (
            <button
              key={i}
              className={`gallery-thumb ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Image ${i + 1}`}
            >
              <img src={img.url} alt={img.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={(e) => { if (e.target === e.currentTarget) setLightbox(false) }}>
          <button className="lightbox-close" onClick={() => setLightbox(false)} aria-label="Close">
            <X size={24} />
          </button>
          <button className="gallery-arrow prev" onClick={prev} style={{ position: 'absolute', left: '2rem' }} aria-label="Previous image">
            <ChevronLeft size={28} />
          </button>
          <img src={images[active].url} alt={images[active].alt} />
          <button className="gallery-arrow next" onClick={next} style={{ position: 'absolute', right: '2rem' }} aria-label="Next image">
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </>
  )
}
