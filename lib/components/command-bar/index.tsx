import React, { useState } from 'react';

import { KeyboardEvent } from 'react-native-macos';

import { revertFocus, useAppState } from '../../api/apollo';

import * as S from './styled';

export const CommandBar = () => {
  const onKeyDown = ({ nativeEvent }: any) => {
    console.log('key down', nativeEvent);

    // console.log('key down', {
    //   capsLockKey,
    //   shiftKey,
    //   controlKey,
    //   optionKey,
    //   commandKey,
    //   numericPadKey,
    //   helpKey,
    //   functionKey,
    //   leftArrowKey,
    //   rightArrowKey,
    //   upArrowKey,
    //   downArrowKey,
    //   key,
    // });
  };

  const [text, setText] = useState('');
  const { focus } = useAppState();

  const isFocused = focus === 'command-bar';

  if (!isFocused) {
    return null;
  }

  return (
    <S.Wrapper onPress={revertFocus} allowsVibrancy>
      <S.Input
        placeholder="Create a new task.."
        autoFocus
        editable
        onChangeText={setText}
        onKeyPress={onKeyDown}
        onSubmitEditing={revertFocus}
        value={text}
      />
    </S.Wrapper>
  );
};
