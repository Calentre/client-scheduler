import { postScheduleDetails, postTransaction } from '@/helpers/api';
import { translate } from '@/helpers/translate';
import { useSchedulerContext } from '@/hooks/useSchedulerContext';
import { EventItem } from '@/types/meetings';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { Strike } from '../Icons/Strike';
import { Button } from '../common/Button';
import { CardHeader } from '../common/CardHeader';
import { Input } from '../common/Input';
import { TextArea } from '../common/TextArea';

interface Props {
  selectedEvent: EventItem;
}

export const Form = ({ selectedEvent }: Props) => {
  const { selectedSchedule, formData, handleChange, handleTextAreaChange } =
    useSchedulerContext();
  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const scheduleDetails = {
      client: formData,
      schedule: selectedSchedule,
    };
    if (selectedEvent?.isPaidEvent) {
      /*
       * saves schedule details to supabase db
       * creates payment link with schedule-id
       * redirects to payment link previously created "user-name/event-path/payment/[schedule-id]"
       */
      const { transaction } = await postTransaction(
        {
          amount: parseFloat(selectedEvent.price.replace(/[^\d.]/g, '')),
          clientEmail: formData.email,
          clientName: formData.fullName,
          date: `${selectedSchedule?.date}`,
          eventId: `${selectedEvent.id}`,
          paymentProviderId: '0',
        },
        'create'
      );

      if (transaction?.transactionId) {
        router.push(`transaction/${transaction.transactionId}`);
      }
    } else {
      /*
       * makes API call to create event.
       * saves schedule details to supabase db
       * when schedule events were saved into SB DB
       * redirect to "user-name/event-path/confirmed/[schedule-id]"
       */

      const scheduled = await postScheduleDetails({
        ...scheduleDetails,
        isPaid: false,
      });

      if (scheduled.reservationId) {
        router.push(`confirmed/${scheduled.reservationId}`);
      }
    }
  };

  return (
    <div className='border-surface-secondary border-l pl-7 tablet:border-l-0 tablet:border-t tablet:pl-0 desktop:min-w-fit'>
      <div className='flex flex-col gap-6 py-10 pr-10 tablet:pr-0'>
        <CardHeader>{translate('Enter details')}</CardHeader>
        <form
          className='flex flex-col gap-12 desktop:min-w-[397px]'
          onSubmit={onSubmit}
        >
          <div className='flex flex-col gap-3'>
            <Input
              autoComplete='off'
              type='text'
              onChange={handleChange}
              value={formData.fullName}
              name='fullName'
              id='fullName'
              placeholder={translate('Full Name')}
              label={translate('Full Name')}
              block
            />
            <Input
              type='email'
              autoComplete='off'
              onChange={handleChange}
              value={formData.email}
              name='email'
              id='email'
              placeholder={translate('Email')}
              label={translate('Email')}
              block
            />
            <TextArea
              onChange={handleTextAreaChange}
              autoComplete='off'
              value={formData.note}
              name='note'
              id='note'
              label={translate('Note (optional)')}
              rows={4}
              block
            />
          </div>
          <div className='flex justify-end tablet:w-full'>
            <Button
              className='items-cente flex justify-center gap-[12px] tablet:w-full'
              theme='aurora'
              disabled={!formData.fullName || !formData.email}
              type='submit'
            >
              <Strike size={24} /> {translate('Next')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
