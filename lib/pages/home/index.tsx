import React from 'react';

import { Button, CommandBar } from '@lib/components';
import { Timeline } from '@lib/features';

import { focus } from '../../api/apollo';
import { Recorder } from '../../features/recorder';
import { TaskScheduler } from '../../features/task-scheduler';

import * as S from './styled';

export const Home = () => {
  const onCreate = () => {
    focus('command-bar');
  };

  return (
    <S.Wrapper allowsVibrancy>
      <TaskScheduler />
      <S.ControlPanel>
        <Recorder />
        <Button label="Create" onPress={onCreate} />
        <Button label="Analytics" />
      </S.ControlPanel>
      <S.Drawer>
        <Timeline />
      </S.Drawer>
      <CommandBar />
    </S.Wrapper>
  );
};
