import type { Config } from 'tailwindcss';

export const themeColors = {
  'carbon-gray': '#262626',
  contrast: '#979797',
  disabled: '#BBBBBB',
  'dark-gray': '#1A1A1A',
  gray: '#4D4D4D',
  'hover-purple': '#E9D9FF',
  'light-gray': '#808080',
  'mutted-gray': '#7676801f',
  'off-gray': '#B3B3B3',
  purple: '#8D3FF2',
  primary: '#0D0D0D',
  secondary: '#474747',
  success: '#03A500',
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
        xs: '12.64px',
        sm: '14.22px',
        md: '16px',
        lg: '18px',
        xl: '20.25px',
        '2xl': '22.78px',
        '5xl': '32.44px',
      },
      lineHeight: {
        xs: '16px',
        sm: '20px',
        md: '24px',
        lg: '28px',
        xl: '30px',
        '2xl': '32px',
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
