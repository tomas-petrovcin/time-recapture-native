import { NativeModules } from 'react-native';
const { WindowManager } = NativeModules;

// WindowManager.makeTitlebarTransparent();
// WindowManager.makeBackgroundMovable();

export const MacOSWindowManager = {
  makeTitlebarTransparent: () => {
    console.log(WindowManager);
    WindowManager?.makeTitlebarTransparent();
  },
  makeBackgroundMovable: () => WindowManager?.makeBackgroundMovable(),
};
