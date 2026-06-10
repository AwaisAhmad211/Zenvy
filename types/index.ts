// ─── Product ───────────────────────────────────────────
export interface Product {
  id: string;
  title: string;
  price: number;
  currency: "PKR" | "USD" | "GBP" | "AED";
  image?: string;
  emoji?: string; // fallback for dev/placeholder
  store: string;
  category: string;
  rating: number;
  reviewCount: number;
  badge?: "HOT" | "NEW" | "SALE";
  inStock: boolean;
  countryCode: string;
}

// ─── Search ────────────────────────────────────────────
export interface SearchResult {
  id: string;
  title: string;
  price: string; // pre-formatted: "PKR 4,20,000"
  emoji?: string;
  image?: string;
  href: string;
}

// ─── Cart ──────────────────────────────────────────────
export interface CartItem {
  id: string;
  productId: string;
  title: string;
  price: number;
  currency: "PKR" | "USD";
  quantity: number;
  image?: string;
  emoji?: string;
  variant?: string; // "512GB · Natural Titanium"
}

// ─── User ──────────────────────────────────────────────
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  initials: string; // "AK"
  isVerified: boolean;
}
