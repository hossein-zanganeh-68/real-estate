import TeamSection from '../sections/TeamSection.jsx'
import CTA from '../sections/CTA.jsx'

export default function Team() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Our People</span>
          <h1>Meet the Team</h1>
          <p>Experienced professionals dedicated to helping you find the perfect property.</p>
        </div>
      </div>

      <TeamSection />
      <CTA />
    </>
  )
}
