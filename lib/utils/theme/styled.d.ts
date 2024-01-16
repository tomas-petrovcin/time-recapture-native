import { Theme } from './index';

import 'styled-components/native';
import 'styled-components';

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
