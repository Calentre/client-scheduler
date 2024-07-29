import { ReservationStatus } from '@/components/ReservationStatus';
import { getScheduleByStatus } from '@/helpers/api';

interface Props {
  params: {
    'schedule-id': string;
  };
}

export default async function Page({ params }: Props) {
  const scheduleId = params['schedule-id'];

  const { reservation } = await getScheduleByStatus(scheduleId);

  if (!reservation) {
    return ''; // TODO: 404 error
  }

  return <ReservationStatus reservation={reservation} />;
}
