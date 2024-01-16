import { AppRegistry } from 'react-native';

import { App } from './apps/time-recapture';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
