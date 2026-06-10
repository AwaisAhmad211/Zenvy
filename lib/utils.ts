import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format price with commas: 420000 → "4,20,000"
export function formatPKR(amount: number): string {
  return "PKR " + amount.toLocaleString("en-PK");
}

export function formatUSD(amount: number): string {
  return "$" + amount.toLocaleString("en-US");
}
