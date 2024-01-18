import React from 'react';

import { Pressable } from 'react-native-macos';

import { Shadow } from '../shadows';
import { Text } from '../typography.tsx';

import * as S from './styled';

type Props = {
  label: string;
  onPress: () => void;
};

/*
todo:
- onHoverIn / onHoverOut + Reanimated
- loading
- shortcuts display
 */

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
