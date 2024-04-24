import { useState } from 'react';
import { TransactionComponentProps } from '.';
import { Card } from '../common/Card';
import { IncompleteTransaction } from './IncompleteTransaction';
import { ReceivedTransaction } from './ReceivedTransaction';

export const RenderContent = ({ transaction }: TransactionComponentProps) => {
  const [status, setStatus] = useState(transaction.status);
  switch (status) {
    case 'incomplete':
    case 'denied':
      return (
        <Card className='border-surface-secondary tablet:w-full tablet:border-0 tablet:px-4'>
          <IncompleteTransaction
            transaction={transaction}
            setStatus={setStatus}
          />
        </Card>
      );
    case 'received':
    case 'pending':
      return <ReceivedTransaction transaction={transaction} />;
    default:
      return <ReceivedTransaction transaction={transaction} />;
  }
};
