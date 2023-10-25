'use client';
import { EventOwnerDetails } from '../EventOwnerDetails';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { Divider } from '../common/Divider';

export const Scheduler = () => {
  return (
    <Card>
      <div className='flex flex-col'>
        <div>
          <EventOwnerDetails />
        </div>
        <Divider horizontal />
        <Button onClick={() => {}}>Process to Payment</Button>
      </div>
    </Card>
  );
};
