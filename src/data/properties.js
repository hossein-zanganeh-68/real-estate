const img = (name) => `/images/${name}`

// Local image references — all served from public/images/
const EXT = {
  modernWindows: 'ext-modern-windows.jpg',
  poolHouse: 'ext-pool-house.jpg',
  poolBuilding: 'ext-pool-building.jpg',
  poolRender: 'ext-pool-render.jpg',
  twoStory: 'ext-two-story.jpg',
  frontYard: 'ext-front-yard.jpg',
  luxuryHome: 'ext-luxury-home.jpg',
  beachHouse: 'ext-beach-house.jpg',
  concrete: 'ext-concrete.jpg',
  villa: 'ext-villa.jpg',
}
const INT_ = {
  fireplace: 'int-fireplace.jpg',
  dining: 'int-dining.jpg',
  marble: 'int-marble.jpg',
  largeWindow: 'int-large-window.jpg',
  brownSet: 'int-brown-set.jpg',
  windows: 'int-windows.jpg',
}
const POR = {
  man1: 'team-man1.jpg',
  woman1: 'team-woman1.jpg',
  man2: 'team-man2.jpg',
  woman2: 'team-woman2.jpg',
}

export const properties = [
  {
    id: 1,
    name: 'Lakeside Modern Villa',
    location: 'Austin, Texas, USA',
    price: '$2.35 Million',
    priceValue: 2350000,
    type: 'Villa',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 4200,
    featured: true,
    description:
      'A sculptural lakeside villa defined by floor-to-ceiling glass, clean horizontal lines, and seamless indoor-outdoor flow. The main living space opens to a resort-style patio with an infinity-edge pool that mirrors the Texas sky at dusk.',
    features: ['Infinity-edge pool', 'Smart home automation', 'Chef\u2019s kitchen with island', 'Private dock', 'Wine cellar', 'Three-car garage'],
    amenities: ['Lakefront access', 'Landscaped gardens', 'Home theater', 'Gym & spa room', 'Solar panels', 'EV charging'],
    images: [
      { url: img(EXT.modernWindows), alt: 'Lakeside Modern Villa exterior' },
      { url: img(EXT.luxuryHome), alt: 'Villa with pool and terrace' },
      { url: img(INT_.dining), alt: 'Open-plan living and dining area' },
      { url: img(EXT.frontYard), alt: 'Modern home with landscaped front yard' },
    ],
    agent: { name: 'Olivia Carter', role: 'Luxury Property Advisor', phone: '(555) 246-7891', email: 'olivia@horizonproperties.com', image: img(POR.woman1) },
  },
  {
    id: 2,
    name: 'Pacific Glass House',
    location: 'Malibu, California, USA',
    price: '$4.8 Million',
    priceValue: 4800000,
    type: 'Glass House',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 6500,
    featured: true,
    description:
      'Perched above the Pacific, this architectural glass house dissolves the boundary between interior and ocean. Retractable walls invite the sea breeze, while a cantilevered deck offers unobstructed sunset views.',
    features: ['Retractable glass walls', 'Ocean-view primary suite', 'Chef\u2019s kitchen', 'Infinity pool', 'Private path to beach', 'Two-car garage'],
    amenities: ['Smart climate control', 'Outdoor kitchen', 'Fire pit lounge', 'Surf storage room', 'Security system', 'Whole-home audio'],
    images: [
      { url: img(EXT.beachHouse), alt: 'Pacific Glass House overlooking the ocean' },
      { url: img(INT_.largeWindow), alt: 'Living room with floor-to-ceiling windows' },
      { url: img(EXT.poolHouse), alt: 'Pool and deck area' },
      { url: img(EXT.concrete), alt: 'Architectural concrete facade' },
    ],
    agent: { name: 'Daniel Morgan', role: 'Managing Director', phone: '(555) 246-7890', email: 'daniel@horizonproperties.com', image: img(POR.man1) },
  },
  {
    id: 3,
    name: 'Desert Horizon Estate',
    location: 'Scottsdale, Arizona, USA',
    price: '$3.15 Million',
    priceValue: 3150000,
    type: 'Estate',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3800,
    featured: true,
    description:
      'A desert modern estate that embraces its arid setting with rammed-earth walls, shaded courtyards, and a negative-edge pool that blends into the Sonoran horizon. Designed for seamless indoor-outdoor living.',
    features: ['Rammed-earth walls', 'Negative-edge pool', 'Shaded courtyards', 'Chef\u2019s kitchen', 'Home office', 'Three-car garage'],
    amenities: ['Desert landscaping', 'Outdoor shower', 'Wine room', 'Meditation room', 'Solar power', 'Smart irrigation'],
    images: [
      { url: img(EXT.villa), alt: 'Desert Horizon Estate at golden hour' },
      { url: img(EXT.twoStory), alt: 'Two-story modern home with balconies' },
      { url: img(INT_.marble), alt: 'Living room with marble fireplace' },
      { url: img(EXT.luxuryHome), alt: 'Modern home exterior' },
    ],
    agent: { name: 'James Wilson', role: 'Investment Consultant', phone: '(555) 246-7892', email: 'james@horizonproperties.com', image: img(POR.man2) },
  },
  {
    id: 4,
    name: 'Oceanfront Residence',
    location: 'Miami, Florida, USA',
    price: '$5.2 Million',
    priceValue: 5200000,
    type: 'Residence',
    bedrooms: 6,
    bathrooms: 5,
    sqft: 7800,
    featured: true,
    description:
      'A waterfront statement residence with a deep-water dock, rooftop terrace, and interiors curated by a renowned designer. Walls of glass frame Biscayne Bay, while a resort-style pool deck defines the outdoor experience.',
    features: ['Deep-water dock', 'Rooftop terrace', 'Designer interiors', 'Resort-style pool', 'Summer kitchen', 'Four-car garage'],
    amenities: ['Bay-view primary suite', 'Home gym', 'Wine cellar', 'Elevator', 'Smart home system', 'Hurricane impact glass'],
    images: [
      { url: img(EXT.poolHouse), alt: 'Oceanfront Residence with pool' },
      { url: img(EXT.modernWindows), alt: 'Modern home with large windows' },
      { url: img(INT_.brownSet), alt: 'Elegant living room' },
      { url: img(EXT.concrete), alt: 'Architectural detail' },
    ],
    agent: { name: 'Sophia Bennett', role: 'Senior Property Specialist', phone: '(555) 246-7893', email: 'sophia@horizonproperties.com', image: img(POR.woman2) },
  },
  {
    id: 5,
    name: 'Modern Hillside Retreat',
    location: 'Los Angeles, California, USA',
    price: '$3.75 Million',
    priceValue: 3750000,
    type: 'Retreat',
    bedrooms: 4,
    bathrooms: 4,
    sqft: 5200,
    featured: false,
    description:
      'Cascading down a Hollywood hillside, this retreat pairs cantilevered terraces with panoramic city views. A glass-bottom pool, screening room, and spa-like primary bath make every day feel like a resort stay.',
    features: ['Glass-bottom pool', 'City-view terraces', 'Screening room', 'Spa primary bath', 'Chef\u2019s kitchen', 'Two-car garage'],
    amenities: ['Hillside landscaping', 'Outdoor lounge', 'Wine tasting room', 'Home gym', 'Smart lighting', 'Air filtration'],
    images: [
      { url: img(EXT.poolRender), alt: 'Modern Hillside Retreat with pool' },
      { url: img(EXT.poolBuilding), alt: 'Building with pool and patio' },
      { url: img(INT_.fireplace), alt: 'Living room with fireplace' },
      { url: img(EXT.villa), alt: 'Villa exterior' },
    ],
    agent: { name: 'Olivia Carter', role: 'Luxury Property Advisor', phone: '(555) 246-7891', email: 'olivia@horizonproperties.com', image: img(POR.woman1) },
  },
  {
    id: 6,
    name: 'Palm Garden Residence',
    location: 'Beverly Hills, California, USA',
    price: '$6.4 Million',
    priceValue: 6400000,
    type: 'Residence',
    bedrooms: 7,
    bathrooms: 6,
    sqft: 9500,
    featured: false,
    description:
      'A grand Beverly Hills estate set behind private gates, with manicured palm gardens, a tennis court, and a guest house. Interiors feature soaring ceilings, imported stone, and a primary wing that rivals a five-star suite.',
    features: ['Private gated entry', 'Tennis court', 'Guest house', 'Primary wing', 'Formal gardens', 'Five-car garage'],
    amenities: ['Resort pool & spa', 'Home theater', 'Wine cellar', 'Fitness center', 'Staff quarters', 'Smart security'],
    images: [
      { url: img(EXT.twoStory), alt: 'Palm Garden Residence with balconies' },
      { url: img(EXT.luxuryHome), alt: 'Grand entrance' },
      { url: img(INT_.windows), alt: 'Formal living room with windows' },
      { url: img(EXT.villa), alt: 'Garden and pool area' },
    ],
    agent: { name: 'Daniel Morgan', role: 'Managing Director', phone: '(555) 246-7890', email: 'daniel@horizonproperties.com', image: img(POR.man1) },
  },
  {
    id: 7,
    name: 'Contemporary Lake House',
    location: 'Lake Tahoe, Nevada, USA',
    price: '$2.95 Million',
    priceValue: 2950000,
    type: 'Lake House',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 4500,
    featured: false,
    description:
      'A timber-and-glass lake house that frames the Sierra shoreline. A great room with a stone fireplace anchors the home, while a lakeside deck with a hot tub invites year-round enjoyment of Tahoe\u2019s seasons.',
    features: ['Lakeside deck', 'Hot tub', 'Stone fireplace', 'Great room', 'Chef\u2019s kitchen', 'Two-car garage'],
    amenities: ['Private dock', 'Ski storage', 'Mud room', 'Wine refrigerator', 'Heated driveway', 'Smart thermostat'],
    images: [
      { url: img(EXT.frontYard), alt: 'Contemporary Lake House' },
      { url: img(INT_.dining), alt: 'Cozy interior with dining area' },
      { url: img(EXT.modernWindows), alt: 'Home with large windows' },
      { url: img(EXT.poolHouse), alt: 'Exterior with patio' },
    ],
    agent: { name: 'James Wilson', role: 'Investment Consultant', phone: '(555) 246-7892', email: 'james@horizonproperties.com', image: img(POR.man2) },
  },
  {
    id: 8,
    name: 'Architectural Downtown Penthouse',
    location: 'Austin, Texas, USA',
    price: '$1.85 Million',
    priceValue: 1850000,
    type: 'Penthouse',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2800,
    featured: false,
    description:
      'A full-floor downtown penthouse with 360-degree skyline views, a private rooftop terrace, and double-height living space. Custom millwork, designer lighting, and a chef\u2019s kitchen define this urban aerie.',
    features: ['360-degree views', 'Private rooftop terrace', 'Double-height living', 'Chef\u2019s kitchen', 'Designer lighting', 'Assigned parking'],
    amenities: ['Concierge service', 'Fitness center', 'Rooftop pool', 'Resident lounge', 'Smart home system', 'Pet spa'],
    images: [
      { url: img(INT_.fireplace), alt: 'Downtown Penthouse interior' },
      { url: img(INT_.largeWindow), alt: 'Living area with city views' },
      { url: img(EXT.twoStory), alt: 'Modern building exterior' },
      { url: img(INT_.brownSet), alt: 'Stylish living space' },
    ],
    agent: { name: 'Sophia Bennett', role: 'Senior Property Specialist', phone: '(555) 246-7893', email: 'sophia@horizonproperties.com', image: img(POR.woman2) },
  },
]

export const propertyTypes = [...new Set(properties.map((p) => p.type))]
export const locations = [...new Set(properties.map((p) => p.location))]

export function getPropertyById(id) {
  return properties.find((p) => p.id === Number(id))
}

export function getSimilarProperties(id, limit = 3) {
  const current = getPropertyById(id)
  if (!current) return []
  return properties
    .filter((p) => p.id !== current.id && (p.type === current.type || p.location === current.location))
    .slice(0, limit)
}
