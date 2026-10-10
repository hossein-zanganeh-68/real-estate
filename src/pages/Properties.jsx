import { useState, useMemo } from 'react'
import PropertyCard from '../components/PropertyCard.jsx'
import { properties, propertyTypes, locations } from '../data/properties.js'
import { Search } from '../components/Icons.jsx'

export default function Properties() {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('All Types')
  const [location, setLocation] = useState('All Locations')
  const [maxPrice, setMaxPrice] = useState('')
  const [minBeds, setMinBeds] = useState('')
  const [minBaths, setMinBaths] = useState('')
  const [sortBy, setSortBy] = useState('featured')

  const filtered = useMemo(() => {
    let result = properties.filter((p) => {
      const matchSearch = !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase())
      const matchType = type === 'All Types' || p.type === type
      const matchLocation = location === 'All Locations' || p.location === location
      const matchPrice = !maxPrice || p.priceValue <= parseInt(maxPrice) * 1000000
      const matchBeds = !minBeds || p.beds >= parseInt(minBeds)
      const matchBaths = !minBaths || p.baths >= parseInt(minBaths)
      return matchSearch && matchType && matchLocation && matchPrice && matchBeds && matchBaths
    })

    switch (sortBy) {
      case 'price-low': result = [...result].sort((a, b) => a.priceValue - b.priceValue); break
      case 'price-high': result = [...result].sort((a, b) => b.priceValue - a.priceValue); break
      case 'beds': result = [...result].sort((a, b) => b.beds - a.beds); break
      default: result = [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }
    return result
  }, [search, type, location, maxPrice, minBeds, minBaths, sortBy])

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Browse</span>
          <h1>Find Your Property</h1>
          <p>Explore our curated collection of premium homes and investment properties in the most sought-after locations.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="filters-bar">
            <div className="filter-group filter-search">
              <label htmlFor="search">Search</label>
              <Search />
              <input
                id="search"
                type="text"
                placeholder="Property name or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="filter-group">
              <label htmlFor="type">Property Type</label>
              <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                {propertyTypes.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="location">Location</label>
              <select id="location" value={location} onChange={(e) => setLocation(e.target.value)}>
                {locations.map((l) => <option key={l}>{l}</option>)}
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="price">Max Price ($M)</label>
              <input
                id="price"
                type="number"
                placeholder="Any"
                min="1"
                step="0.5"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
            <div className="filter-group">
              <label htmlFor="beds">Min Beds</label>
              <select id="beds" value={minBeds} onChange={(e) => setMinBeds(e.target.value)}>
                <option value="">Any</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="baths">Min Baths</label>
              <select id="baths" value={minBaths} onChange={(e) => setMinBaths(e.target.value)}>
                <option value="">Any</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
          </div>

          <div className="results-header">
            <div className="results-count">
              Showing <strong>{filtered.length}</strong> {filtered.length === 1 ? 'property' : 'properties'}
            </div>
            <div className="results-sort">
              <label htmlFor="sort">Sort by:</label>
              <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="beds">Most Bedrooms</option>
              </select>
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="properties-grid">
              {filtered.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h3>No properties found</h3>
              <p>Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
