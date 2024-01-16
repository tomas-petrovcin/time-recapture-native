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
`;

export const CurrentTimeMarker = styled(Marker)`
  background: ${({ theme }) => theme.colors.accent.light};
  flex: 1;
`;

export const TextInput = styled.TextInput`
  font-size: 18px;
  font-weight: bold;
  padding: 0 ${spacing(1)};
  font-family: ${({ theme }) => theme.typography.family.primary.light};
  color: ${({ theme }) => theme.colors.text.main};
`;
