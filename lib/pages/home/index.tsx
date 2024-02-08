import React, { useEffect } from 'react';

import { VibrancyView } from '@fluentui-react-native/vibrancy-view';

import { CommandBar } from '@lib/components';
import { Timeline, useGlobalShortcuts } from '@lib/features';

import { initAppState } from '../../api/apollo';
import { TaskScheduler } from '../../features/task-scheduler';

import * as S from './styled';

export const Home = () => {
  return (
    <S.Wrapper>
      <TaskScheduler />
      <S.Drawer>
        <Timeline />
      </S.Drawer>
      <CommandBar />
    </S.Wrapper>
  );
};
