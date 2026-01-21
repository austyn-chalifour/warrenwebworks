import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import PortfolioPreview from '@/components/home/PortfolioPreview'
import TrustSignals from '@/components/home/TrustSignals'
import CTASection from '@/components/home/CTASection'
import Stats from '@/components/home/Stats'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <Services />
      <Stats />
      <PortfolioPreview />
      <CTASection />
    </>
  )
}

