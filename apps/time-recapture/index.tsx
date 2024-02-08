import 'react-native-gesture-handler';
import React, { useEffect } from 'react';

import { NativeModules } from 'react-native';

import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import { useGlobalShortcuts } from '@lib/features';
import { Home } from '@lib/pages';
import { theme } from '@lib/utils';

import { initAppState } from '../../lib/api/apollo';
import { apolloClient } from '../../lib/api/apollo/client.ts';
import { MainLayout } from '../../lib/pages/layouts/main';

export const App = () => {
  useGlobalShortcuts();

  useEffect(() => {
    initAppState();
    NativeModules.WindowManager.applyStyles();
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Home />
        </MainLayout>
      </ThemeProvider>
    </ApolloProvider>
  );
};
