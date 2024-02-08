import { ReactNode } from 'react';

import { VibrancyView } from '@fluentui-react-native/vibrancy-view';

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <VibrancyView
      style={{ flex: 1, borderRadius: 12 }}
      material="fullScreenUI"
      blendingMode="behindWindow"
      state="active">
      {children}
    </VibrancyView>
  );
};
