import 'react-native-gesture-handler';
import React, { useEffect } from 'react';

import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components';

import { useGlobalShortcuts } from '@lib/features';
import { Home } from '@lib/pages';
import { theme } from '@lib/utils';

import { initAppState } from '../../lib/api/apollo';
import { apolloClient } from '../../lib/api/apollo/client.ts';
import { MacOSWindowManager } from '../../lib/modules/window-manager';
import { MainLayout } from '../../lib/pages/layouts/main';

const Stack = createStackNavigator();

export const App = () => {
  useGlobalShortcuts();

  useEffect(() => {
    initAppState();
    MacOSWindowManager.applyStyles();
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                cardStyle: { backgroundColor: 'transparent' },
              }}>
              <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
          </NavigationContainer>
        </MainLayout>
      </ThemeProvider>
    </ApolloProvider>
  );
};
