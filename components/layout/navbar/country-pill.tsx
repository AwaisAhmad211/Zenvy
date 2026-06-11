"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// ── Supported countries ──
const COUNTRIES = [
  { code: "pk", name: "Pakistan", flag: "🇵🇰" },
  { code: "us", name: "USA", flag: "🇺🇸" },
  { code: "gb", name: "UK", flag: "🇬🇧" },
  { code: "ae", name: "UAE", flag: "🇦🇪" },
  { code: "de", name: "Germany", flag: "🇩🇪" },
];

interface CountryPillProps {
  countryCode?: string; // "pk" | "us" etc — from user session or cookie
}

export function CountryPill({ countryCode = "pk" }: CountryPillProps) {
  const country =
    COUNTRIES.find((c) => c.code === countryCode) ?? COUNTRIES[0];

  return (
    <Link
      href="/stores"
      className={cn(
        "flex items-center gap-1.5 px-3.5 py-2",
        "border border-border rounded-xl",
        "bg-glass text-text",
        "text-[13px] font-medium",
        "hover:border-brand hover:bg-glass-2",
        "transition-all duration-200 whitespace-nowrap"
      )}
    >
      <span>{country.flag}</span>
      <span>{country.name}</span>
      <ChevronDown size={12} className="opacity-50" />
    </Link>
  );
}
