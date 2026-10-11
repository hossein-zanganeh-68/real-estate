// Centralized SVG icon system — all icons inherit currentColor
const S = (props) => ({
  width: props.size || 20, height: props.size || 20,
  viewBox: '0 0 24 24', fill: 'none',
  stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round',
  ...props, className: props.className,
})

export const Phone = (p) => <svg {...S(p)}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>

export const ArrowRight = (p) => <svg {...S(p)}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
export const ArrowLeft = (p) => <svg {...S(p)}><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>

export const ChevronLeft = (p) => <svg {...S(p)}><polyline points="15 18 9 12 15 6"/></svg>
export const ChevronRight = (p) => <svg {...S(p)}><polyline points="9 18 15 12 9 6"/></svg>
export const ChevronDown = (p) => <svg {...S(p)}><polyline points="6 9 12 15 18 9"/></svg>

export const MapPin = (p) => <svg {...S(p)}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
export const Bed = (p) => <svg {...S(p)}><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
export const Bath = (p) => <svg {...S(p)}><path d="M4 12V5a2 2 0 0 1 4 0v1M2 12h20v3a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-3zM6 19l-1 2M18 19l1 2"/></svg>
export const Ruler = (p) => <svg {...S(p)}><path d="M3 15.5L8.5 21l12-12L15 3.5 3 15.5zM7 14l2 2M11 10l2 2M15 6l2 2"/></svg>

export const Heart = (p) => <svg {...S(p)} className={p.className}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill={p.filled ? 'currentColor' : 'none'}/></svg>
export const HeartFilled = (p) => <svg {...S(p)} fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>

export const Check = (p) => <svg {...S(p)}><polyline points="20 6 9 17 4 12"/></svg>
export const Mail = (p) => <svg {...S(p)}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>

export const Expand = (p) => <svg {...S(p)}><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
export const X = (p) => <svg {...S(p)}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
export const Key = (p) => <svg {...S(p)}><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3"/></svg>

export const Facebook = (p) => <svg {...S(p)}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
export const Instagram = (p) => <svg {...S(p)}><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"/></svg>
export const Twitter = (p) => <svg {...S(p)}><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
export const Linkedin = (p) => <svg {...S(p)}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg>

// Logo icon — minimal architectural building
export const Logo = (p) => (
  <svg width={p.size||28} height={p.size||28} viewBox="0 0 32 32" fill="none" {...p}>
    <path data-stroke="true" d="M6 26V12L16 6l10 6v14M6 26h20M10 26v-8h5v8M17 18v8M14 12h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Service icons
export const IconHome = (p) => <svg {...S(p)}><path d="M3 9.5L12 3l9 6.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.5z"/><polyline points="9 22 9 15 15 15 15 22"/></svg>
export const IconChart = (p) => <svg {...S(p)}><path d="M3 3v18h18M7 16l4-6 4 3 5-8"/></svg>
export const IconMegaphone = (p) => <svg {...S(p)}><path d="M3 11l18-5v12L3 14v-3zM11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
export const IconCompass = (p) => <svg {...S(p)}><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
export const IconScale = (p) => <svg {...S(p)}><path d="M12 3v18M5 21h14M12 6l-7 4 3 6H4l3-6M12 6l7 4-3 6h4l-3-6"/></svg>
export const IconPin = (p) => <svg {...S(p)}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>

export const Filter = (p) => <svg {...S(p)}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
