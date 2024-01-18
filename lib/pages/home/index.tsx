import React from 'react';

import { Button } from '@lib/components';
import { Timeline } from '@lib/features';

import { Recorder } from '../../features/recorder';
import { TaskScheduler } from '../../features/task-scheduler';

import * as S from './styled';

export const Home = () => {
  return (
    <S.Wrapper>
      <TaskScheduler />
      <S.ControlPanel>
        <Recorder />
        <Button label="Create" />
        <Button label="Analytics" />
      </S.ControlPanel>
      <S.Drawer>
        <Timeline />
      </S.Drawer>
    </S.Wrapper>
  );
};
