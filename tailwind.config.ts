import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Design System: Clean Light Coastal Palette ──
        bg: {
          DEFAULT: "#ffffff",
          2: "#f4f9fa",
          3: "#e6f2f4",
        },
        surface: {
          DEFAULT: "#ffffff",
          2: "#edf5f7",
        },
        brand: {
          DEFAULT: "#0B2E33",
          2: "#0d3b42",
        },
        mid: "#93B1B5",
        light: "#ADD8E6",
        text: {
          DEFAULT: "#0B2E33",
          2: "#4a6e72",
          3: "#898989",
        },
        amber: {
          brand: "#D97706",
        },
        green: {
          brand: "#059669",
        },
        red: {
          brand: "#DC2626",
        },
      },
      fontFamily: {
        display: ["var(--font-clash)", "sans-serif"],
        body: ["var(--font-cabinet)", "sans-serif"],
      },
      borderRadius: {
        sm: "10px",
        DEFAULT: "16px",
        lg: "24px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(11,46,51,0.10)",
        brand: "0 6px 24px rgba(11,46,51,0.18)",
        dropdown: "0 12px 40px rgba(11,46,51,0.15)",
      },
      backdropBlur: {
        navbar: "20px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      maxWidth: {
        container: "1300px",
      },
      height: {
        navbar: "64px",
      },
    },
  },
  plugins: [],
};

export default config;
