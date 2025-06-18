import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Paleta Bóris - versão sólida/sem degradê
        // primary: {
        //   DEFAULT: "#FF6B00", // Accent Bóris
        //   foreground: "#FFFFFF",
        // },
        // secondary: {
        //   DEFAULT: "#F7F7F7", // Fundo secundário
        //   foreground: "#222222",
        // },
        // background: {
        //   DEFAULT: "#FFFFFF", // Fundo primário
        //   secondary: "#F7F7F7", // Fundo secundário
        // },
        // text: {
        //   DEFAULT: "#222222", // Texto principal
        // },
        // border: "#E5E5E5", // Divisores
        // input: "#E5E5E5",
        // ring: "#FF6B00",
        // foreground: "#222222",
        // muted: {
        //   DEFAULT: "#F7F7F7",
        //   foreground: "#666666",
        // },
        // accent: {
        //   DEFAULT: "#FF6B00",
        //   foreground: "#FFFFFF",
        // },
        // alert: "#FFF4CC", // Alerta neutro
        // card: {
        //   DEFAULT: "#FFFFFF",
        //   foreground: "#222222",
        // },
        // popover: {
        //   DEFAULT: "#FFFFFF",
        //   foreground: "#222222",
        // },
        // destructive: {
        //   DEFAULT: "#dc2626",
        //   foreground: "#FFFFFF",
        // },
        // "primary-hover": "#FFA552", // Accent Hover
        "action-green": "#22C55E", // Verde para botões de ação
        "action-green-hover": "#16A34A", // Verde hover para botões de ação
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "hero-desktop": ["40px", { lineHeight: "120%", letterSpacing: "-2%" }],
        "hero-mobile": ["28px", { lineHeight: "120%", letterSpacing: "-2%" }],
        "body-desktop": ["18px", { lineHeight: "150%" }],
        "body-mobile": ["16px", { lineHeight: "150%" }],
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(0, 0, 0, 0.04)",
        card: "0 4px 6px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
