import { styled, css } from 'styled-components/native';

export type StyleProps = {
  pressed?: boolean;
  noOutline?: boolean;
};

export const Reflection = styled.View<{ pressed: boolean }>`
  border-radius: 30px;
  box-shadow: 0 -1px 0.4px #aaa;
  shadow-opacity: ${({ pressed }) => (pressed ? 0.3 : 1)};
`;

export const Shadow = styled.View<StyleProps>(
  ({ pressed, theme, noOutline }) => css`
    box-shadow: 0 2px 2px #000;
    shadow-opacity: ${pressed ? 0.3 : 1};
    border: 1px solid transparent;
    ${pressed &&
    !noOutline &&
    css`
      border: 1px solid #333;
      border-radius: ${theme.radius.medium}px;
    `}
  `,
);

export const InnerShadow = styled.View`
  flex: 1;
  border-radius: 30px;

  border-top: 4px solid #000000;
`;

export const InnerReflection = styled.View`
  flex: 1;
  border-radius: 30px;

  box-shadow: 0 2px 1px #818181;
`;
