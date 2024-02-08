import { AnimatedPressable, Text } from '@lib/components';
import { formatDate } from '@lib/utils';

import * as S from './styled';

type Event = {
  name: string;
  date: string;
  duration: number;
  color: string;
};

type Props = {
  event?: Event;
};

const TEST: Event = {
  name: 'Test',
  date: '2021-01-01',
  duration: 60,
  color: '#22FFFF',
};

export const EventCard = ({ event = TEST }: Props) => {
  return (
    <AnimatedPressable elevation={4}>
      <S.Wrapper material="popover" blendingMode="withinWindow" state="active">
        <S.Ribbon color={event.color} />
        <S.Content>
          <Text>{event.name}</Text>
          <Text>{formatDate(event.date)}</Text>
          <Text>{event.duration} minutes</Text>
        </S.Content>
      </S.Wrapper>
    </AnimatedPressable>
  );
};
