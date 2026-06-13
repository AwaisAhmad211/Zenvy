import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--bg)",
          2: "var(--bg2)",
          3: "var(--bg3)",
        },
        surface: {
          DEFAULT: "var(--surface)",
          2: "var(--surface2)",
        },
        glass: {
          DEFAULT: "var(--glass)",
          2: "var(--glass2)",
        },
        border: {
          DEFAULT: "var(--border)",
          2: "var(--border2)",
        },
        brand: {
          DEFAULT: "var(--blue)",
          2: "var(--blue2)",
          glow: "var(--blue-glow)",
        },
        mid: "var(--mid)",
        light: "var(--light)",
        text: {
          DEFAULT: "var(--text)",
          2: "var(--text2)",
          3: "var(--text3)",
        },
        amber: {
          brand: "var(--amber)",
          glow: "var(--amber-glow)",
        },
        green: {
          brand: "var(--green)",
          glow: "var(--green-glow)",
        },
        red: {
          brand: "var(--red)",
          glow: "var(--red-glow)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        sm: "10px",
        DEFAULT: "16px",
        lg: "24px",
      },
      boxShadow: {
        card: "var(--shadow)",
        brand: "var(--shadow-blue)",
        dropdown: "0 12px 40px rgba(11,46,51,0.15)",
        focus: "0 0 0 3px var(--blue-glow)",
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
