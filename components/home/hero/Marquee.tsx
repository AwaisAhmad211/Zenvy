import { marqueeItems } from "@/data/hero";

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-border bg-bg-2 py-3">
      
      <div className="flex w-max animate-marqueeSmooth gap-10">
        
        {/* FIRST SET */}
        {marqueeItems.map((item, i) => (
          <div
            key={`a-${i}`}
            className="text-sm text-text-2 flex items-center gap-2 whitespace-nowrap"
          >
            {item}
            <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
          </div>
        ))}

        {/* DUPLICATE SET (for seamless loop) */}
        {marqueeItems.map((item, i) => (
          <div
            key={`b-${i}`}
            className="text-sm text-text-2 flex items-center gap-2 whitespace-nowrap"
          >
            {item}
            <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
          </div>
        ))}

      </div>
    </div>
  );
}