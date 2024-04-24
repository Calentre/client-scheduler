import {
  SchedulerContext,
  TimeFormatType,
} from '@/providers/SchedulerProvider';
import { EventItem, MappedScheduleItem, ScheduleItem } from '@/types/meetings';
import { useCallback, useContext } from 'react';

export const useSchedulerContext = () => {
  const { schedulerState, dispatch, ...rest } = useContext(SchedulerContext);

  const setSelectedEvent = useCallback(
    (event: EventItem) => {
      dispatch({ type: 'SET_SELECTED_EVENT', event });
    },
    [dispatch]
  );

  const clearselectedEvent = () => {
    dispatch({ type: 'CLEAR_SELECTED_EVENT' });
  };

  const setSelectedSchedule = (schedule: ScheduleItem | undefined) => {
    dispatch({ type: 'SET_SELECTED_SCHEDULE', schedule });
  };

  const setTimeFormat = (format: TimeFormatType) => {
    dispatch({ type: 'SET_TIME_FORMAT', format });
  };

  const setAvailableSchedules = useCallback(
    (schedules: MappedScheduleItem[]) => {
      dispatch({ type: 'SET_AVAILABLE_SCHEDULES', schedules });
    },
    [dispatch]
  );

  const setLoading = (value: boolean) => {
    dispatch({ type: 'SET_LOADING', value });
  };

  return {
    ...schedulerState,
    ...rest,
    dispatch,
    setSelectedEvent,
    clearselectedEvent,
    setSelectedSchedule,
    setTimeFormat,
    setAvailableSchedules,
    setLoading,
  };
};
