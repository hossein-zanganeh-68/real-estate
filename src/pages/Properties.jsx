import { useState, useMemo } from 'react'
import { properties, propertyTypes, locations } from '../data/properties.js'
import PropertyCard from '../components/PropertyCard.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { Filter, ChevronDown } from '../components/Icons.jsx'

export default function Properties() {
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')
  const [type, setType] = useState('')
  const [minBedrooms, setMinBedrooms] = useState('')
  const [minBathrooms, setMinBathrooms] = useState('')
  const [priceRange, setPriceRange] = useState('')
  const [sort, setSort] = useState('featured')
  const [showAdvanced, setShowAdvanced] = useState(false)

  const filtered = useMemo(() => {
    let result = [...properties]

    if (search) {
      const q = search.toLowerCase()
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q)
      )
    }
    if (location) result = result.filter(p => p.location === location)
    if (type) result = result.filter(p => p.type === type)
    if (minBedrooms) result = result.filter(p => p.bedrooms >= Number(minBedrooms))
    if (minBathrooms) result = result.filter(p => p.bathrooms >= Number(minBathrooms))

    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number)
      result = result.filter(p => p.priceValue >= min && p.priceValue <= max)
    }

    switch (sort) {
      case 'price-asc': result.sort((a, b) => a.priceValue - b.priceValue); break
      case 'price-desc': result.sort((a, b) => b.priceValue - a.priceValue); break
      case 'beds': result.sort((a, b) => b.bedrooms - a.bedrooms); break
      case 'sqft': result.sort((a, b) => b.sqft - a.sqft); break
      default: result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }
    return result
  }, [search, location, type, minBedrooms, minBathrooms, priceRange, sort])

  const clearAll = () => {
    setSearch(''); setLocation(''); setType('')
    setMinBedrooms(''); setMinBathrooms(''); setPriceRange(''); setSort('featured')
  }

  return (
    <>
      <section className="page-banner">
        <img src="/images/banner-properties.jpg" alt="Luxury property" />
        <div className="hero-overlay" />
        <div className="page-banner-content">
          <h1>Properties</h1>
          <div className="breadcrumb">
            <a href="/">Home</a><span>/</span><span>Properties</span>
          </div>
        </div>
      </section>

      <section className="properties-page section">
        <div className="filter-bar">
          <button className="filter-toggle" onClick={() => setShowAdvanced(!showAdvanced)} aria-expanded={showAdvanced}>
            <Filter size={18} /> Filters <ChevronDown size={18} className={showAdvanced ? 'open' : ''} />
          </button>
          <div className="filter-top">
            <div className="filter-field">
              <label>Search</label>
              <input type="text" placeholder="Property name, location..." value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <div className="filter-field">
              <label>Location</label>
              <select value={location} onChange={e => setLocation(e.target.value)}>
                <option value="">All Locations</option>
                {locations.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
            <div className="filter-field">
              <label>Property Type</label>
              <select value={type} onChange={e => setType(e.target.value)}>
                <option value="">All Types</option>
                {propertyTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="filter-actions">
              <button className="btn btn-outline-navy" onClick={clearAll}>Clear</button>
            </div>
          </div>
          <div className={`filter-advanced ${showAdvanced ? 'open' : 'hidden'}`}>
            <div className="filter-field">
              <label>Price Range</label>
              <select value={priceRange} onChange={e => setPriceRange(e.target.value)}>
                <option value="">Any Price</option>
                <option value="0-2500000">Up to $2.5M</option>
                <option value="2500000-4000000">$2.5M – $4M</option>
                <option value="4000000-7000000">$4M+</option>
              </select>
            </div>
            <div className="filter-field">
              <label>Bedrooms</label>
              <select value={minBedrooms} onChange={e => setMinBedrooms(e.target.value)}>
                <option value="">Any</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
                <option value="6">6+</option>
              </select>
            </div>
            <div className="filter-field">
              <label>Bathrooms</label>
              <select value={minBathrooms} onChange={e => setMinBathrooms(e.target.value)}>
                <option value="">Any</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
          </div>
        </div>

        <div className="results-header">
          <p>{filtered.length} {filtered.length === 1 ? 'property' : 'properties'} found</p>
          <select value={sort} onChange={e => setSort(e.target.value)}>
            <option value="featured">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="beds">Most Bedrooms</option>
            <option value="sqft">Largest Area</option>
          </select>
        </div>

        {filtered.length > 0 ? (
          <div className="results-grid">
            <div className="property-grid">
              {filtered.map(p => (
                <ScrollReveal key={p.id}>
                  <PropertyCard property={p} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        ) : (
          <div className="no-results">
            <h2>No properties match your criteria.</h2>
            <p>Try adjusting your filters or clearing them to see all properties.</p>
          </div>
        )}
      </section>
    </>
  )
}
