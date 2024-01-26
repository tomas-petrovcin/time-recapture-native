import React from 'react';

import { useTheme } from 'styled-components';

import * as S from './styled';

type Props = {
  selectedColor: string;
  onSelect: (color: string) => void;
};

export const ColorPicker = ({ selectedColor, onSelect }: Props) => {
  const { colors } = useTheme();
  return (
    <S.Wrapper>
      {Object.values(colors.userPalette).map(color => (
        <S.ColorSample
          color={color}
          key={color}
          selected={selectedColor === color}
          onPress={onSelect}
        />
      ))}
    </S.Wrapper>
  );
};
