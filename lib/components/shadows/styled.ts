import { styled, css } from 'styled-components/native';

export const Reflection = styled.View<{ pressed: boolean }>`
  border-radius: 30px;
  box-shadow: 0 -1px 0.4px #aaa;
  shadow-opacity: ${({ pressed }) => (pressed ? 0 : 1)};
`;

export const Shadow = styled.View<{ pressed: boolean }>(
  ({ pressed, theme }) => css`
    box-shadow: 0 2px 2px #000;
    shadow-opacity: ${pressed ? 0 : 1};
    ${pressed &&
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
