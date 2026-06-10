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
        "relative w-[42px] h-[42px] rounded-xl",
        "border border-[rgba(11,46,51,0.11)] bg-[rgba(11,46,51,0.04)]",
        "flex items-center justify-center text-text",
        "hover:bg-[rgba(11,46,51,0.08)] hover:border-[rgba(11,46,51,0.20)] hover:-translate-y-px",
        "transition-all duration-200"
      )}
      aria-label={`Wishlist, ${count} items`}
    >
      <Heart size={18} />
      {count > 0 && (
        <span
          className={cn(
            "absolute -top-1 -right-1",
            "min-w-[18px] h-[18px] px-1",
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
