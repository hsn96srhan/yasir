/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A1128',
          DEFAULT: '#0A1128',
        },
        primary: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
        },
        whatsapp: '#25D366',
        surface: '#F8FAFC',
        borderSubtle: '#E2E8F0',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans Arabic"', 'Cairo', 'system-ui', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
      },
      aspectRatio: {
        '4/3': '4 / 3',
        'square': '1 / 1',
      }
    },
  },
  plugins: [],
}