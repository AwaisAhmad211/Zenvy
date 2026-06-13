'use client';

import { motion } from 'framer-motion';

type Props = {
  content: any;
  stats: { value: string; label: string }[];
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, 
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as any, // ✅ smoother ease (important)
    },
  },
});

export default function HeroContent({ content, stats }: Props) {
  return (
    <div className="relative z-10 px-8 py-20 max-w-2xl">

      {/* EYEBROW */}
      <motion.div
        variants={fadeUp(0)}
        initial="hidden"
        animate="show"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-cyan-200 mb-6"
      >
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        {content.eyebrow}
      </motion.div>

      {/* HEADING */}
      <motion.h1
        variants={fadeUp(0.15)} // 👈 slightly more delay
        initial="hidden"
        animate="show"
        className="text-5xl md:text-6xl font-bold leading-tight text-white"
      >
        {content.heading.part1}{" "}
        <span className="bg-gradient-to-r from-cyan-200 via-white to-slate-300 bg-clip-text text-transparent">
          {content.heading.highlight}
        </span>
        <br />
        {content.heading.part2}
      </motion.h1>

      {/* SUB */}
      <motion.p
        variants={fadeUp(0.3)}
        initial="hidden"
        animate="show"
        className="mt-6 text-white/70 text-lg max-w-xl"
      >
        {content.sub}
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        variants={fadeUp(0.45)}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-3 mt-8"
      >
        <button className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-105 transition">
          🇵🇰 Shop for Pakistan
        </button>

        <button className="px-6 py-3 border border-white/30 text-white rounded-xl hover:bg-white/10 transition">
          🇺🇸 USA Store
        </button>

        <button className="px-6 py-3 border border-white/30 text-white rounded-xl hover:bg-white/10 transition">
          📋 Request Any Product
        </button>
      </motion.div>

      {/* STATS */}
      <motion.div
        variants={fadeUp(0.6)}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-8 mt-14 text-white"
      >
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-2xl font-bold">{s.value}</div>
            <div className="text-sm text-cyan-100/70">{s.label}</div>
          </div>
        ))}
      </motion.div>

    </div>
  );
}