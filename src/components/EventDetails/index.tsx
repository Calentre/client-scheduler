import { abbreviateTimezone } from '@/helpers/date';
import { platforms } from '@/helpers/platforms';
import { translate } from '@/helpers/translate';
import { useSchedulerContext } from '@/hooks/useSchedulerContext';
import { EventItem } from '@/types/meetings';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { themeColors } from '../../../tailwind.config';
import { ArrowLeft } from '../Icons/ArrowLeft';
import { CalendarCheck } from '../Icons/CalendarCheck';
import { Clock } from '../Icons/Clock';
import { Tag } from '../Icons/Tag';
import { Avatar } from '../common/Avatar';
import { Card } from '../common/Card';

interface Props {
  event: EventItem;
  children: ReactNode;
  showSelectedSchedule?: boolean;
}

export const EventDetails = ({
  event,
  children,
  showSelectedSchedule,
}: Props) => {
  const { eventsOwner, loading, selectedSchedule } = useSchedulerContext();
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <Card withPadding={false} className='tablet:border-none'>
      <div className='flex flex-row tablet:flex-col tablet:gap-4'>
        <div className='flex flex-col gap-6 py-10 pl-[30px] pr-6 tablet:min-w-[203px] tablet:max-w-full tablet:py-0 tablet:pl-0 tablet:pr-0'>
          <div onClick={goBack}>
            <ArrowLeft color={themeColors.secondary} />
          </div>
          <div className='flex w-full flex-col gap-4 tablet:items-center'>
            <div className='flex flex-col gap-2 tablet:items-center'>
              <Avatar src={eventsOwner.avatar} />
              <p className='text-xs font-semibold text-secondary'>
                {eventsOwner.name}
              </p>
            </div>
            <h5 className='text-xl font-semibold tracking-[0.15px] text-secondary tablet:text-lg'>
              {event.title}
            </h5>
            <div className='flex w-full flex-col gap-4 pt-2 tablet:flex-row tablet:flex-wrap tablet:justify-center'>
              {/* price/duration/platform */}
              <div className='flex flex-row gap-2'>
                <Tag />
                <span className='text-sm font-normal text-primary'>
                  {event.isPaidEvent ? event.price : translate('Free')}
                </span>
              </div>
              <div className='flex flex-row'>
                <Clock />
                <span className='text-sm font-normal text-primary'>
                  {event.duration}
                </span>
              </div>
              <div className='flex flex-row items-center gap-2'>
                {platforms[event.platform].icon}
                <span className='text-sm font-normal text-primary'>
                  {platforms[event.platform].displayName}
                </span>
              </div>
              {showSelectedSchedule && selectedSchedule && (
                <div className='flex flex-row items-center gap-2'>
                  <CalendarCheck size={18} />
                  <span className='flex gap-1 text-sm font-normal text-success'>
                    {/* Tue, Oct 31, 1:30 pm WAT */}
                    {format(
                      selectedSchedule.date,
                      'E.EEE, LLL dd, hh:mm aaa'
                    )}{' '}
                    {abbreviateTimezone(selectedSchedule.date)}
                  </span>
                </div>
              )}
            </div>
            <div className='flex flex-col gap-2 pt-4 tablet:w-full'>
              {/* description */}
              <p className='text-sm font-medium text-primary'>
                {translate('Description')}
              </p>
              <small className='max-w-[203px] text-xs font-normal leading-5 text-secondary tablet:max-w-full'>
                {event.description}
              </small>
            </div>
          </div>
        </div>
        {/* TODO: loading component */}
        {loading ? 'loading...' : children}
      </div>
    </Card>
  );
};
