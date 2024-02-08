const formatSize = (size: number) => `${size}px`;

export const theme = {
  radius: {
    small: 4,
    medium: 12,
    large: 24,
    extraLarge: 32,
  },

  shadow: {
    small: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    medium: '0px 4px 8px rgba(0, 0, 0, 0.25)',
    large: '0px 8px 16px rgba(0, 0, 0, 0.25)',
  },

  spacingBase: 6,
  spacing: (...scale: number[]) => {
    return scale.map(v => formatSize(v * theme.spacingBase)).join(' ');
  },

  typography: {
    size: {
      caption: 12,
      label: 14,
      body: 16,
      headline: 20,
      title: 24,
      display: 28,
    },

    family: {
      primary: {
        regular: 'FiraCode-Regular',
        light: 'FiraCode-Light',
        medium: 'FiraCode-Medium',
        bold: 'FiraCode-Bold',
        semiBold: 'FiraCode-SemiBold',
      },
    },
  },

  colors: {
    userPalette: {
      red: '#e55406',
      orange: '#e86a26',
      yellow: '#e8b726',
      green: '#4caf50',
      blue: '#4777e5',
      purple: '#9c27b0',
      pink: '#e91e63',
      brown: '#795548',
      grey: '#9e9e9e',
    },

    background: {
      light: '#bababa44',
      lightTransparent: '#bababa44',
      button: '#4a4a4a22',
      dark: '#21212144',
      darkTransparent: '#21212144',
      paper: '#616161ee',
    },
    divider: {
      main: '#e8e8e888',
      secondary: '#e8e8e844',
      alt: '#313131',
    },
    text: {
      main: '#c7c7c7',
      alt: '#313131',

      caption: '#bababa',
      label: '#868686',
      secondary: '#484848',
    },
    primary: {
      light: '#4777e5',
      dark: '#1150e6',
    },
    accent: {
      light: '#e86a26',
      dark: '#e55406',
    },
    success: {
      light: '#4caf50',
      dark: '#388e3c',
    },
    danger: {
      light: '#f44336',
      dark: '#d32f2f',
    },
  },
} as const;

const light = {
  colors: {
    background: {
      light: 'white',
      dark: '#c7c7c7',
      paper: 'white',
    },
    divider: {
      main: '#e8e8e8',
      alt: '#313131',
    },
    text: {
      main: '#c7c7c7',
      alt: '#313131',

      caption: '#bababa',
      label: '#868686',
      secondary: '#484848',
    },
    primary: {
      light: '#4777e5',
      dark: '#1150e6',
    },
    accent: {
      light: '#e86a26',
      dark: '#e55406',
    },
  },
} as const;

export type Theme = typeof theme;
export * from './helpers';
