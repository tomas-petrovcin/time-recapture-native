import { useEffect } from 'react';

import {
  EmitterSubscription,
  NativeEventEmitter,
  NativeModules,
} from 'react-native';

import { logger } from '@lib/utils';

const KeyEvents = new NativeEventEmitter(NativeModules.KeyEventListener);

type Modifiers = {
  command: boolean;
  option: boolean;
  control: boolean;
  shift: boolean;
};

type NativeKeyEvent = {
  isARepeat: boolean;
  keyCode: number;
  modifierFlags: number;
};

export type KeyEvent = {
  isARepeat: boolean;
  keyCode: string | number;
  modifiers: Modifiers;
};

const convertNativeKeyEvent = (event: NativeKeyEvent): KeyEvent => {
  const { isARepeat, keyCode, modifierFlags } = event;

  const modifiers: Modifiers = {
    command: !!(modifierFlags & 8),
    option: !!(modifierFlags & 4),
    control: !!(modifierFlags & 2),
    shift: !!(modifierFlags & 1),
  };

  return {
    isARepeat,
    keyCode: keyCode.toString(16),

    modifiers,
  };
};

let listener: EmitterSubscription;

export const useKeyEventListener = (callback: (event: KeyEvent) => void) => {
  useEffect(() => {
    if (listener) {
      listener.remove();
      return;
    }

    logger.warn('Starting key event listener');
    NativeModules.WindowManager.startListeningForKeys();
    listener = KeyEvents.addListener('keyDown', (e: NativeKeyEvent) => {
      // logger.success(JSON.stringify(convertNativeKeyEvent(e)));
      callback(convertNativeKeyEvent(e));
    });

    // TODO: Stop listening
    return () => {
      logger.warn('Stopping key event listener');

      listener.remove();
    };
  }, [callback]);
};
