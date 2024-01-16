import 'react-native-gesture-handler';
import React from 'react';

import { ThemeProvider } from 'styled-components';

import { Timeline } from '@lib/features';
import { theme } from '@lib/utils';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Timeline />
    </ThemeProvider>
  );
};
