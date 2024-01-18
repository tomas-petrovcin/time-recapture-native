import styled from 'styled-components/native';

import { spacing } from '@lib/utils';

export const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  padding: ${spacing(4)} ${spacing(4)};
  gap: ${spacing(4)};
`;

export const Drawer = styled.View`
  flex: 1;
`;
