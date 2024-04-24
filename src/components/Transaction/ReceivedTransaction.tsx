import { DEMO_SCHEDULES } from '@/app/api/events/schedules/route';
import { MOCKED_DEMO_MEETINGS } from '@/app/api/user/events/route';
import { EventReservation } from '@/types/meetings';
import { TransactionComponentProps } from '.';
import { ReservationStatus } from '../ReservationStatus';

export const ReceivedTransaction = ({
  transaction,
}: TransactionComponentProps) => {
  // TODO: logic to populate client, event and schedule fields.

  const reservation: EventReservation = {
    status: transaction.status,
    client: {
      email: 'client@mail.com',
      name: 'Client Name',
    },
    event: MOCKED_DEMO_MEETINGS[1],
    schedule: {
      ...DEMO_SCHEDULES[1],
      eventLink: 'www.google.com',
      startHour: new Date().toISOString(),
      endHour: new Date().toISOString(),
    },
  };

  return <ReservationStatus reservation={reservation} />;
};
