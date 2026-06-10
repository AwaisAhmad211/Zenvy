"use client";

import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  type ReactNode,
} from "react";
import type { CartItem } from "@/types";

// ─── State ─────────────────────────────────────────────
interface CartState {
  items: CartItem[];
  count: number;       // total quantity
  subtotal: number;    // sum in PKR
}

// ─── Actions ───────────────────────────────────────────
type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }      // productId
  | { type: "UPDATE_QTY"; payload: { id: string; qty: number } }
  | { type: "CLEAR_CART" };

// ─── Reducer ───────────────────────────────────────────
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(
        (i) => i.productId === action.payload.productId
      );
      const items = existing
        ? state.items.map((i) =>
            i.productId === action.payload.productId
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        : [...state.items, { ...action.payload, quantity: 1 }];

      return {
        items,
        count: items.reduce((sum, i) => sum + i.quantity, 0),
        subtotal: items.reduce((sum, i) => sum + i.price * i.quantity, 0),
      };
    }

    case "REMOVE_ITEM": {
      const items = state.items.filter((i) => i.productId !== action.payload);
      return {
        items,
        count: items.reduce((sum, i) => sum + i.quantity, 0),
        subtotal: items.reduce((sum, i) => sum + i.price * i.quantity, 0),
      };
    }

    case "UPDATE_QTY": {
      const items = state.items.map((i) =>
        i.id === action.payload.id
          ? { ...i, quantity: Math.max(1, action.payload.qty) }
          : i
      );
      return {
        items,
        count: items.reduce((sum, i) => sum + i.quantity, 0),
        subtotal: items.reduce((sum, i) => sum + i.price * i.quantity, 0),
      };
    }

    case "CLEAR_CART":
      return { items: [], count: 0, subtotal: 0 };

    default:
      return state;
  }
}

// ─── Context ───────────────────────────────────────────
interface CartContextValue extends CartState {
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

// ─── Provider ──────────────────────────────────────────
export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    count: 0,
    subtotal: 0,
  });

  const addItem = useCallback(
    (item: CartItem) => dispatch({ type: "ADD_ITEM", payload: item }),
    []
  );
  const removeItem = useCallback(
    (productId: string) => dispatch({ type: "REMOVE_ITEM", payload: productId }),
    []
  );
  const updateQty = useCallback(
    (id: string, qty: number) =>
      dispatch({ type: "UPDATE_QTY", payload: { id, qty } }),
    []
  );
  const clearCart = useCallback(() => dispatch({ type: "CLEAR_CART" }), []);

  return (
    <CartContext.Provider
      value={{ ...state, addItem, removeItem, updateQty, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// ─── Hook ──────────────────────────────────────────────
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
