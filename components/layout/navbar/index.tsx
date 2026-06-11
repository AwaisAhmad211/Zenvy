// components/layout/navbar/navbar.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SearchBar } from "@/components/layout/navbar/search-bar";
import { CartButton } from "@/components/layout/navbar/cart-button";
import { WishlistButton } from "@/components/layout/navbar/wishlist-button";
import { ProfileButton } from "@/components/layout/navbar/profile-button";
import { CountryPill } from "@/components/layout/navbar/country-pill";
import { MobileMenuTrigger } from "@/components/layout/navbar/mobile-menu-trigger";

interface NavbarProps {
  wishlistCount?: number;
  countryCode?: string;
  user?: {
    initials: string;
    name: string;
  } | null;
}

export function Navbar({
  wishlistCount = 0,
  countryCode = "pk",
  user = null,
}: NavbarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-30",
        "bg-surface/90 backdrop-blur-navbar",
        "border-b border-border",
        "px-4 md:px-8",
      )}
    >
      <div className="flex items-center gap-3 md:gap-4 h-16 max-w-container mx-auto">
        {/* ── Logo ── */}
        <Link
          href="/"
          prefetch={false}
          className="flex items-center gap-1.5 font-display text-[22px] font-bold text-text tracking-[-0.5px] whitespace-nowrap shrink-0"
        >
          <div className="w-8 h-8 bg-linear-to-br from-brand to-mid rounded-lg flex items-center justify-center text-base">
            ✈️
          </div>
          Zenvy<span className="text-brand">Intl</span>
        </Link>

        {/* ── Search — hidden on mobile ── */}
        <div className="hidden md:flex flex-1">
          <SearchBar />
        </div>

        {/* ── Right Actions ── */}
        <div className="flex items-center gap-1.5 ml-auto">
          {/* Country pill */}
          <div className="hidden sm:block">
            <CountryPill countryCode={countryCode} />
          </div>

          {/* Wishlist */}
          <WishlistButton count={wishlistCount} />

          {/* Cart */}
          <CartButton />

          {/* Profile */}
          <ProfileButton user={user} />

          {/* New Client-Side Trigger for Mobile Menu */}
          <MobileMenuTrigger />
        </div>
      </div>

      {/* ── Mobile Search ── */}
      <div className="md:hidden pb-3">
        <SearchBar />
      </div>
    </header>
  );
}