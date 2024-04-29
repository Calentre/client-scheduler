import type { Config } from 'tailwindcss';

export const themeColors = {
  disabled: '#BBBBBB',
  gray: '#4D4D4D',
  'light-gray': '#808080',
  'carbon-gray': '#262626',
  'dark-gray': '#1A1A1A',
  'off-gray': '#B3B3B3',
  'mutted-gray': '#7676801f',
  primary: '#0D0D0D',
  secondary: '#474747',
  purple: '#8D3FF2',
  'hover-purple': '#E9D9FF',
  'success-green': '#03A500',
  'surface-primary': '#FFFFFF',
  'surface-secondary': '#D8D8D8',
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
      padding: {
        sm: '8px',
        'sm-1': '16px',
      },
      borderRadius: {
        minimal: '4px',
      },
      fontSize: {
        sm: '14.22px',
        md: '16px',
        '2xl': '22.78px',
        '5xl': '32.44px',
      },
      lineHeight: {
        sm: '20px',
        md: '24px',
        '2xl': '38px',
        '5xl': '44px',
      },
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
