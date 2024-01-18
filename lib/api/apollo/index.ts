import { makeVar, useReactiveVar } from '@apollo/client';

import { storage } from '@lib/utils';

const STORAGE_KEY = 'AppState';

export const AppState = makeVar<string[]>(FEATURED_CITIES);

export const useAppStateState = () => useReactiveVar(AppState);

export const resetAppState = () => {
  AppState([]);
  storage.save(STORAGE_KEY, []);
};

export const initAppState = async () => {
  const persistedState = (await Storage.get(STORAGE_KEY)) ?? [];
  AppState(persistedState);
};
