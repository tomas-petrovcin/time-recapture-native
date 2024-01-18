import { styled } from 'styled-components/native';

import { spacing } from '@lib/utils';

export const Container = styled.View`
  gap: ${spacing(1)};
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow.small};
`;

export const Wrapper = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  padding: 4px;
  background: ${({ theme }) => theme.colors.background.light};
`;

export const Inner = styled.View`
  flex: 1;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.danger.dark};
  border: 2px solid ${({ theme }) => theme.colors.danger.light};
`;
