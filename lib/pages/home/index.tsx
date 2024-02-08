import React from 'react';

import { CommandBar } from '@lib/components';
import { Timeline } from '@lib/features';

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
