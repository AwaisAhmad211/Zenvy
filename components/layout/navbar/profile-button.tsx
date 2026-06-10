"use client";

import Link from "next/link";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProfileButtonProps {
  user?: {
    initials: string;
    name: string;
  } | null;
}

export function ProfileButton({ user }: ProfileButtonProps) {
  if (user) {
    return (
      <Link
        href="/dashboard"
        className={cn(
          "w-[42px] h-[42px] rounded-xl",
          "bg-gradient-to-br from-brand to-mid",
          "flex items-center justify-center",
          "text-white text-sm font-bold font-display",
          "hover:-translate-y-px transition-all duration-200",
          "border-2 border-white shadow-sm"
        )}
        aria-label={`Profile: ${user.name}`}
      >
        {user.initials}
      </Link>
    );
  }

  return (
    <Link
      href="/login"
      className={cn(
        "w-[42px] h-[42px] rounded-xl",
        "border border-[rgba(11,46,51,0.11)] bg-[rgba(11,46,51,0.04)]",
        "flex items-center justify-center text-text",
        "hover:bg-[rgba(11,46,51,0.08)] hover:border-[rgba(11,46,51,0.20)] hover:-translate-y-px",
        "transition-all duration-200"
      )}
      aria-label="Sign in"
    >
      <User size={18} />
    </Link>
  );
}
