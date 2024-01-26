import 'react-native-gesture-handler';
import React, { useEffect } from 'react';

import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import { Home } from '@lib/pages';
import { theme } from '@lib/utils';

import { apolloClient } from '../../lib/api/apollo/client.ts';
import { MacOSWindowManager } from '../../lib/modules/window-manager';

export const App = () => {
  useEffect(() => {
    // transparent window, hidden title bar
    // todo: create javascript api to control
    MacOSWindowManager.applyStyles();
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </ApolloProvider>
  );
};
