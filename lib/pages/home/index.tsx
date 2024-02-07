import React, { useEffect, useRef } from 'react';

import {
  TextInput,
  NativeEventEmitter,
  NativeModules,
} from 'react-native-macos';

import { VibrancyView } from '@fluentui-react-native/vibrancy-view';

import { Button, CommandBar } from '@lib/components';
import { Timeline } from '@lib/features';

import { focus } from '../../api/apollo';
import { Recorder } from '../../features/recorder';
import { TaskScheduler } from '../../features/task-scheduler';

import * as S from './styled';

// @ts-ignore
console.reportErrorsAsExceptions = false;

const KeyEvents = new NativeEventEmitter(NativeModules.KeyEventListener);

// KeyEvents.addListener('keyDown', data => console.log(data));

export const Home = () => {
  const onCreate = () => {
    focus('command-bar');
  };

  const onKeyDown = ({ nativeEvent }: any) => {
    console.log('key down', nativeEvent);
  };

  const ref = useRef<TextInput>();

  useEffect(() => {
    // ref.current?.focus();
    KeyEvents.addListener('keyDown', data => console.log(data));
    NativeModules.WindowManager.startListeningForKeys();
  }, []);
  /*export type Material =
  | 'titlebar'
  | 'selection'
  | 'menu'
  | 'popover'
  | 'sidebar'
  | 'headerview'
  | 'sheet'
  | 'windowbackground'
  | 'hudWindow'
  | 'fullScreenUI'
  | 'toolTip'
  | 'contentBackground'
  | 'underWindowBackground'
  | 'underPageBackground';

export type BlendingMode = 'behindWindow' | 'withinWindow';

export type State = 'followsWindowActiveState' | 'active' | 'inactive';

export interface VibrancyViewProps extends IViewProps {
  material?: Material;
  blendingMode?: BlendingMode;
  state?: State;
}
*/

  return (
    <VibrancyView style={{ flex: 1 }} material="windowbackground">
      <S.Wrapper>
        <TextInput
          validKeysUp={[
            'ArrowUp',
            'ArrowDown',
            'ArrowLeft',
            'ArrowRight',
            'Enter',
            'Escape',
            'Tab',
            'Backspace',
            'Delete',
            'Home',
            'End',
            'Control',
            'Shift',
            'Option',
            'CapsLock',
          ]}
          validKeysDown={[
            'ArrowUp',
            'ArrowDown',
            'ArrowLeft',
            'ArrowRight',
            'Enter',
            'Escape',
            'Tab',
            'Backspace',
            'Delete',
            'Home',
            'End',
            'Control',
            'Shift',
            'Option',
            'CapsLock',
          ]}
          onKeyUp={onKeyDown}
          onKeyDown={onKeyDown}
          onKeyPress={onKeyDown}
          ref={ref}
        />
        <TaskScheduler />
        <S.ControlPanel>
          <Recorder />
          <Button label="Create" onPress={onCreate} />
          <Button label="Analytics" onPress={() => null} />
        </S.ControlPanel>
        <S.Drawer>
          <Timeline />
        </S.Drawer>
        <CommandBar />
      </S.Wrapper>
    </VibrancyView>
  );
};
