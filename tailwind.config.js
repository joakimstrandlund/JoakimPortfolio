/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['var(--font-pramukh-rounded)', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['var(--font-pramukh-rounded)', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
        grotesk: ['var(--font-familjen-grotesk)', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      colors: {
        // BASE / BACKGROUNDS
        'primary-bg': '#1E1D22',
        'secondary-bg': '#242329',
        'tertiary-bg': '#2C2A30',

        // ACCENT / INTERACTIVE
        accent: '#FF6B2C',
        'accent-hover': '#E55A1F',
        'accent-soft': '#FF6B2C1A',

        // OSMO-INSPIRED COLORS
        purple: '#9333ea',
        'purple-hover': '#7e22ce',
        green: '#10b981',
        'green-hover': '#059669',

        // TEXT / TYPOGRAPHY
        heading: '#E6E6E8',
        body: '#BDBDC2',
        muted: '#9A9A9F',
        link: '#FF6B2C',
        'link-hover': '#E55A1F',

        // BORDERS / UI LINES
        border: '#35343A',
        'border-hover': '#404045',
        'focus-ring': '#FF6B2C',

        // INTERACTION STATES
        'button-bg': '#FF6B2C',
        'button-bg-hover': '#FF7E47',
        'button-text': '#FFFFFF',
        'button-outline': '#FF6B2C',
        'button-outline-hover': '#FF7E47',
        'card-hover-bg': '#2C2A30',
        'card-hover-border': '#3A383F',
      },
    },
  },
  plugins: [],
};
