import styled from 'styled-components/native';

import { spacing } from '@lib/utils';

export const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  padding: ${spacing(4)} ${spacing(4)};
  gap: ${spacing(4)};
  background: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.radius.large}px;
`;

export const Drawer = styled.View`
  flex: 1;
`;

export const ControlPanel = styled.View`
  padding: ${spacing(4)};
  gap: ${spacing(4)};
  align-items: center;
`;
