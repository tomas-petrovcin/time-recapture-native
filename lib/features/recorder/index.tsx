import React from 'react';

import { AnimatedPressable, Shadow, Text } from '@lib/components';

import * as S from './styled';

export const Recorder = () => {
  const onPress = () => {};
  return (
    <>
      <AnimatedPressable onPress={onPress}>
        <S.Container>
          <Shadow noOutline>
            <S.Wrapper>
              <S.Inner />
            </S.Wrapper>
          </Shadow>
        </S.Container>
      </AnimatedPressable>
      <Text variant="label" color="main">
        Record
      </Text>
    </>
  );
};
