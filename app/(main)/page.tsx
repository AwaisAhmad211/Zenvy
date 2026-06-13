import FeaturedProduct from "@/components/home/featured-product"
import HeroSection from "@/components/home/hero-section"
import HowItWorks from "@/components/home/HowItWorks"

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <HeroSection />
      <br />
      <FeaturedProduct />
      <br />
      <HowItWorks />
      <br />
    </div>
  )
}