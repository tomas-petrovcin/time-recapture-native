import { makeVar, useReactiveVar } from '@apollo/client';

import { storage } from '@lib/utils';

const STORAGE_KEY = 'AppState';

export type Focus = 'command-bar' | 'session' | 'tasks' | null;

const INITIAL_STATE = {
  currentSession: null,
  username: null,

  focus: 'session' as Focus,
  previousFocus: null,
};

export const AppState = makeVar<{
  currentSession: Session;

  focus: Focus;
  previousFocus: Focus;
}>(INITIAL_STATE);

export const useAppState = () => useReactiveVar(AppState);

export const resetAppState = () => {
  AppState(INITIAL_STATE);
  storage.save(STORAGE_KEY, []);
};

export const initAppState = async () => {
  const persistedState = (await storage.get(STORAGE_KEY)) ?? INITIAL_STATE;
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

export const setAppState = (state: Partial<typeof INITIAL_STATE>) => {
  AppState({ ...AppState(), ...state });
  storage.save(STORAGE_KEY, AppState());
};
