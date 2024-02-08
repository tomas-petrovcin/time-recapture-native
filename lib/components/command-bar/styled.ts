import { VibrancyView } from '@fluentui-react-native/vibrancy-view';
import { css, styled } from 'styled-components/native';

import { spacing } from '@lib/utils';

export const Wrapper = styled.Pressable`
  flex: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  align-items: center;
  padding-top: 100px;
`;

export const Container = styled(VibrancyView)`
  flex: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.98;
`;

export const Input = styled.TextInput(
  ({ theme }) => css`
    flex: 0 auto;
    width: 400px;

    padding: ${spacing(1)} ${spacing(2)};

    border-radius: ${theme.radius.small}px;

    font-size: ${theme.typography.size.headline}px;
  `,
);
