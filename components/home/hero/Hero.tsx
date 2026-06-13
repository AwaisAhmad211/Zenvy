import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import Marquee from "./Marquee";


import {
  heroContent,
  heroStats,
  heroCards,
} from "@/data/hero";

export default function Hero() {
  return (
    <>
      <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-[#0B2E33] via-[#1a4a51] to-[#93B1B5] overflow-hidden">
        
        <HeroBackground />

        <div className="max-w-7xl mx-auto w-full relative">
          <HeroContent content={heroContent} stats={heroStats} />
          <HeroVisual cards={heroCards} />
        </div>

      </section>

      <Marquee />
    </>
  );
}