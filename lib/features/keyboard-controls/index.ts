import { logger } from '@lib/utils';

import { focus, revertFocus } from '../../api/apollo';
import {
  useKeyEventListener,
  KeyEvent,
} from '../../modules/key-event-listener';

export const useGlobalShortcuts = () => {
  const onKeyEvent = (e: KeyEvent) => {
    logger.info('modifiers', e.modifiers);
    logger.success(e.keyCode);

    const { command } = e.modifiers;

    // cmd + k
    if (command && e.keyCode === '28') {
      logger.success('focus cmd');
      focus('command-bar');
    }

    // escape
    if (e.keyCode === '35') {
      revertFocus();
    }
  };

  useKeyEventListener(onKeyEvent);
};
