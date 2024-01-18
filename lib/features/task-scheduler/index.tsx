import React, { useEffect } from 'react';

import { Button, Text } from '@lib/components';

import { MacOSWindowManager } from '../../modules/window-manager';

import * as S from './styled';

export const TaskScheduler = () => {
  const createTask = () => {};

  return (
    <S.Wrapper>
      <S.Header>
        <Text variant="title">Tasks</Text>
      </S.Header>
    </S.Wrapper>
  );
};
