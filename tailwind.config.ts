import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-plus)', 'system-ui', 'sans-serif'],
      },
      colors: {
        foundry: {
          base: '#1A0533',
          section: '#2D0F5E',
          deep: '#120428',
        },
        accent: '#00D4FF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        glow: '0 0 40px rgba(0, 212, 255, 0.15)',
        card: '0 20px 50px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
}
export default config
