
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				romantic: {
					pink: 'hsl(var(--romantic-pink))',
					rose: 'hsl(var(--romantic-rose))',
					gold: 'hsl(var(--romantic-gold))',
					coral: 'hsl(var(--romantic-coral))',
					lavender: 'hsl(var(--romantic-lavender))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'dancing': ['Dancing Script', 'Brush Script MT', 'Lucida Handwriting', 'cursive', 'serif'],
				'kaushan': ['Kaushan Script', 'Dancing Script', 'Brush Script MT', 'cursive', 'serif'],
				'caveat': ['Caveat', 'Comic Sans MS', 'Marker Felt', 'cursive', 'sans-serif']
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-20px) rotate(5deg)' },
					'66%': { transform: 'translateY(-10px) rotate(-5deg)' }
				},
				'heartbeat': {
					'0%, 50%, 100%': { transform: 'scale(1)' },
					'25%, 75%': { transform: 'scale(1.1)' }
				},
				'fadeInUp': {
					'from': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'to': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'heartbeat': 'heartbeat 2s ease-in-out infinite',
				'fadeInUp': 'fadeInUp 1s ease-out',
				'shimmer': 'shimmer 2s infinite'
			},
			backgroundImage: {
				'romantic-gradient': 'linear-gradient(135deg, hsl(var(--romantic-pink)) 0%, hsl(var(--romantic-coral)) 25%, hsl(var(--romantic-gold)) 50%, hsl(var(--romantic-rose)) 75%, hsl(var(--romantic-lavender)) 100%)',
				'sunset-gradient': 'linear-gradient(180deg, #FFB6C1 0%, #FFA07A 25%, #FFD700 50%, #FF69B4 75%, #DDA0DD 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
