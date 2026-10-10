import ServicesSection from '../sections/ServicesSection.jsx'
import WhyChooseHorizon from '../sections/WhyChooseHorizon.jsx'
import CTA from '../sections/CTA.jsx'

export default function Services() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Services</span>
          <h1>What We Offer</h1>
          <p>Comprehensive real estate services designed for buyers, sellers, and investors at every level.</p>
        </div>
      </div>

      <ServicesSection />
      <WhyChooseHorizon />
      <CTA />
    </>
  )
}
