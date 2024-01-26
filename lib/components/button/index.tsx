import React from 'react';

import { Pressable, PressableProps } from 'react-native-macos';
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { AnimatedShadow } from '../shadows';
import { Text } from '../typography.tsx';

import * as S from './styled';

/*
todo:
- onHoverIn / onHoverOut + Reanimated
- loading
- shortcuts display
 */

const ReAnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const AnimatedPressable = (props: PressableProps) => {
  const scale = useSharedValue(0);
  const onHoverIn = () => {
    scale.value = withTiming(2, {
      easing: Easing.inOut(Easing.ease),
      duration: 100,
    });
  };

  const onHoverOut = () => {
    scale.value = withTiming(1, {
      easing: Easing.inOut(Easing.ease),
      duration: 300,
    });
  };

  const onPressIn = () => {
    scale.value = withTiming(0.1, {
      easing: Easing.inOut(Easing.ease),
      duration: 40,
    });
  };

  const onPressOut = () => {
    scale.value = withTiming(1, {
      easing: Easing.inOut(Easing.ease),
      duration: 200,
    });
    props.onPress?.();
  };

  return (
    <ReAnimatedPressable
      {...{
        onHoverIn,
        onHoverOut,
        onPressIn,
        onPressOut,
      }}>
      <AnimatedShadow elevation={scale}>{props.children}</AnimatedShadow>
    </ReAnimatedPressable>
  );
};

export const Button = ({ onPress, label }: Props) => {
  return (
    <AnimatedPressable label={label} onPress={onPress}>
      <S.Wrapper>
        <Text variant="button" textAlign="center">
          {label}
        </Text>
      </S.Wrapper>
    </AnimatedPressable>
  );
};
