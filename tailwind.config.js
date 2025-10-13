/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['var(--font-spicy-rice)', 'cursive', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['var(--font-spicy-rice)', 'cursive', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
        grotesk: ['var(--font-familjen-grotesk)', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#202024',
        secondary: '#1e1e1e',
        tertiary: '#121417',
        headings: '#f5f5f5',
        headings2: '#ffffff',
        body: '#b0b0b0',
        body2: '#cccccc',
        accent: '#ffe07d',
        hover: '#ffda4b',
        accent2: '#6a2b89',
        stroke: '#404040',
        stroke2: '#505050',
        tagBg: '#3a3200',
        tagText: '#ffe07d',
        link: '#ffe07d',
      },
    },
  },
  plugins: [],
};
