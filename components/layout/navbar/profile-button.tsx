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
          "w-10.5 h-10.5 rounded-xl",
          "bg-linear-to-br from-brand to-mid",
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
        "w-10.5 h-10.5 rounded-xl",
        "border border-border bg-glass",
        "flex items-center justify-center text-text",
        "hover:bg-glass-2 hover:border-border-2 hover:-translate-y-px",
        "transition-all duration-200"
      )}
      aria-label="Sign in"
    >
      <User size={18} />
    </Link>
  );
}
