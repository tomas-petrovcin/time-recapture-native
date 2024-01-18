import 'react-native-gesture-handler';
import React from 'react';

import { ThemeProvider } from 'styled-components';

import { Home } from '@lib/pages';
import { theme } from '@lib/utils';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};
