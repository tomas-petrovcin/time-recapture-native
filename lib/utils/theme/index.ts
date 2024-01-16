export const theme = {
  spacingBase: 8,
  spacing: (scale: number) => `${scale * theme.spacingBase}px`,

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
