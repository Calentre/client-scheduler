'use client';
import { abbreviateTimezone } from '@/helpers/date';
import { platforms } from '@/helpers/platforms';
import { translate } from '@/helpers/translate';
import { EventReservation } from '@/types/meetings';
import { format } from 'date-fns';
import { useState } from 'react';
import { CircleCheck } from '../Icons/CircleCheck';
import { ExternalLink } from '../Icons/ExternalLink';
import { WarningCircle } from '../Icons/WarningCircle';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { DetailRow } from '../common/DetailRow';
import { Divider } from '../common/Divider';

interface Props {
  reservation: EventReservation;
}

export const ReservationStatus = ({ reservation }: Props) => {
  const { client, event, schedule, status } = reservation;
  const [reminderSent, setReminderSent] = useState(false);

  const isConfirmed = status === 'confirmed';

  const sendReminderToAdmin = () => {
    console.warn('reminder sent');
    setReminderSent(true);
  };

  return (
    <Card className='tablet:w-full tablet:border-0 tablet:px-4'>
      <div className='flex w-full flex-col gap-4'>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-2'>
            {isConfirmed ? (
              <CircleCheck size={36} />
            ) : (
              <WarningCircle size={36} />
            )}
            <h2 className='text-primary text-2xl font-semibold tablet:text-xl'>
              {translate(isConfirmed ? 'Meeting Confirmed' : 'Pending')}
            </h2>
          </div>
          <div className='w-full max-w-xs text-center'>
            <p className='text-sm font-normal text-gray'>
              {isConfirmed ? (
                <>
                  {translate(
                    "We've sent a calendar invite to your email address"
                  )}
                  :
                  <span className='text-primary font-semibold'>
                    {' '}
                    {client.email}
                  </span>
                </>
              ) : (
                <>
                  {translate('Awaiting confirmation from')} {'Event owner'}{' '}
                  {translate('for your payment')}
                </>
              )}
            </p>
          </div>
        </div>
        <Divider />
        <Card className='mb-16 border-off-gray tablet:mb-14 tablet:px-3 tablet:py-3'>
          <div className='flex flex-col gap-4'>
            <h3 className='text-xl font-semibold text-gray'>{event.title}</h3>
            <div className='flex flex-col gap-2'>
              <DetailRow label='Who' value={client.name} />
              <Divider dotted />
              <DetailRow
                label='When'
                value={
                  <div className='flex flex-col items-end'>
                    <span>{format(schedule.date, 'EEEE, LLLL d, yyyy')}</span>
                    <span>
                      {format(schedule.startHour, 'hh:mm aa')} -{' '}
                      {format(schedule.endHour, 'hh:mm aa')} (
                      {abbreviateTimezone(schedule.date)})
                    </span>
                  </div>
                }
              />
              <Divider dotted />
              <DetailRow
                label='Where'
                value={
                  <div className='flex items-center gap-2'>
                    {platforms[event.platform].icon}{' '}
                    {platforms[event.platform].displayName}{' '}
                    {isConfirmed && (
                      <a href={schedule.eventLink} target='_blank'>
                        <ExternalLink />
                      </a>
                    )}
                  </div>
                }
              />
            </div>
          </div>
        </Card>
        {!isConfirmed && (
          <div className='text-center'>
            {reminderSent ? (
              <span className='text-sm font-normal text-off-gray'>
                Reminder sent
              </span>
            ) : (
              <Button
                theme='link'
                className='underline'
                onClick={sendReminderToAdmin}
              >
                {translate('Send admin a reminder')}
              </Button>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};
