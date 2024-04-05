'use client';
import { useSchedulerContext } from '@/hooks/useSchedulerContext';
import { useTypedParams } from '@/hooks/useTypedParams';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { EventDetails } from '../EventDetails';
import { Form } from './Form';

export const EnterDetails = () => {
  const router = useRouter();
  const params = useTypedParams();
  const { selectedEvent } = useSchedulerContext();

  useEffect(() => {
    // TODO: revisit
    if (!selectedEvent) {
      router.replace(`/${params['user-name']}/${params['event-name']}`);
    }
  }, [params, router, selectedEvent]);

  if (!selectedEvent) {
    // TODO: revisit
    return '';
  }

  return (
    <EventDetails event={selectedEvent} showSelectedSchedule>
      <Form />
    </EventDetails>
  );
};
