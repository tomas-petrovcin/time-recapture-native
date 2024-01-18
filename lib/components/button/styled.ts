import { css } from 'styled-components';
import { styled } from 'styled-components/native';

export const Wrapper = styled.View(
  ({ theme }) => css`
    flex: 0 auto;
    border-radius: ${theme.radius.medium}px;
    background: ${theme.colors.background.dark};
    padding: ${theme.spacing(1)} ${theme.spacing(2)};
  `,
);
