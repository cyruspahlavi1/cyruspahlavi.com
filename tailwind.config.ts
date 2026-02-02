import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        gold: 'hsl(var(--gold))',
        'gold-light': 'hsl(var(--gold-light))',
        'gold-dark': 'hsl(var(--gold-dark))',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 40px rgba(0,0,0,0.35)',
        glow: '0 0 30px rgba(201, 162, 39, 0.25)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 20% 10%, rgba(201, 162, 39, 0.12), transparent 45%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.04), transparent 40%)',
        'hero-wash': 'radial-gradient(ellipse at top, rgba(26, 27, 40, 0.8) 0%, rgba(10, 11, 16, 1) 50%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 4px)',
        sm: 'calc(var(--radius) - 8px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
