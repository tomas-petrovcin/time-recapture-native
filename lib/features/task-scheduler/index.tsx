import React from 'react';

import { Button, Text } from '@lib/components';

import { MacOSWindowManager } from '../../modules/window-manager';

import * as S from './styled';

export const TaskScheduler = () => {
  const createTask = () => {
    MacOSWindowManager.makeTitlebarTransparent();
    MacOSWindowManager.makeBackgroundMovable();
  };

  return (
    <S.Wrapper>
      <S.Header>
        <Text variant="title">Tasks</Text>
        <Button label="Create" onPress={createTask} />
      </S.Header>
    </S.Wrapper>
  );
};
