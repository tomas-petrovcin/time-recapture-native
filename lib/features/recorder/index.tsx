import React from 'react';

import { Pressable } from 'react-native';

import { Shadow, Text } from '@lib/components';

import * as S from './styled';

export const Recorder = () => {
  const onPress = () => {};
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <S.Container>
          <Shadow pressed={pressed} noOutline>
            <S.Wrapper>
              <S.Inner />
            </S.Wrapper>
          </Shadow>
          <Text variant="label" color="main">
            Record
          </Text>
        </S.Container>
      )}
    </Pressable>
  );
};
