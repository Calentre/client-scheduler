'use client';
import { useSchedulerContext } from '@/hooks/useSchedulerContext';
import { useTypedParams } from '@/hooks/useTypedParams';
import { AvailableMeetings } from '../AvailableMeetings';
import { Four04 } from '../common/404';
import { Card } from '../common/Card';
import { EventOwnerDetails } from './EventOwnerDetails';

export const EventSelector = () => {
  const { eventsOwner } = useSchedulerContext();
  const params = useTypedParams();

  // until we get access to the db
  if (eventsOwner.userName !== params['user-name']) {
    return <Four04 />;
  }
  return (
    <div className='flex w-full max-w-xl flex-col gap-10 tablet:gap-4'>
      <Card withoutBorder>
        <EventOwnerDetails />
      </Card>
      <AvailableMeetings />
    </div>
  );
};
