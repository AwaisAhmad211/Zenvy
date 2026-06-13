'use client';

import { motion } from 'framer-motion';

type Props = {
  cards: {
    icon: string;
    name: string;
    price: string;
  }[];
};

export default function HeroVisual({ cards }: Props) {
  return (
    <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-[420px]">

      {/* CARD 1 */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        whileHover={{ scale: 1.04 }}
        className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl shadow-lg cursor-pointer rotate-[-3deg]"
      >
        <div className="text-2xl">{cards[0].icon}</div>
        <div>
          <div className="text-gray-900 text-sm font-semibold">
            {cards[0].name}
          </div>
          <div className="text-gray-500 text-sm">
            {cards[0].price}
          </div>
        </div>
      </motion.div>

      {/* CARD 2 (main focus card) */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl shadow-xl cursor-pointer ml-10 mt-4 rotate-[2deg] z-10"
      >
        <div className="text-2xl">{cards[1].icon}</div>
        <div>
          <div className="text-gray-900 text-sm font-semibold">
            {cards[1].name}
          </div>
          <div className="text-gray-500 text-sm">
            {cards[1].price}
          </div>
        </div>
      </motion.div>

      {/* CARD 3 */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        whileHover={{ scale: 1.04 }}
        className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl shadow-lg cursor-pointer mt-3 rotate-[-1.5deg]"
      >
        <div className="text-2xl">{cards[2].icon}</div>
        <div>
          <div className="text-gray-900 text-sm font-semibold">
            {cards[2].name}
          </div>
          <div className="text-gray-500 text-sm">
            {cards[2].price}
          </div>
        </div>
      </motion.div>

    </div>
  );
}