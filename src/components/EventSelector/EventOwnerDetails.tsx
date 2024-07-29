import { useSchedulerContext } from '@/hooks/useSchedulerContext';
import { Avatar } from '../common/Avatar';

export const EventOwnerDetails = () => {
  const { eventsOwner } = useSchedulerContext();
  return (
    <div className='flex flex-col items-center gap-3 tablet:gap-2'>
      <Avatar src={eventsOwner.avatar} />
      <p className='text-md font-semibold leading-normal text-secondary'>
        {eventsOwner.name}
      </p>
      <p className='w-full max-w-sm text-center text-sm text-primary'>
        {eventsOwner.description}
      </p>
    </div>
  );
};
