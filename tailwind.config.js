/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff0f39', // Neon red/crimson
          dark: '#b30522',
          light: '#ff4d6d',
        },
        dark: {
          DEFAULT: '#050505', // Deep rich black
          card: '#121212',    // Sleek card background
          border: '#222222',  // Subtle dark border
          light: '#1a1a1a',   // Hover background
          gray: '#888888',    // Muted text
        },
        marvel: {
          gold: '#f0a500',
          blue: '#00d2ff',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 15px rgba(255, 15, 57, 0.45)',
        'glow-red-intense': '0 0 30px rgba(255, 15, 57, 0.75)',
        'glow-card': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
        'glow-border': 'inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
