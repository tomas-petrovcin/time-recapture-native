import React, { useEffect } from 'react';

import { ViewProps } from 'react-native';

import Animated, {
  type SharedValue,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { format } from 'date-fns';

import { Slider, InnerShadow } from '@lib/components';

import * as S from './styled';

Animated.addWhitelistedNativeProps({ text: true });

const AnimatedTextInput = Animated.createAnimatedComponent(S.TextInput);

const getTimeOffset = (layoutHeight: string, date: string) => {
  'worklet';
  const [hours = 0, minutes = 0] = date.split(':').map(Number);

  const hourHeight = layoutHeight / 24;
  const minuteHeight = hourHeight / 60;
  return hourHeight * hours + minuteHeight * minutes;
};

// 25 Markers for each hour in day
const HourlyMarkers = Array.from({ length: 25 }, (_, i) => i).map(hour => (
  <S.MarkerWrapper key={hour}>
    <S.TimeLabel variant="caption">{hour}</S.TimeLabel>
    <S.Marker />
  </S.MarkerWrapper>
));

const CurrentTime = ({
  layoutHeight,
}: {
  layoutHeight: SharedValue<number>;
}) => {
  const value = useSharedValue('');

  const animatedProps = useAnimatedProps(() => ({
    text: value.value,
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      value.value = format(new Date(), 'HH:mm:ss');
    }, 400);

    return () => clearInterval(interval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY:
          getTimeOffset(layoutHeight.value, value.value) -
          S.CURRENT_TIME_MARKER_HEIGHT / 2,
      },
    ],
    opacity: value.value ? 1 : 0,
  }));

  return (
    <S.CurrentTime style={animatedStyle}>
      <AnimatedTextInput animatedProps={animatedProps} />
      <S.CurrentTimeMarker />
    </S.CurrentTime>
  );
};

export const Timeline = () => {
  const layoutHeight = useSharedValue(0);

  const onLayout: ViewProps['onLayout'] = event => {
    const { height } = event.nativeEvent.layout;
    layoutHeight.value = height;
  };

  return (
    <>
      <S.Wrapper>
        <S.Timeline onLayout={onLayout}>
          <S.LayoutContainer>{HourlyMarkers}</S.LayoutContainer>
          <CurrentTime layoutHeight={layoutHeight} />
        </S.Timeline>
      </S.Wrapper>
      <Slider />
    </>
  );
};
