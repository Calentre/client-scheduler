import { Scheduler } from '@/components/Scheduler';
import { getEventSchedules } from '@/helpers/api';

export default async function Page({ params }: PageProps) {
  const eventName = params?.['event-name'];

  if (!eventName) {
    return 'event not found error'; // TODO
  }

  const schedulesResponse = await getEventSchedules(eventName);

  if (schedulesResponse.schedules.length === 0 || schedulesResponse.error) {
    return 'no schedules found for this event error'; // TODO
  }

  return (
    <Scheduler eventName={eventName} schedules={schedulesResponse.schedules} />
  );
}
