import { css, styled } from 'styled-components/native';

import { spacing } from '@lib/utils';

export const Wrapper = styled.Pressable`
  flex: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: ${({ theme }) => theme.colors.background.darkTransparent};

  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.View(
  ({ theme }) => css`
    padding: ${spacing(1)} ${spacing(2)};
    background: ${theme.colors.accent.dark};
    border-radius: ${theme.radius.medium}px;
    box-shadow: ${theme.shadow.medium};
    shadow-color: ${theme.colors.accent.dark};
    padding-top: ${spacing(2)};
  `,
);

export const Input = styled.TextInput(
  ({ theme }) => css`
    flex: 0 auto;
    width: 400px;

    font-family: ${theme.typography.family.primary.semiBold};
    font-size: ${theme.typography.size.headline}px;
  `,
);
