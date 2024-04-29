'use client';
import { useForm } from '@/hooks/useForm';
import { EventsOwner } from '@/types/eventsOwner';
import { EventItem, MappedScheduleItem, ScheduleItem } from '@/types/meetings';
import { SchedulerProviderAction } from '@/types/scheduler';
import { ChangeEvent, Dispatch, createContext, useReducer } from 'react';
import { SchedulerReducer, schedulerReducer } from './reducer';

export type TimeFormatType = '12h' | '24h';

interface Props {
  children: React.ReactNode;
  events: EventItem[]; // possible undefined or empty array
  eventsOwner: EventsOwner;
}

export interface SchedulerState {
  selectedEvent?: EventItem;
  selectedSchedule?: ScheduleItem;
  eventsOwner: EventsOwner;
  availableEvents: EventItem[];
  availableSchedules: MappedScheduleItem[];
  loading: boolean;
  timeFormat: TimeFormatType;
}

export interface SchedulerProviderProps {
  schedulerState: SchedulerState;
  dispatch: Dispatch<SchedulerProviderAction>;
  formData: {
    fullName: string;
    email: string;
    note: string;
  };
  handleChange: (el: ChangeEvent<HTMLInputElement>) => void;
  handleTextAreaChange: (el: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const SchedulerContext = createContext<SchedulerProviderProps>(
  {} as SchedulerProviderProps
);

// const MOCKED_ADMIN_TIMEZONE = 'Africa/Lagos';

const initStateForm = {
  fullName: '',
  email: '',
  note: '',
};

const initStateDevForm = {
  fullName: 'Luis Flores',
  email: 'floresfuentes93@gmail.com',
  note: 'lorem lorem notes notes',
};

const isDev = process.env.NODE_ENV === 'development';

export const SchedulerProvider = ({ children, events, eventsOwner }: Props) => {
  const [schedulerState, dispatch] = useReducer<SchedulerReducer>(
    schedulerReducer,
    {
      selectedEvent: undefined,
      eventsOwner,
      availableEvents: events,
      availableSchedules: [],
      loading: false,
      selectedSchedule: undefined,
      timeFormat: '12h',
    }
  );
  const { formData, handleChange, handleTextAreaChange } = useForm(
    isDev ? initStateDevForm : initStateForm
  );

  if (schedulerState.loading) {
    // TODO: loader here
    return '';
  }

  return (
    <SchedulerContext.Provider
      value={{
        schedulerState,
        dispatch,
        formData,
        handleChange,
        handleTextAreaChange,
      }}
    >
      {children}
    </SchedulerContext.Provider>
  );
};
