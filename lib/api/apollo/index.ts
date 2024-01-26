import { makeVar, useReactiveVar } from '@apollo/client';

import { storage } from '@lib/utils';

const STORAGE_KEY = 'AppState';

export type Focus = 'command-bar' | 'session' | 'tasks';

export const AppState = makeVar<{
  currentSession: Session;

  focus: Focus;
  previousFocus: Focus;
}>({
  currentSession: null,

  focus: 'session',
  previousFocus: null,
});

export const useAppState = () => useReactiveVar(AppState);

export const resetAppState = () => {
  AppState({});
  storage.save(STORAGE_KEY, []);
};

export const initAppState = async () => {
  const persistedState = (await Storage.get(STORAGE_KEY)) ?? [];
  AppState(persistedState);
};

export const focus = (f: Focus) => {
  if (f === AppState().focus) return;
  const state = AppState();
  AppState({
    ...state,
    focus: f,
    previousFocus: state.focus,
  });
};

export const revertFocus = () => {
  const { previousFocus } = AppState();
  focus(previousFocus);
};
