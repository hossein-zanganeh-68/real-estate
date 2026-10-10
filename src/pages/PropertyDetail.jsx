import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { getPropertyById, getSimilarProperties } from '../data/properties.js'
import { useFavorites } from '../components/FavoritesContext.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import Property3DViewer from '../components/Property3DViewer.jsx'
import {
  MapPin, Bed, Bath, Ruler, Check, Heart, ArrowLeft, ArrowRight,
  Expand, X, Phone, Mail, Home
} from '../components/Icons.jsx'

export default function PropertyDetail() {
  const { id } = useParams()
  const property = getPropertyById(id)
  const { isFavorite, toggleFavorite } = useFavorites()
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)
  const [contactSent, setContactSent] = useState(false)

  if (!property) {
    return (
      <div className="section" style={{ paddingTop: 140, textAlign: 'center' }}>
        <div className="container">
          <h2>Property not found</h2>
          <p style={{ marginBottom: 24 }}>The property you're looking for doesn't exist.</p>
          <Link to="/properties" className="btn btn-navy">Back to Properties</Link>
        </div>
      </div>
    )
  }

  const fav = isFavorite(property.id)
  const similar = getSimilarProperties(property.id)
  const gallery = property.gallery || [property.image]

  const nextImage = () => setGalleryIndex((i) => (i + 1) % gallery.length)
  const prevImage = () => setGalleryIndex((i) => (i - 1 + gallery.length) % gallery.length)

  return (
    <>
      <div className="pdp">
        <div className="container">
          <div className="pdp-header">
            <div className="pdp-breadcrumb">
              <Link to="/">Home</Link> <span>/</span>
              <Link to="/properties">Properties</Link> <span>/</span>
              <span>{property.name}</span>
            </div>
            <div className="pdp-title-row">
              <div className="pdp-title">
                <h1>{property.name}</h1>
                <p className="pdp-location"><MapPin /> {property.location}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <span className="pdp-price">{property.price}</span>
                <button
                  className={`pdp-fav-btn ${fav ? 'active' : ''}`}
                  onClick={() => toggleFavorite(property.id)}
                  aria-pressed={fav}
                >
                  <Heart style={fav ? { fill: '#e74c3c', stroke: '#e74c3c' } : {}} />
                  {fav ? 'Saved' : 'Save'}
                </button>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="pdp-gallery">
            <div className="pdp-gallery-main">
              <img src={gallery[galleryIndex]} alt={`${property.name} - view ${galleryIndex + 1}`} />
              <button className="pdp-gallery-nav prev" onClick={prevImage} aria-label="Previous image">
                <ArrowLeft />
              </button>
              <button className="pdp-gallery-nav next" onClick={nextImage} aria-label="Next image">
                <ArrowRight />
              </button>
              <button className="pdp-gallery-fullscreen" onClick={() => setFullscreen(true)} aria-label="View fullscreen">
                <Expand />
              </button>
            </div>
            <div className="pdp-gallery-thumbs">
              {gallery.map((img, i) => (
                <div
                  key={i}
                  className={`pdp-gallery-thumb ${i === galleryIndex ? 'active' : ''}`}
                  onClick={() => setGalleryIndex(i)}
                >
                  <img src={img} alt={`Thumbnail ${i + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {/* 3D Interactive Viewer */}
          <Property3DViewer />

          {/* Layout */}
          <div className="pdp-layout">
            <div className="pdp-content">
              <div className="pdp-stats">
                <div className="pdp-stat">
                  <div className="pdp-stat-icon"><Bed /></div>
                  <div className="pdp-stat-value">{property.beds}</div>
                  <div className="pdp-stat-label">Bedrooms</div>
                </div>
                <div className="pdp-stat">
                  <div className="pdp-stat-icon"><Bath /></div>
                  <div className="pdp-stat-value">{property.baths}</div>
                  <div className="pdp-stat-label">Bathrooms</div>
                </div>
                <div className="pdp-stat">
                  <div className="pdp-stat-icon"><Ruler /></div>
                  <div className="pdp-stat-value">{property.sqft.toLocaleString()}</div>
                  <div className="pdp-stat-label">Sq Ft</div>
                </div>
                <div className="pdp-stat">
                  <div className="pdp-stat-icon"><Home /></div>
                  <div className="pdp-stat-value">{property.type}</div>
                  <div className="pdp-stat-label">Property Type</div>
                </div>
              </div>

              <h2>Description</h2>
              <p>{property.description}</p>

              <h2>Key Features</h2>
              <ul className="pdp-features-list">
                {property.features.map((f, i) => (
                  <li key={i}><Check /> {f}</li>
                ))}
              </ul>

              <h2>Amenities</h2>
              <ul className="pdp-amenities-list">
                {property.amenities.map((a, i) => (
                  <li key={i}><Check /> {a}</li>
                ))}
              </ul>
            </div>

            <aside className="pdp-sidebar">
              <div className="agent-card">
                <img src={property.agent.image} alt={property.agent.name} />
                <h3>{property.agent.name}</h3>
                <div className="agent-role">{property.agent.title}</div>
                <div className="agent-contact"><Phone /> {property.agent.phone}</div>
                <div className="agent-contact"><Mail /> {property.agent.email}</div>
                <div className="agent-card-actions">
                  <a href={`tel:${property.agent.phone}`} className="btn btn-navy">
                    <Phone /> Contact Agent
                  </a>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => setContactSent(true)}
                  >
                    Schedule a Viewing
                  </button>
                  {contactSent && (
                    <div className="form-success" style={{ marginTop: 12 }}>
                      Request sent! We'll contact you shortly to confirm.
                    </div>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Mobile sticky CTA */}
      <div className="pdp-mobile-cta">
        <a href={`tel:${property.agent.phone}`} className="btn btn-outline-dark">
          <Phone /> Call
        </a>
        <button className="btn btn-navy" onClick={() => setContactSent(true)}>
          Schedule Viewing
        </button>
      </div>

      {/* Similar properties */}
      {similar.length > 0 && (
        <section className="similar-properties">
          <div className="container">
            <h2>Similar Properties</h2>
            <div className="properties-grid">
              {similar.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Fullscreen gallery */}
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            className="gallery-fullscreen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreen(false)}
          >
            <img src={gallery[galleryIndex]} alt={`${property.name} fullscreen`} onClick={(e) => e.stopPropagation()} />
            <button className="gallery-fullscreen-close" onClick={() => setFullscreen(false)} aria-label="Close fullscreen">
              <X />
            </button>
            <button className="gallery-fullscreen-nav prev" onClick={(e) => { e.stopPropagation(); prevImage() }} aria-label="Previous image">
              <ArrowLeft />
            </button>
            <button className="gallery-fullscreen-nav next" onClick={(e) => { e.stopPropagation(); nextImage() }} aria-label="Next image">
              <ArrowRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
