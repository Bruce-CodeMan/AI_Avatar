/*
 * @Date: 2023-06-30 09:37:33
 * @Author: Bruce Hsu
 * @Description: 
 */
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["src/components/**/*.{ts,tsx}", "src/pages/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  // @ts-ignore
  plugins: [require("tailwindcss-animate")]
}