import Animated from 'react-native-reanimated';

import styled from 'styled-components/native';

import { Text } from '@lib/components';
import { spacing } from '@lib/utils';

export const Wrapper = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background.dark};
  border-radius: ${({ theme }) => theme.radius.large}px;
  padding: ${spacing(4)} 0;
  overflow: hidden;
`;

export const Timeline = styled.View`
  flex: 1;
`;

export const LayoutContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  padding-left: ${spacing(24)};

  justify-content: space-between;
`;

export const MarkerWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${spacing(2)};
  position: relative;
`;

export const TimeLabel = styled(Text)`
  position: absolute;
  top: -7px;
  left: 0;
  text-align: right;
  width: 20px;
  font-size: 12px;
  height: 12px;
`;

export const Marker = styled.View`
  height: 1px;
  flex: 1;
  display: flex;
  margin-left: 28px;
  background: ${({ theme }) => theme.colors.divider.secondary};
`;

export const CURRENT_TIME_MARKER_HEIGHT = 48;

export const CurrentTime = styled(Animated.View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${spacing(2)};

  padding: 0 ${spacing(2)};
  height: ${CURRENT_TIME_MARKER_HEIGHT}px;
  backdrop-filter: blur(100px);
  background: ${({ theme }) => theme.colors.background.lightTransparent};
`;

export const CurrentTimeMarker = styled(Marker)`
  background: ${({ theme }) => theme.colors.accent.light};
  height: 2px;
  flex: 1;
`;

export const TextInput = styled.TextInput`
  font-size: 18px;
  line-height: 15px;
  padding: 0 ${spacing(1)};

  font-family: 'Fira Code';
  font-weight: 500;

  color: ${({ theme }) => theme.colors.text.main};
  padding: ${spacing(1)} ${spacing(2)};
  border: 2px solid ${({ theme }) => theme.colors.accent.light};
  border-radius: ${({ theme }) => theme.radius.small}px;
  box-shadow: ${({ theme }) => theme.shadow.large};
`;
