import styled from 'styled-components/native';

import { spacing } from '@lib/utils';

export const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  padding: ${spacing(4)} ${spacing(4)};
  gap: ${spacing(4)};
  border-radius: ${({ theme }) => theme.radius.large}px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export const Drawer = styled.View`
  flex: 1;
  max-width: 200px;
`;
