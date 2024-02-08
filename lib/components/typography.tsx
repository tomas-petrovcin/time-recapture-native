import styled, { css } from 'styled-components/native';

import { Theme } from '@lib/utils';

export type TextVariant = 'title' | 'body' | 'label' | 'caption' | 'button';

type TypographyProps = {
  theme: Theme;
};

const Title = ({ theme }: TypographyProps) => css`
  font-family: ${theme.typography.family.primary.bold};
  font-size: ${theme.typography.size.title}px;
  color: ${theme.colors.text.main};
`;

const Body = ({ theme }: TypographyProps) => css`
  font-family: ${theme.typography.family.primary.regular};
  font-size: ${theme.typography.size.body}px;
  color: ${theme.colors.text.main};
`;

const Label = ({ theme }: TypographyProps) => css`
  font-family: ${theme.typography.family.primary.bold};
  font-size: ${theme.typography.size.label}px;
  color: ${theme.colors.text.label};
`;

const Caption = ({ theme }: TypographyProps) => css`
  font-family: ${theme.typography.family.primary.regular};
  font-size: ${theme.typography.size.caption}px;
  color: ${theme.colors.text.caption};
`;

const Button = ({ theme }: TypographyProps) => css`
  font-family: ${theme.typography.family.primary.medium};
  font-size: ${theme.typography.size.label}px;
  color: ${theme.colors.text.main};
`;

export const Text = styled.Text<{
  variant?: TextVariant;
  color?: keyof Theme['colors']['text'];
}>(
  ({ variant = 'body', theme: { colors }, color }) => css`
    ${variant === 'title' && Title};
    ${variant === 'body' && Body};
    ${variant === 'label' && Label};
    ${variant === 'caption' && Caption};
    ${variant === 'button' && Button};

    ${color && `color: ${colors.text[color]}`};
  `,
);
