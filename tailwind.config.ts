import type { Config } from 'tailwindcss';

export const themeColors = {
  gray: '#4D4D4D',
  'light-gray': '#808080',
  'carbon-gray': '#262626',
  'off-gray': '#B3B3B3',
  'mutted-gray': '#7676801f',
  'carbon-black': '#0D0D0D',
  purple: '#8D3FF2',
  'hover-purple': '#E9D9FF',
  'success-green': '#03A500',
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: themeColors,
    },
    screens: {
      tablet: { max: '640px' },
      midDevice: { min: '641px', max: '1023px' },
      laptop: { min: '1024px', max: '1279px' },
      desktop: { min: '1280px' },
    },
  },
  plugins: [],
};
export default config;
