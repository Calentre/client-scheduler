import { translate } from '@/helpers/translate';
import { useForm } from '@/hooks/useForm';
import { useSchedulerContext } from '@/hooks/useSchedulerContext';
import { FormEvent } from 'react';
import { Strike } from '../Icons/Strike';
import { Button } from '../common/Button';
import { CardHeader } from '../common/CardHeader';
import { Input } from '../common/Input';
import { TextArea } from '../common/TextArea';

interface Props {}

export const Form = (props: Props) => {
  const { selectedEvent } = useSchedulerContext();
  const { formData, handleChange, handleTextAreaChange } = useForm({
    fullName: '',
    email: '',
    note: '',
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedEvent?.isPaidEvent) {
      /*
       * saves schedule details to supabase db
       * creates payment link with schedule-id
       * redirects to payment link previously created "user-name/event-path/payment/[schedule-id]"
       */
      console.warn('payment flow');
    } else {
      /*
       * makes API call to create event.
       * saves schedule details to supabase db
       * when schedule events were saved into SB DB
       * redirect to "user-name/event-path/confirmed/[schedule-id]"
       */
      console.warn('event confirmed :: ', { formData });
    }
  };

  return (
    <div className='border-l border-off-gray pl-7 tablet:border-l-0 tablet:border-t tablet:pl-0 desktop:min-w-fit'>
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
