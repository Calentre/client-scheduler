import { EventsOwner } from '@/types/eventsOwner';
import { EventItem } from '@/types/meetings';
import Link from 'next/link';
import { ArrowRight } from '../Icons/ArrowRight';
import { Clock } from '../Icons/Clock';
import { Tag } from '../Icons/Tag';
import { Divider } from '../common/Divider';

interface Props {
  meeting: EventItem;
  eventOwner: EventsOwner;
}

export const MeetItem = ({ meeting, eventOwner }: Props) => {
  const { duration, title, price, isPaidEvent } = meeting;

  return (
    <>
      <Link
        href={`/${eventOwner.userName}/events/${meeting.appendedUrlName}`}
        className='flex w-full cursor-pointer flex-row items-center justify-between'
      >
        <div className='flex flex-col gap-2'>
          <p className='text-lg font-semibold leading-normal text-primary'>
            {title}
          </p>
          <div className='flex gap-5 text-sm font-normal leading-normal text-primary'>
            <div className='flex flex-row gap-0'>
              <Clock />
              <span>{duration}</span>
            </div>
            <div className='flex flex-row gap-2'>
              <Tag />
              <span>{isPaidEvent ? price : 'Free'}</span>
            </div>
          </div>
        </div>
        <ArrowRight />
      </Link>
      <Divider horizontal margin={6} />
    </>
  );
};
