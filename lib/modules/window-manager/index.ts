import { NativeModules } from 'react-native';
const { WindowManager } = NativeModules;

type MacOSWindowParams = {
  isMovableByWindowBackground: boolean;
  titlebarAppearsTransparent: boolean;
  isOpaque: boolean;
  backgroundColor: string;
};

const defaultStyles = {
  isMovableByWindowBackground: true,
  titlebarAppearsTransparent: true,
  isOpaque: false,
  backgroundColor: '#ffffff00',
};

export const MacOSWindowManager = {
  applyStyles: (params?: MacOSWindowParams) =>
    WindowManager?.applyStyles({ ...defaultStyles, ...params }),
};
