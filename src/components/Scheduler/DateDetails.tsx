'use client';
import { userTimezone } from '@/helpers/date';
import { translate } from '@/helpers/translate';
import { useSchedulerContext } from '@/hooks/useSchedulerContext';
import { MappedScheduleItem } from '@/types/meetings';
import { useState } from 'react';
import { Calendar } from '../Calendar';
import { Strike } from '../Icons/Strike';
import { Www } from '../Icons/Www';
import { Button } from '../common/Button';
import { CardHeader } from '../common/CardHeader';
import { Toggler } from '../common/Toggler';
import { AvailableTimes } from './AvailableTimes';

export const DateDetails = () => {
  const {
    timeFormat,
    setTimeFormat,
    availableSchedules,
    selectedEvent,
    selectedSchedule,
  } = useSchedulerContext();
  const [selectedDay, setSelectedDay] = useState<MappedScheduleItem | null>(
    null
  );

  return (
    <div className='border-surface-secondary border-l pl-7 tablet:border-l-0 tablet:border-t tablet:pl-0'>
      <div className='flex flex-col gap-6 py-10 pr-10 tablet:pr-0'>
        <div className='flex items-start'>
          <CardHeader>{translate('Select date and time')}</CardHeader>
        </div>
        <div className='flex flex-row gap-6'>
          <div className='flex flex-col gap-7 tablet:w-full'>
            <div className='flex justify-between gap-6 tablet:flex-col tablet:gap-4'>
              {/* calendar */}
              <div className='flex flex-col gap-7'>
                <Calendar
                  onSelectDate={setSelectedDay}
                  eventsSchedules={availableSchedules}
                  selectedDate={selectedDay}
                />
                {/* time zone & am/pm */}
                <div className='flex w-full items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <Www />
                    <span className='text-primary text-xs font-normal'>
                      {userTimezone.displayTimezone}
                    </span>
                  </div>
                  <Toggler
                    options={['12h', '24h']}
                    onChange={setTimeFormat}
                    value={timeFormat}
                  />
                </div>
              </div>
              {selectedDay && (
                <AvailableTimes
                  selectedDay={selectedDay}
                  dateFormat={timeFormat === '12h' ? 'hh:mm a' : 'HH:mm'}
                />
              )}
            </div>

            <div className='flex justify-end tablet:w-full'>
              <Button
                className='items-cente flex justify-center gap-[12px] tablet:w-full'
                theme='aurora'
                href={`${selectedEvent?.appendedUrlName}/details`}
                disabled={!selectedSchedule}
              >
                <Strike size={24} /> {translate('Next')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
