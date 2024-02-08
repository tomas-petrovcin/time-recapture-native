import React from 'react';

import { Button, EventCard, Text } from '@lib/components';

import { focus } from '../../api/apollo';

import * as S from './styled';

export const TaskScheduler = () => {
  const createTask = () => {
    focus('command-bar');
  };

  return (
    <S.Wrapper>
      <S.Header>
        <Text variant="title">Tasks</Text>
        <S.ControlPanel>
          <Button label="Create" onPress={createTask} />
          <Button label="Analytics" onPress={() => null} />
        </S.ControlPanel>
      </S.Header>
      <S.List>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </S.List>
    </S.Wrapper>
  );
};
