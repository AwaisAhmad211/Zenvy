import FeaturedProduct from "@/components/home/featured-product"
import Hero from "@/components/home/hero/Hero"
// import HeroSection from "@/components/home/hero-section"
import HowItWorks from "@/components/home/HowItWorks"

export default function HomePage() {
  return (
    <div>
      {/* <HeroSection /> */}
      <Hero />
      <br />
      <FeaturedProduct />
      <br />
      <HowItWorks />
      <br />
    </div>
  )
}