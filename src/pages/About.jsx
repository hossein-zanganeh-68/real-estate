import AboutSection from '../sections/AboutSection.jsx'
import WhyChooseHorizon from '../sections/WhyChooseHorizon.jsx'
import TeamSection from '../sections/TeamSection.jsx'
import CTA from '../sections/CTA.jsx'

export default function About() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">About Us</span>
          <h1>Who We Are</h1>
          <p>Connecting people with extraordinary homes and smart investments since 2001.</p>
        </div>
      </div>

      <AboutSection />
      <WhyChooseHorizon />
      <TeamSection />
      <CTA />
    </>
  )
}
