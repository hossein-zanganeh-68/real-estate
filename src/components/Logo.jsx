import { Link } from 'react-router-dom'

export default function Logo({ scrolled }) {
  return (
    <Link to="/" className="logo" aria-label="Horizon Properties home">
      <svg className="logo-icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        {/* Architectural house/bridge line icon */}
        <path d="M4 34V18L20 6l16 12v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--champagne)' }} />
        <path d="M12 34V22h16v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--champagne)' }} />
        <path d="M4 18h32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" style={{ color: 'var(--champagne)', opacity: 0.5 }} />
      </svg>
      <span className="logo-text">
        HORIZON
        <span>PROPERTIES</span>
      </span>
    </Link>
  )
}
