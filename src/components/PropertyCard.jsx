import { Link } from 'react-router-dom'
import { MapPin, Heart } from './Icons.jsx'
import { useFavorites } from './FavoritesContext.jsx'

export default function PropertyCard({ property, variant = 'default' }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const fav = isFavorite(property.id)

  return (
    <Link
      to={`/properties/${property.id}`}
      className={`property-card carousel-card ${variant === 'wide' ? 'carousel-card-wide' : variant === 'narrow' ? 'carousel-card-narrow' : ''}`}
    >
      <div className="property-card-image">
        <img src={property.image} alt={property.name} loading="lazy" />
        {property.type && <span className="property-card-type">{property.type}</span>}
        <span className="property-card-price">{property.price}</span>
        <button
          className={`property-card-fav ${fav ? 'active' : ''}`}
          onClick={(e) => { e.preventDefault(); toggleFavorite(property.id) }}
          aria-label={fav ? 'Remove from favorites' : 'Add to favorites'}
          aria-pressed={fav}
        >
          <Heart style={fav ? { fill: '#e74c3c', stroke: '#e74c3c' } : {}} />
        </button>
        <div className="property-card-overlay">
          <h3 className="property-card-name">{property.name}</h3>
          <p className="property-card-location">
            <MapPin /> {property.location}
          </p>
        </div>
      </div>
    </Link>
  )
}
