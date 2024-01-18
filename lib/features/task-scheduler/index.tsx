import React, { useEffect } from 'react';

import { Button, Text } from '@lib/components';

import { MacOSWindowManager } from '../../modules/window-manager';

import * as S from './styled';

export const TaskScheduler = () => {
  useEffect(() => {
    MacOSWindowManager.applyStyles();
  }, []);

  const createTask = () => {};

  return (
    <S.Wrapper>
      <S.Header>
        <Text variant="title">Tasks</Text>
        <Button label="Create" onPress={createTask} />
      </S.Header>
    </S.Wrapper>
  );
};
