import Animated from 'react-native-reanimated';

import styled from 'styled-components/native';

import { spacing } from '@lib/utils';

export const Wrapper = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background.dark};
`;

export const MarkerWrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  margin: 0 ${spacing(20)};

  justify-content: space-between;
`;

export const Marker = styled.View`
  height: 1px;
  display: flex;
  background: ${({ theme }) => theme.colors.divider.secondary};
`;

export const CurrentTime = styled(Animated.View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${spacing(2)};

  padding: ${spacing(1)} ${spacing(2)};
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
