import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // Divine Color Palette
            colors: {
                saffron: {
                    DEFAULT: '#FF6B35',
                    light: '#FF8C61',
                    dark: '#E85A2A',
                },
                gold: {
                    DEFAULT: '#D4AF37',
                    light: '#E8C547',
                },
                'deep-red': {
                    DEFAULT: '#8B0000',
                    light: '#A52A2A',
                },
                cream: '#FFF8F0',
                'light-orange': '#FFF5EB',
                'text-dark': '#2C2C2C',
                'text-gray': '#555555',
                'text-light': '#777777',
            },

            // Custom Gradients
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #FF6B35 0%, #D4AF37 100%)',
                'gradient-secondary': 'linear-gradient(135deg, #8B0000 0%, #FF6B35 100%)',
                'gradient-divine': 'linear-gradient(135deg, #FF6B35 0%, #D4AF37 50%, #FF6B35 100%)',
                'gradient-overlay': 'linear-gradient(135deg, rgba(139, 0, 0, 0.75), rgba(255, 107, 53, 0.65))',
            },

            // Custom Spacing (matching existing design)
            spacing: {
                'xs': '0.5rem',
                'sm': '0.75rem',
                'md': '1rem',
                'lg': '1.5rem',
                'xl': '2rem',
                '2xl': '3rem',
                '3xl': '4rem',
            },

            // Border Radius
            borderRadius: {
                'sm': '6px',
                'md': '10px',
                'lg': '14px',
                'xl': '20px',
                'full': '50%',
            },

            // Box Shadows - Divine
            boxShadow: {
                'sm': '0 1px 3px rgba(0, 0, 0, 0.08)',
                'md': '0 4px 12px rgba(0, 0, 0, 0.1)',
                'lg': '0 8px 24px rgba(0, 0, 0, 0.12)',
                'divine': '0 8px 32px rgba(212, 175, 55, 0.25)',
                'divine-lg': '0 20px 60px rgba(139, 0, 0, 0.2), 0 0 40px rgba(255, 153, 51, 0.15)',
                'divine-xl': '0 30px 80px rgba(139, 0, 0, 0.4), 0 0 60px rgba(255, 140, 0, 0.3)',
            },

            // Font Families
            fontFamily: {
                'devanagari': ['Tiro Devanagari Hindi', 'serif'],
                'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
                'playfair': ['Playfair Display', 'serif'],
            },

            // Custom Animations
            animation: {
                'float': 'float 20s ease-in-out infinite',
                'pulse-slow': 'pulse 3s ease-in-out infinite',
                'pulse-divine': 'pulse 5s ease-in-out infinite',
                'fadeInDown': 'fadeInDown 1.2s ease-out',
                'fadeInUp': 'fadeInUp 1.4s ease-out',
                'fadeInLeft': 'fadeInLeft 1s ease-out',
                'fadeInRight': 'fadeInRight 1s ease-out',
                'gentleFloat': 'gentleFloat 6s ease-in-out infinite',
                'sparkle': 'sparkle 2s ease-in-out infinite',
                'floatParticle': 'floatParticle 20s infinite ease-in-out',
            },

            // Keyframes
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
                    '33%': { transform: 'translate(30px, -30px) rotate(5deg)' },
                    '66%': { transform: 'translate(-20px, 20px) rotate(-5deg)' },
                },
                fadeInDown: {
                    'from': { opacity: '0', transform: 'translateY(-30px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInUp: {
                    'from': { opacity: '0', transform: 'translateY(30px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInLeft: {
                    'from': { opacity: '0', transform: 'translateX(-30px)' },
                    'to': { opacity: '1', transform: 'translateX(0)' },
                },
                fadeInRight: {
                    'from': { opacity: '0', transform: 'translateX(30px)' },
                    'to': { opacity: '1', transform: 'translateX(0)' },
                },
                gentleFloat: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-5px)' },
                },
                sparkle: {
                    '0%, 100%': { opacity: '0.6' },
                    '50%': { opacity: '1' },
                },
                floatParticle: {
                    '0%, 100%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.3' },
                    '25%': { transform: 'translateY(-20px) rotate(5deg)', opacity: '0.5' },
                    '50%': { transform: 'translateY(-40px) rotate(-5deg)', opacity: '0.4' },
                    '75%': { transform: 'translateY(-20px) rotate(3deg)', opacity: '0.5' },
                },
            },

            // Transition Duration
            transitionDuration: {
                'fast': '150ms',
                'normal': '250ms',
                'slow': '400ms',
            },

            // Backdrop Blur
            backdropBlur: {
                'divine': '25px',
            },
        },
    },
    plugins: [],
};

export default config;
