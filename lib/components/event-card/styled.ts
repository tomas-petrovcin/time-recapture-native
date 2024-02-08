import { VibrancyView } from '@fluentui-react-native/vibrancy-view';
import styled from 'styled-components/native';

export const Wrapper = styled(VibrancyView)`
  border-radius: ${({ theme }) => theme.radius.medium}px;
  min-width: 250px;
  flex: 0 auto;
  height: 100px;
  min-height: 100px;
  max-height: 100px;

  flex-direction: row;
  padding: ${({ theme }) => theme.spacing(2, 2)};
`;

export const Ribbon = styled.View<{ color: string }>`
  background-color: ${({ color }) => color};
  box-shadow: 0 2px 4px ${({ color }) => color + '80'};
  border-radius: 1px;
  max-width: 2px;
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.spacing(0.5, 2)};
`;
