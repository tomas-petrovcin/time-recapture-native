import { styled } from 'styled-components/native';

import { spacing } from '@lib/utils';

export const Wrapper = styled.View`
  flex: 1;
  gap: ${spacing(2)};
`;

export const List = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;

  gap: ${spacing(4)};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${spacing(4)};
`;

export const ControlPanel = styled.View`
  padding: ${spacing(1, 0)};
  gap: ${spacing(4)};
  align-items: center;
  flex-direction: row;
`;
