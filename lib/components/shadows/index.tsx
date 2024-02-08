import React, { type ReactNode } from 'react';

import Animated, {
  type SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import * as S from './styled.ts';
type Props = {
  children: ReactNode;
} & S.StyleProps;

export const Shadow = ({ children, pressed, ...props }: Props) => {
  return (
    <S.Shadow pressed={pressed} {...props}>
      <S.Reflection pressed={pressed}>{children}</S.Reflection>
    </S.Shadow>
  );
};

export const InnerShadow = ({ children }: Props) => {
  return (
    <S.InnerShadow>
      <S.InnerReflection>{children}</S.InnerReflection>
    </S.InnerShadow>
  );
};

type AnimatedShadowProps = {
  children: ReactNode;
  elevation: SharedValue<number>;
} & S.StyleProps;

export const AnimatedShadow = ({
  children,
  elevation,
}: AnimatedShadowProps) => {
  const shadowStyle = useAnimatedStyle(() => ({
    borderRadius: 30,
    shadowRadius: elevation.value,
    shadowColor: 'black',
    shadowOpacity: Math.min(elevation.value * 0.2, 0.4),
    shadowOffset: {
      width: 0,
      height: elevation.value * 2,
    },
  }));

  const reflectionStyle = useAnimatedStyle(() => ({
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowRadius: 0.2,
    shadowColor: 'white',
    shadowOpacity: Math.min(0.1 * elevation.value, 0.2),
  }));

  return (
    <Animated.View style={shadowStyle}>
      <Animated.View style={reflectionStyle}>{children}</Animated.View>
    </Animated.View>
  );
};
