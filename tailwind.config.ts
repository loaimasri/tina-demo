import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    spacing: {
      "3xs": "0.188rem",
      "2xs": "0.375rem",
      xs: "0.5rem",
      sm: "0.75rem",
      md: "1rem",
      lg: "1.125rem",
      "2xl": "1.25rem",
      "3xl": "1.5rem",
      "4xl": "1.75rem",
      "5xl": "2rem",
      "6xl": "2.375rem",
    },
    fontSize: {
      h1: "var(--font-size-h1)",
      h2: "var(--font-size-h2)",
      h3: "var(--font-size-h3)",
      h4: "var(--font-size-h4)",
      h5: "var(--font-size-h5)",
      title1: "var(--font-size-t1)",
      title2: "var(--font-size-t2)",
      body1: "var(--font-size-b1)",
      body2: "var(--font-size-b2)",
    },
    fontWeight: {
      bold: "var(--font-weight-bold)",
      medium: "var(--font-weight-medium)",
      regular: "var(--font-weight-regular)",
      light: "var(--font-weight-light)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: {
            DEFAULT: "hsl(var(--primary-light))",
            hover: "hsl(var(--primary-light-hover))",
            active: "hsl(var(--primary-light-active))",
          },
          normal: {
            DEFAULT: "hsl(var(--primary-normal))",
            hover: "hsl(var(--primary-normal-hover))",
            active: "hsl(var(--primary-normal-active))",
          },
          dark: {
            DEFAULT: "hsl(var(--primary-dark))",
            hover: "hsl(var(--primary-dark-hover))",
            active: "hsl(var(--primary-dark-active))",
          },
          darker: "hsl(var(--primary-darker))",
        },
        dark: {
          light: {
            DEFAULT: "hsl(var(--dark-light))",
            hover: "hsl(var(--dark-light-hover))",
            active: "hsl(var(--dark-light-active))",
          },
          normal: {
            DEFAULT: "hsl(var(--dark-normal))",
            hover: "hsl(var(--dark-normal-hover))",
            active: "hsl(var(--dark-normal-active))",
          },
          dark: {
            DEFAULT: "hsl(var(--dark-dark))",
            hover: "hsl(var(--dark-dark-hover))",
            active: "hsl(var(--dark-dark-active))",
          },
          darker: "hsl(var(--dark-darker))",
        },
        correct: {
          light: {
            DEFAULT: "hsl(var(--correct-light))",
            hover: "hsl(var(--correct-light-hover))",
            active: "hsl(var(--correct-light-active))",
          },
          normal: {
            DEFAULT: "hsl(var(--correct-normal))",
            hover: "hsl(var(--correct-normal-hover))",
            active: "hsl(var(--correct-normal-active))",
          },
          dark: {
            DEFAULT: "hsl(var(--correct-dark))",
            hover: "hsl(var(--correct-dark-hover))",
            active: "hsl(var(--correct-dark-active))",
          },
          darker: "hsl(var(--correct-darker))",
        },
        warning: {
          light: {
            DEFAULT: "hsl(var(--warning-light))",
            hover: "hsl(var(--warning-light-hover))",
            active: "hsl(var(--warning-light-active))",
          },
          normal: {
            DEFAULT: "hsl(var(--warning-normal))",
            hover: "hsl(var(--warning-normal-hover))",
            active: "hsl(var(--warning-normal-active))",
          },
          dark: {
            DEFAULT: "hsl(var(--warning-dark))",
            hover: "hsl(var(--warning-dark-hover))",
            active: "hsl(var(--warning-dark-active))",
          },
          darker: "hsl(var(--warning-darker))",
        },
        error: {
          light: {
            DEFAULT: "hsl(var(--error-light))",
            hover: "hsl(var(--error-light-hover))",
            active: "hsl(var(--error-light-active))",
          },
          normal: {
            DEFAULT: "hsl(var(--error-normal))",
            hover: "hsl(var(--error-normal-hover))",
            active: "hsl(var(--error-normal-active))",
          },
          dark: {
            DEFAULT: "hsl(var(--error-dark))",
            hover: "hsl(var(--error-dark-hover))",
            active: "hsl(var(--error-dark-active))",
          },
          darker: "hsl(var(--error-darker))",
        },

        gray: {
          light: {
            DEFAULT: "hsl(var(--gray-light))",
            hover: "hsl(var(--gray-light-hover))",
            active: "hsl(var(--gray-light-active))",
          },
          normal: {
            DEFAULT: "hsl(var(--gray-normal))",
            hover: "hsl(var(--gray-normal-hover))",
            active: "hsl(var(--gray-normal-active))",
          },
          dark: {
            DEFAULT: "hsl(var(--gray-dark))",
            hover: "hsl(var(--gray-dark-hover))",
            active: "hsl(var(--gray-dark-active))",
          },
          darker: "hsl(var(--gray-darker))",
        },
        text: {
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
          brand: "hsl(var(--text-brand))",
          disable: {
            DEFAULT: "hsl(var(--text-disable))",
            darker: "hsl(var(--text-disable-darker))",
          },
          error: "hsl(var(--text-error))",
          warning: "hsl(var(--text-warning))",
          correct: "hsl(var(--text-correct))",
        },
        surface: {
          primary: "hsl(var(--surface-primary))",
          secondary: "hsl(var(--surface-secondary))",
          invert: "hsl(var(--surface-invert))",
          disable: {
            DEFAULT: "hsl(var(--surface-disable))",
            darker: "hsl(var(--surface-disable-darker))",
          },
          brand: {
            DEFAULT: "hsl(var(--surface-brand))",
            light: "hsl(var(--surface-brand-light))",
            hover: "hsl(var(--surface-brand-hover))",
            active: "hsl(var(--surface-brand-active))",
          },
          table: {
            header: "hsl(var(--surface-table-header))",
          },
          background: "hsl(var(--surface-background))",
          icon: "hsl(var(--surface-icon))",
          selected: {
            DEFAULT: "hsl(var(--surface-selected))",
            light: "hsl(var(--surface-selected-light))",
          },
          error: "hsl(var(--surface-error))",
          warning: "hsl(var(--surface-warning))",
          correct: "hsl(var(--surface-correct))",
        },
        border: {
          primary: "hsl(var(--border-primary))",
          secondary: {
            DEFAULT: "hsl(var(--border-secondary))",
            dark: "hsl(var(--border-secondary-dark))",
          },
          brand: "hsl(var(--border-brand))",
          icon: "hsl(var(--border-icon))",
          input: {
            stroke: "hsl(var(--border-input-stroke))",
          },
          selected: {
            DEFAULT: "hsl(var(--border-selected))",
            light: "hsl(var(--border-selected-light))",
          },
          error: "hsl(var(--border-error))",
          warning: "hsl(var(--border-warning))",
          correct: "hsl(var(--border-correct))",
        },
      },
      borderRadius: {
        "3xs": "var(--radius-3xs)",
        "2xs": "var(--radius-2xs)",
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        "2xl": "var(--radius-2xl)",
        "3xl": "var(--radius-3xl)",
        "4xl": "var(--radius-4xl)",
        "5xl": "var(--radius-5xl)",
        "6xl": "var(--radius-6xl)",
        circle: "var(--radius-circle)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
