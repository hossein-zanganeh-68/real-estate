import Hero from '../sections/Hero.jsx'
import AboutSection from '../sections/AboutSection.jsx'
import FeaturedProperties from '../sections/FeaturedProperties.jsx'
import ServicesSection from '../sections/ServicesSection.jsx'
import WhyChooseHorizon from '../sections/WhyChooseHorizon.jsx'
import TeamSection from '../sections/TeamSection.jsx'
import CTA from '../sections/CTA.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedProperties />
      <ServicesSection />
      <WhyChooseHorizon />
      <TeamSection />
      <CTA />
    </>
  )
}
