"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export function CartButton() {
  const { count } = useCart();
  const prevCount = useRef(count);
  const [bump, setBump] = useState(false);

  // ── Bump animation when count increases ──
  useEffect(() => {
    if (count > prevCount.current) {
      setBump(true);
      const t = setTimeout(() => setBump(false), 300);
      return () => clearTimeout(t);
    }
    prevCount.current = count;
  }, [count]);

  return (
    <Link
      href="/cart"
      className={cn(
        "relative w-10.5 h-10.5 rounded-xl",
        "border border-border bg-glass",
        "flex items-center justify-center text-text",
        "hover:bg-glass-2 hover:border-border-2 hover:-translate-y-px",
        "transition-all duration-200"
      )}
      aria-label={`Cart, ${count} items`}
    >
      <ShoppingCart size={18} />
      {count > 0 && (
        <span
          className={cn(
            "absolute -top-1 -right-1",
            "min-w-4.5 h-4.5 px-1",
            "bg-brand text-white text-[10px] font-bold",
            "rounded-full flex items-center justify-center",
            "border-2 border-white font-display",
            "transition-transform duration-300",
            bump && "scale-[1.4]"
          )}
        >
          {count > 99 ? "99+" : count}
        </span>
      )}
    </Link>
  );
}
