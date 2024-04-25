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
    event: {
      title: "Calentre's introduction",
      duration: '60 Mins',
      price: '$39.00',
      id: 122418,
      appendedUrlName: 'calentres-introduction',
      description:
        'This is a description of the meeting. All payment will be confirmed within 0 - 5hrs ',
      isPaidEvent: true,
      status: '',
      timezone: 'Africa/Lagos',
      platform: 'google-meet',
    },
    schedule: {
      ...{
        date: new Date(2024, 3, 2, 15).toISOString(),
        eventId: 122418,
        id: 543,
        isActive: true,
        isExpired: false,
      },
      eventLink: 'www.google.com',
      startHour: new Date().toISOString(),
      endHour: new Date().toISOString(),
    },
  };

  return <ReservationStatus reservation={reservation} />;
};
