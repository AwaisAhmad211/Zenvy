"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_LINKS = [
  { href: "/", label: "🏠 Home" },
  { href: "/stores/pk", label: "🇵🇰 Pakistan Store" },
  { href: "/stores/us", label: "🇺🇸 USA Store" },
  { href: "/stores", label: "🌍 All Countries" },
  { href: "/request", label: "📋 Request Product" },
];

const ACCOUNT_LINKS = [
  { href: "/dashboard", label: "📦 My Orders" },
  { href: "/dashboard/wishlist", label: "❤️ Wishlist" },
  { href: "/cart", label: "🛒 Cart" },
  { href: "/dashboard/orders", label: "📍 Track Order" },
];

const MORE_LINKS = [
  { href: "/seller", label: "💼 Become a Seller" },
  { href: "/login", label: "👤 Sign In / Register" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // ── Lock body scroll when open ──
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ── Close on Escape key ──
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-blue/50 backdrop-blur-sm",
          "transition-opacity duration-250",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={cn(
          "fixed top-0 left-0 bottom-0 z-50 w-75",
          "bg-surface border-r border-border",
          "flex flex-col overflow-y-auto",
          "transition-transform duration-300 ease-smooth",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
        aria-label="Mobile navigation"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <Link
            href="/"
            prefetch={false}
            onClick={onClose}
            className="flex items-center gap-2 font-display text-[22px] font-bold text-text tracking-[-0.5px]"
          >
            <div className="w-8 h-8 bg-linear-to-br from-brand to-mid rounded-lg flex items-center justify-center text-base">
              ✈️
            </div>
            Zenvy<span className="text-brand">Intl</span>
          </Link>
          <button
            onClick={onClose}
            className={cn(
              "w-9 h-9 rounded-xl bg-glass-2",
              "flex items-center justify-center text-text-2",
              "hover:bg-glass-2 transition-colors",
            )}
            aria-label="Close menu"
          >
            <X size={16} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-4">
          {/* Main Links */}
          <div className="flex flex-col gap-1 mb-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                onClick={onClose}
                className={cn(
                  "block px-4 py-3 rounded-xl",
                  "text-[15px] font-medium text-text-2",
                  "hover:bg-glass-2 hover:text-brand",
                  "transition-colors duration-150",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="h-px bg-border my-3" />

          {/* Account Links */}
          <div className="flex flex-col gap-1 mb-4">
            {ACCOUNT_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                onClick={onClose}
                className={cn(
                  "block px-4 py-3 rounded-xl",
                  "text-[15px] font-medium text-text-2",
                  "hover:bg-glass-2 hover:text-brand",
                  "transition-colors duration-150",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="h-px bg-border my-3" />

          {/* More Links */}
          <div className="flex flex-col gap-1">
            {MORE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                onClick={onClose}
                className={cn(
                  "block px-4 py-3 rounded-xl",
                  "text-[15px] font-medium text-text-2",
                  "hover:bg-glass-2 hover:text-brand",
                  "transition-colors duration-150",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* CTA at Bottom */}
        <div className="px-4 pb-6">
          <Link
            href="/request"
            prefetch={false}
            onClick={onClose}
            className={cn(
              "flex items-center justify-center gap-2 w-full px-5 py-3",
              "bg-linear-to-r from-brand to-mid",
              "text-white text-sm font-semibold rounded-xl",
              "shadow-brand",
              "hover:-translate-y-0.5 hover:shadow-brand",
              "transition-all duration-200",
            )}
          >
            📋 Request Any Product
          </Link>
        </div>
      </aside>
    </>
  );
}
