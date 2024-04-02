import { MappedScheduleItem } from '@/types/meetings';
import { useEffect } from 'react';
import { useSchedulerContext } from './useSchedulerContext';

export const useSetEvent = (
  eventName: string,
  schedules: MappedScheduleItem[]
) => {
  const { availableEvents, setAvailableSchedules, setSelectedEvent } =
    useSchedulerContext();

  useEffect(() => {
    const selectedEvent = availableEvents.find(
      (event) => event.appendedUrlName === eventName
    );
    selectedEvent && setSelectedEvent(selectedEvent);

    setAvailableSchedules(schedules);
  }, [
    schedules,
    setAvailableSchedules,
    eventName,
    availableEvents,
    setSelectedEvent,
  ]);

  const selectedEvent = availableEvents.find(
    (event) => event.appendedUrlName === eventName
  );

  return selectedEvent;
};
