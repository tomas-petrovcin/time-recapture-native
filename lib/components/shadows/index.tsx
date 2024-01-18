import React, { type ReactNode } from 'react';

import * as S from './styled.ts';
type Props = {
  children: ReactNode;
  pressed?: boolean;
};

export const Shadow = ({ children, pressed }: Props) => {
  return (
    <S.Shadow pressed={pressed}>
      <S.Reflection pressed={pressed}>{children}</S.Reflection>
    </S.Shadow>
  );
};

export const InnerShadow = ({ children }: Props) => {
  return (
    <S.InnerShadow>
      <S.InnerReflection>{children}</S.InnerReflection>
    </S.InnerShadow>
  );
};
