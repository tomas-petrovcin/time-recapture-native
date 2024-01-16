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

  spacingBase: 8,
  spacing: (scale: number) => `${scale * theme.spacingBase}px`,

  typography: {
    size: {
      caption: 12,
      label: 14,
      body: 16,
      headline: 20,
      title: 24,
      display: 32,
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
    background: {
      light: '#bababa',
      dark: '#212121',
      paper: '#313131',
    },
    divider: {
      main: '#e8e8e8',
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
