import { css, styled } from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Input = styled.TextInput(
  ({ theme }) => css`
    padding: ${theme.spacing(2)};
    background: ${theme.colors.accent.dark};
  `,
);
