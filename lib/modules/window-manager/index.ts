import { NativeModules } from 'react-native';
const { WindowManager } = NativeModules;

// WindowManager.makeTitlebarTransparent();
// WindowManager.makeBackgroundMovable();

export const MacOSWindowManager = {
  applyStyles: () => WindowManager?.applyStyles(),
};
