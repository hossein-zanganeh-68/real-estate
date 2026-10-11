import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { getPropertyById, getSimilarProperties } from '../data/properties.js'
import ImageGallery from '../components/ImageGallery.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { MapPin, Bed, Bath, Ruler, IconHome, Check, Phone, Mail, ArrowRight, Heart } from '../components/Icons.jsx'

export default function PropertyDetail() {
  const { id } = useParams()
  const property = getPropertyById(id)
  const [fav, setFav] = useState(false)

  if (!property) {
    return (
      <div className="detail-page container">
        <div className="no-results">
          <h2>Property not found.</h2>
          <Link to="/properties" className="btn btn-navy" style={{ marginTop: '1.5rem' }}>Browse Properties</Link>
        </div>
      </div>
    )
  }

  const similar = getSimilarProperties(id)

  return (
    <>
      <div className="detail-page">
        <ImageGallery images={property.images} />

        <div className="detail-header">
          <div>
            <h1>{property.name}</h1>
            <p className="detail-location"><MapPin size={18} /> {property.location}</p>
          </div>
          <div className="detail-price">{property.price}</div>
        </div>

        <div className="detail-layout">
          <div className="detail-main">
            {/* Specs */}
            <div className="detail-specs">
              <div className="detail-spec">
                <div className="spec-icon"><Bed size={24} /></div>
                <div className="spec-value">{property.bedrooms}</div>
                <div className="spec-label">Bedrooms</div>
              </div>
              <div className="detail-spec">
                <div className="spec-icon"><Bath size={24} /></div>
                <div className="spec-value">{property.bathrooms}</div>
                <div className="spec-label">Bathrooms</div>
              </div>
              <div className="detail-spec">
                <div className="spec-icon"><Ruler size={24} /></div>
                <div className="spec-value">{property.sqft.toLocaleString()}</div>
                <div className="spec-label">Sq. Feet</div>
              </div>
              <div className="detail-spec">
                <div className="spec-icon"><IconHome size={24} /></div>
                <div className="spec-value">{property.type}</div>
                <div className="spec-label">Type</div>
              </div>
            </div>

            {/* Description */}
            <div className="detail-body">
              <h2>About This Property</h2>
              <p>{property.description}</p>

              {/* Features */}
              <h2>Key Features</h2>
              <ul className="detail-features">
                {property.features.map((f, i) => (
                  <li key={i}><Check size={18} /> {f}</li>
                ))}
              </ul>

              {/* Amenities */}
              <h2>Amenities</h2>
              <ul className="detail-features">
                {property.amenities.map((a, i) => (
                  <li key={i}><Check size={18} /> {a}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="detail-sidebar">
            <div className="agent-card">
              <img src={property.agent.image} alt={property.agent.name} />
              <h3>{property.agent.name}</h3>
              <p className="agent-role">{property.agent.role}</p>
              <div className="agent-contact">
                <a href={`tel:${property.agent.phone}`}><Phone size={18} /> {property.agent.phone}</a>
                <a href={`mailto:${property.agent.email}`}><Mail size={18} /> {property.agent.email}</a>
              </div>
              <div className="agent-actions">
                <button className="btn btn-navy" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setFav(!fav)}>
                  {fav ? 'Saved' : 'Save Property'} <Heart size={18} filled={fav} />
                </button>
                <Link to="/contact" className="btn btn-outline-navy" style={{ width: '100%', justifyContent: 'center' }}>
                  Schedule a Viewing <ArrowRight size={18} className="arrow" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile sticky CTA */}
      <div className="detail-mobile-cta">
        <span className="mobile-price">{property.price}</span>
        <Link to="/contact" className="btn btn-navy">Contact Agent</Link>
      </div>

      {/* Similar properties */}
      {similar.length > 0 && (
        <section className="similar-section">
          <div className="similar-header">
            <ScrollReveal>
              <span className="section-label">You May Also Like</span>
              <h2 className="section-title">Similar Properties</h2>
            </ScrollReveal>
          </div>
          <div className="results-grid">
            <div className="property-grid">
              {similar.map(p => (
                <ScrollReveal key={p.id}>
                  <PropertyCard property={p} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
