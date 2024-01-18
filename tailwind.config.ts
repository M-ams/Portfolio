import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xs': {'min': '300px', 'max': '639px'},  // Extra small screens
        'sm': {'min': '640px', 'max': '767px'},  // Small screens
        'md': {'min': '768px', 'max': '1023px'}, // Medium screens
        'lg': {'min': '1024px', 'max': '1279px'}, // Large screens
        'xl': {'min': '1280px', 'max': '1535px'}, // Extra large screens
        '2xl': {'min': '1536px'}, // 2x large screens (no max-width)
      },
    },
  },
  plugins: [],
}

export default config
