'use client';
import { useSetEvent } from '@/hooks/useSetEvent';
import { MappedScheduleItem } from '@/types/meetings';
import { EventDetails } from '../EventDetails';
import { Four04 } from '../common/404';
import { DateDetails } from './DateDetails';

interface Props {
  schedules: MappedScheduleItem[];
  eventName: string;
}

export const Scheduler = ({ schedules, eventName }: Props) => {
  const selectedEvent = useSetEvent(eventName, schedules);

  if (!selectedEvent) {
    return <Four04 />;
  }
  return (
    <EventDetails event={selectedEvent}>
      <DateDetails />
    </EventDetails>
  );
};
