import { Transaction } from '@/components/Transaction';
import { getTransactionDetails } from '@/helpers/api';

interface Props {
  params: {
    'transaction-id': string;
  };
}

export default async function Page({ params }: Props) {
  const transactionId = params['transaction-id'];

  const request = await getTransactionDetails(transactionId);

  if (!request.transaction) {
    return 'transaction not found'; // TODO: no transaction found error screen
  }

  return <Transaction transaction={request.transaction} />;
}
