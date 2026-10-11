import { Link } from 'react-router-dom'
import { useState } from 'react'
import { MapPin, Bed, Bath, Ruler, Heart, HeartFilled } from './Icons.jsx'

export default function PropertyCard({ property }) {
  const [fav, setFav] = useState(false)

  return (
    <Link to={`/properties/${property.id}`} className="property-card">
      <div className="card-image">
        <img src={property.images[0].url} alt={property.images[0].alt} loading="lazy" />
        <span className="card-type-badge">{property.type}</span>
        <button
          className={`card-fav ${fav ? 'active' : ''}`}
          onClick={(e) => { e.preventDefault(); setFav(!fav) }}
          aria-label={fav ? 'Remove from favorites' : 'Add to favorites'}
          aria-pressed={fav}
        >
          {fav ? <HeartFilled size={18} /> : <Heart size={18} />}
        </button>
      </div>
      <div className="card-body">
        <h3 className="card-name">{property.name}</h3>
        <p className="card-location"><MapPin size={15} /> {property.location}</p>
        <div className="card-specs">
          <span><Bed size={16} /> {property.bedrooms} Beds</span>
          <span><Bath size={16} /> {property.bathrooms} Baths</span>
          <span><Ruler size={16} /> {property.sqft.toLocaleString()} ft²</span>
        </div>
        <p className="card-price">{property.price}</p>
      </div>
    </Link>
  )
}
