"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface WishlistButtonProps {
  count?: number;
}

export function WishlistButton({ count = 0 }: WishlistButtonProps) {
  return (
    <Link
      href="/dashboard/wishlist"
      className={cn(
        "relative w-10.5 h-10.5 rounded-xl",
        "border border-border bg-glass",
        "flex items-center justify-center text-text",
        "hover:bg-glass-2 hover:border-border-2 hover:-translate-y-px",
        "transition-all duration-200"
      )}
      aria-label={`Wishlist, ${count} items`}
    >
      <Heart size={18} />
      {count > 0 && (
        <span
          className={cn(
            "absolute -top-1 -right-1",
            "min-w-4.5 h-4.5 px-1",
            "bg-brand text-white text-[10px] font-bold",
            "rounded-full flex items-center justify-center",
            "border-2 border-white font-display"
          )}
        >
          {count}
        </span>
      )}
    </Link>
  );
}
