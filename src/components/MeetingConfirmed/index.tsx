import { translate } from '@/helpers/translate';
import { CircleCheck } from '../Icons/CircleCheck';
import { Card } from '../common/Card';

interface Props {}

export const MeetingConfirmed = (props: Props) => {
  return (
    <Card>
      <div>
        <CircleCheck />
        <h2>{translate('Meeting Confirmed')}</h2>
      </div>
    </Card>
  );
};
