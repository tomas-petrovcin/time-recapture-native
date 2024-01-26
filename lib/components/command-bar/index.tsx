import React, { useState } from 'react';

import { revertFocus, useAppState } from '../../api/apollo';

import * as S from './styled';

export const CommandBar = () => {
  const onKeyDown = ({ nativeEvent }: IKeyboardEvent) => {
    const {
      capsLockKey = false,
      shiftKey = false,
      controlKey = false,
      optionKey = false,
      commandKey = false,
      numericPadKey = false,
      helpKey = false,
      functionKey = false,
      leftArrowKey = false,
      rightArrowKey = false,
      upArrowKey = false,
      downArrowKey = false,
      key = '',
    } = nativeEvent ?? {};

    console.log('key down', {
      capsLockKey,
      shiftKey,
      controlKey,
      optionKey,
      commandKey,
      numericPadKey,
      helpKey,
      functionKey,
      leftArrowKey,
      rightArrowKey,
      upArrowKey,
      downArrowKey,
      key,
    });
  };

  const [text, setText] = useState('');
  const { focus } = useAppState();

  const isFocused = focus === 'command-bar';

  if (!isFocused) {
    return null;
  }

  return (
    <S.Wrapper onPress={revertFocus}>
      <S.InputContainer>
        <S.Input
          placeholder="Create a new task.."
          autoFocus
          editable
          onChangeText={setText}
          value={text}
        />
      </S.InputContainer>
    </S.Wrapper>
  );
};
