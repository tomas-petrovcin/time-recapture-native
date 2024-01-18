import React from 'react';

import { Pressable } from 'react-native';

import { Shadow } from '../shadows';
import { Text } from '../typography.tsx';

import * as S from './styled';

type Props = {
  label: string;
  onPress: () => void;
};

export const Button = ({ onPress, label }: Props) => {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <Shadow pressed={pressed}>
          <S.Wrapper>
            <Text variant="button" textAlign="center">
              {label}
            </Text>
          </S.Wrapper>
        </Shadow>
      )}
    </Pressable>
  );
};
