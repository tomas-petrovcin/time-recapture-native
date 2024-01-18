import { styled } from 'styled-components/native';

import { spacing } from '@lib/utils';

export const Wrapper = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${spacing(1)};
  gap: ${spacing(4)};
`;
