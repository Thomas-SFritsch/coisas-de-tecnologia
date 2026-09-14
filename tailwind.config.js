/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1120",
        deep: "#0F172A",
        "tech-blue": "#2563EB",
        "violet-marca": "#8B5CF6",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Montserrat", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 2px 0 rgba(11, 17, 32, 0.06), 0 1px 3px 0 rgba(11, 17, 32, 0.08)",
        lift: "0 10px 30px -12px rgba(79, 70, 229, 0.35)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(120deg, #2563EB 0%, #4F46E5 45%, #8B5CF6 100%)",
      },
    },
  },
  plugins: [],
};