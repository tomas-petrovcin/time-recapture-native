import React, { useState } from 'react';

import { revertFocus, useAppState } from '../../api/apollo';

import * as S from './styled';

export const CommandBar = () => {
  const [text, setText] = useState('');
  const { focus } = useAppState();

  const isFocused = focus === 'command-bar';

  if (!isFocused) {
    return null;
  }

  return (
    <S.Container material="popover" state="active" blendingMode="withinWindow">
      <S.Wrapper onPress={revertFocus}>
        <S.Input
          placeholder="Create a new task.."
          placeholderTextColor="#999"
          autoFocus
          // @ts-ignore
          enableFocusRing={false}
          editable
          onChangeText={setText}
          onSubmitEditing={revertFocus}
          value={text}
        />
      </S.Wrapper>
    </S.Container>
  );
};
