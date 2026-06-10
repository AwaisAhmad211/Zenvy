"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDebounce } from "@/hooks/use-debounce";
import type { SearchResult } from "@/types";

// ── Mock data — replace with apiClient.get('/search?q='+q) ──
const MOCK_RESULTS: SearchResult[] = [
  { id: "1", title: "iPhone 15 Pro Max", price: "PKR 4,20,000", emoji: "📱", href: "/product/iphone-15-pro-max" },
  { id: "2", title: "MacBook Air M3", price: "PKR 3,80,000", emoji: "💻", href: "/product/macbook-air-m3" },
  { id: "3", title: "Nike Air Jordan 1", price: "PKR 28,500", emoji: "👟", href: "/product/nike-air-jordan-1" },
  { id: "4", title: "AirPods Pro 2", price: "PKR 72,000", emoji: "🎧", href: "/product/airpods-pro-2" },
];

export function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const debouncedQuery = useDebounce(query, 300);

  // ── Fetch results when debounced query changes ──
  useEffect(() => {
    if (debouncedQuery.trim().length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    setIsLoading(true);

    // TODO: Replace with real API call
    // apiClient.get(`/products/search?q=${debouncedQuery}`)
    const filtered = MOCK_RESULTS.filter((r) =>
      r.title.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
    setTimeout(() => {
      setResults(filtered);
      setIsOpen(true);
      setIsLoading(false);
    }, 200);
  }, [debouncedQuery]);

  // ── Close on outside click ──
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    setIsOpen(false);
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  }

  function handleSelect(href: string) {
    setIsOpen(false);
    setQuery("");
    router.push(href);
  }

  function handleClear() {
    setQuery("");
    setResults([]);
    setIsOpen(false);
    inputRef.current?.focus();
  }

  return (
    <div ref={containerRef} className="relative flex-1 max-w-[480px]">
      <form onSubmit={handleSubmit}>
        {/* Input */}
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-3 pointer-events-none"
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => results.length > 0 && setIsOpen(true)}
            placeholder="Search products, stores, brands…"
            className={cn(
              "w-full py-2.5 pl-10 pr-9",
              "bg-[rgba(11,46,51,0.08)] border border-[rgba(11,46,51,0.11)]",
              "rounded-xl text-sm text-text font-body placeholder:text-text-3",
              "outline-none transition-all duration-200",
              "focus:border-brand focus:bg-white focus:shadow-[0_0_0_3px_rgba(11,46,51,0.15)]"
            )}
          />
          {/* Clear button */}
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-3 hover:text-text transition-colors"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </form>

      {/* Dropdown */}
      {isOpen && (
        <div
          className={cn(
            "absolute top-[calc(100%+8px)] left-0 right-0 z-50",
            "bg-white border border-[rgba(11,46,51,0.20)] rounded-2xl overflow-hidden",
            "shadow-dropdown",
            "animate-in fade-in-0 slide-in-from-top-2 duration-200"
          )}
        >
          {isLoading ? (
            <div className="flex items-center gap-3 px-4 py-3 text-sm text-text-3">
              <div className="w-4 h-4 border-2 border-[rgba(11,46,51,0.11)] border-t-brand rounded-full animate-spin" />
              Searching…
            </div>
          ) : results.length > 0 ? (
            <>
              {results.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.href)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3",
                    "hover:bg-[rgba(11,46,51,0.08)] transition-colors text-left"
                  )}
                >
                  <div className="w-10 h-10 bg-surface-2 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {item.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text truncate">{item.title}</p>
                    <p className="text-xs text-brand font-semibold mt-0.5">{item.price}</p>
                  </div>
                </button>
              ))}
              {/* See all results */}
              <button
                onClick={() => handleSelect(`/search?q=${encodeURIComponent(query)}`)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3",
                  "border-t border-[rgba(11,46,51,0.11)]",
                  "hover:bg-[rgba(11,46,51,0.08)] transition-colors text-left"
                )}
              >
                <div className="w-10 h-10 bg-surface-2 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Search size={16} className="text-text-3" />
                </div>
                <p className="text-sm font-semibold text-brand">
                  See all results for "{query}" →
                </p>
              </button>
            </>
          ) : (
            <div className="px-4 py-3 text-sm text-text-3">
              No results for "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}
