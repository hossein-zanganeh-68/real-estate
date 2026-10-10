// Centralized SVG icon set — champagne-stroke line icons
const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const ArrowRight = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
export const ArrowLeft = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
)
export const Phone = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
)
export const MapPin = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
)
export const Heart = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
)
export const Bed = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" /></svg>
)
export const Bath = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5H4a1 1 0 0 0-1 1v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2H6M6 21v-2M18 21v-2" /></svg>
)
export const Ruler = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M21 3 3 21l3-3 3 3 3-3 3 3 3-3 3 3M7 14l3 3M11 10l3 3M15 6l3 3" /></svg>
)
export const Check = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M20 6 9 17l-5-5" /></svg>
)
export const Expand = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3" /></svg>
)
export const X = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M18 6 6 18M6 6l12 12" /></svg>
)
export const Search = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
)
export const Mail = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg>
)
export const Home = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M3 9.5 12 3l9 6.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /></svg>
)
export const Chart = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M3 3v18h18M7 16l4-4 3 3 5-6" /></svg>
)
export const Megaphone = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M3 11l14-7v16l-14-7v-2zM3 11v4a2 2 0 0 0 2 2h2v-6M19 8a3 3 0 0 1 0 6" /></svg>
)
export const Compass = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><circle cx="12" cy="12" r="10" /><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" /></svg>
)
export const Calculator = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M8 6h8M8 10h2M14 10h2M8 14h2M14 14h2M8 18h2M14 18h2" /></svg>
)
export const Key = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><circle cx="7.5" cy="15.5" r="4.5" /><path d="m10.5 12.5 8-8M16 7l3 3M14 9l3 3" /></svg>
)
export const Facebook = (p) => (
  <svg viewBox="0 0 24 24" {...p}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
)
export const Twitter = (p) => (
  <svg viewBox="0 0 24 24" {...p}><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
)
export const Instagram = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" /></svg>
)
export const Linkedin = (p) => (
  <svg viewBox="0 0 24 24" {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" /></svg>
)

export const serviceIcons = {
  home: Home, chart: Chart, megaphone: Megaphone,
  compass: Compass, calculator: Calculator, pin: MapPin,
}
