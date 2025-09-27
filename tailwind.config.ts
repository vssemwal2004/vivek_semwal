import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        
        /* Cosmic Color System */
        space: {
          deep: "hsl(var(--space-deep))",
          medium: "hsl(var(--space-medium))", 
          surface: "hsl(var(--space-surface))",
        },
        purple: {
          neon: "hsl(var(--purple-neon))",
          electric: "hsl(var(--purple-electric))",
          cosmic: "hsl(var(--purple-cosmic))",
          dark: "hsl(var(--purple-dark))",
        },
        cyan: {
          bright: "hsl(var(--cyan-bright))",
          electric: "hsl(var(--cyan-electric))",
          glow: "hsl(var(--cyan-glow))",
        },
        hologram: {
          1: "hsl(var(--hologram-1))",
          2: "hsl(var(--hologram-2))",
          3: "hsl(var(--hologram-3))",
        },
        lens: {
          flare1: "hsl(var(--lens-flare-1))",
          flare2: "hsl(var(--lens-flare-2))",
          flare3: "hsl(var(--lens-flare-3))",
        },
        particle: {
          white: "hsl(var(--particle-white))",
          purple: "hsl(var(--particle-purple))",
          cyan: "hsl(var(--particle-cyan))",
        },
        beam: {
          core: "hsl(var(--beam-core))",
          glow: "hsl(var(--beam-glow))",
          outer: "hsl(var(--beam-outer))",
        },
        glass: {
          bg: "hsl(var(--glass-bg))",
          border: "hsl(var(--glass-border))",
        },
        
        /* Standard Theme Colors */
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
      },
      
      /* Cosmic Gradients */
      backgroundImage: {
        'cosmic-radial': 'radial-gradient(ellipse at center, hsl(var(--space-medium)) 0%, hsl(var(--space-deep)) 100%)',
        'laser-beam': 'linear-gradient(45deg, hsl(var(--purple-neon)), hsl(var(--cyan-bright)))',
        'hologram': 'linear-gradient(45deg, hsl(var(--hologram-1)), hsl(var(--hologram-2)), hsl(var(--hologram-3)))',
        'glass-effect': 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.05))',
        'energy-pulse': 'radial-gradient(circle, hsl(var(--purple-neon)), hsl(var(--purple-electric)), transparent)',
      },
      
      /* Advanced Animations */
      animation: {
        'starfield': 'starfield-twinkle 3s ease-in-out infinite',
        'hologram': 'hologram-shift 4s ease-in-out infinite',
        'laser-beam': 'laser-beam 2s ease-in-out infinite',
        'cosmic-rotate': 'cosmic-rotate 20s linear infinite',
        'energy-pulse': 'energy-pulse 2s ease-in-out infinite',
        'particle-fade': 'particle-fade 1s ease-out forwards',
        'lens-flare': 'lens-flare-pulse 2s ease-in-out infinite',
        'fog-drift': 'fog-drift 20s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 2s ease-in-out infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      
      /* 3D Transform Utilities */
      transform: {
        '3d': 'preserve-3d',
      },
      
      /* Custom Shadows */
      boxShadow: {
        'cosmic': '0 0 20px hsl(var(--purple-neon) / 0.3), 0 0 40px hsl(var(--purple-neon) / 0.1)',
        'laser': '0 0 30px hsl(var(--cyan-bright) / 0.4), 0 0 60px hsl(var(--cyan-bright) / 0.2)',
        'hologram': '0 8px 32px rgba(139, 92, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'energy': '0 0 40px hsl(var(--purple-neon) / 0.6), 0 0 80px hsl(var(--cyan-bright) / 0.3)',
      },
      keyframes: {
        /* Cosmic Keyframes */
        "starfield-twinkle": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" }
        },
        "hologram-shift": {
          "0%, 100%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" }
        },
        "laser-beam": {
          "0%": { transform: "translateX(-100%) scaleX(0)" },
          "50%": { transform: "translateX(0%) scaleX(1)" },
          "100%": { transform: "translateX(100%) scaleX(0)" }
        },
        "cosmic-rotate": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" }
        },
        "energy-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--purple-neon) / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--purple-neon) / 0.6), 0 0 80px hsl(var(--cyan-bright) / 0.3)" }
        },
        "particle-fade": {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.3)" }
        },
        "lens-flare-pulse": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.2)" }
        },
        "fog-drift": {
          "0%": { transform: "translateX(-50%) translateY(-50%) rotate(0deg)" },
          "100%": { transform: "translateX(-50%) translateY(-50%) rotate(360deg)" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" }
        },
        /* Standard Keyframes */
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
