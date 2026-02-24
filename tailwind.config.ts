import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';
import type { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ── Fonts ────────────────────────────────────────────────
      fontFamily: {
        display:   ['Playfair Display', 'Georgia', 'serif'],
        editorial: ['Cormorant Garamond', 'Georgia', 'serif'],
        body:      ['DM Sans', 'system-ui', 'sans-serif'],
        // kept for any legacy usage
        sans:      ['DM Sans', 'system-ui', 'sans-serif'],
      },

      // ── Brand Colors ─────────────────────────────────────────
      colors: {
        venturi: {
          slate:  '#4A5568',
          blue:   '#2D3748',
          coral:  '#F56565',
          orange: '#ED8936',
          cream:  '#FFF8F0',
          navy:   '#1A202C',
        },
        // Shadcn / CSS-variable driven tokens
        background:  'hsl(var(--background))',
        foreground:  'hsl(var(--foreground))',
        card: {
          DEFAULT:    'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT:    'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT:    'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT:    'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT:    'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT:    'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT:    'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input:  'hsl(var(--input))',
        ring:   'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },

      // ── Border Radius ────────────────────────────────────────
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      // ── Background Images ─────────────────────────────────────
      backgroundImage: {
        'gradient-radial':    'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'venturi-gradient':   'linear-gradient(135deg, var(--venturi-slate) 0%, var(--venturi-blue) 100%)',
        'warm-gradient':      'linear-gradient(135deg, var(--venturi-coral) 0%, var(--venturi-orange) 100%)',
        'hero-overlay-left':  'linear-gradient(to right, rgba(26,32,44,0.9) 0%, rgba(26,32,44,0.45) 55%, transparent 100%)',
        'hero-overlay-top':   'linear-gradient(to top, rgba(26,32,44,0.75) 0%, transparent 50%, rgba(26,32,44,0.3) 100%)',
      },

      // ── Keyframes ─────────────────────────────────────────────
      keyframes: {
        // Accordion (shadcn)
        'accordion-down': {
          from: { height: '0' },
          to:   { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to:   { height: '0' },
        },
        // Entrance animations
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-left': {
          '0%':   { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%':   { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'line-grow': {
          '0%':   { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        // Ambient / looping
        'float': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%':      { transform: 'translateY(-20px) scale(1.05)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'border-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(245,101,101,0.45)' },
          '50%':      { boxShadow: '0 0 0 10px rgba(245,101,101,0)' },
        },
        'scroll-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(8px)' },
        },
        'dot-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.4' },
        },
      },

      // ── Animation Utilities ───────────────────────────────────
      animation: {
        // Shadcn
        'accordion-down':  'accordion-down 0.2s ease-out',
        'accordion-up':    'accordion-up 0.2s ease-out',
        // Entrance — use with animation-delay-* via globals
        'fade-up':         'fade-up 0.9s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in':         'fade-in 0.9s ease both',
        'slide-in-left':   'slide-in-left 0.8s ease-out',
        'slide-in-right':  'slide-in-right 0.8s ease-out',
        'line-grow':       'line-grow 0.8s cubic-bezier(0.22,1,0.36,1) both',
        // Looping
        'float':           'float 8s ease-in-out infinite',
        'float-slow':      'float 11s ease-in-out infinite',
        'float-medium':    'float 9s ease-in-out infinite',
        'shimmer':         'shimmer 3s linear infinite',
        'border-pulse':    'border-pulse 2.5s ease-in-out infinite',
        'scroll-bounce':   'scroll-bounce 2s ease-in-out infinite',
        'dot-pulse':       'dot-pulse 2s ease-in-out infinite',
      },

      // ── Animation Delays ──────────────────────────────────────
      transitionDelay: {
        '0':    '0ms',
        '150':  '150ms',
        '300':  '300ms',
        '450':  '450ms',
        '600':  '600ms',
        '750':  '750ms',
        '900':  '900ms',
        '1100': '1100ms',
        '1300': '1300ms',
      },
    },
  },
  plugins: [
    animate,
    ({ matchUtilities, theme }: PluginAPI) => {
      matchUtilities(
        {
          'animation-delay': (value: string) => ({
            animationDelay: value,
          }),
        },
        { values: theme('transitionDelay') as Record<string, string> }
      );
    },
  ],
};

export default config;