import { Dropdown, DropdownItemType } from '@/components/common/Dropdown';
import { postTransaction } from '@/helpers/api';
import { paymentProviders } from '@/helpers/platforms';
import { translate } from '@/helpers/translate';
import { Dispatch, SetStateAction, useState } from 'react';
import { TransactionComponentProps } from '.';
import { Copy } from '../Icons/Copy';
import { Strike } from '../Icons/Strike';
import { Avatar } from '../common/Avatar';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { DetailRow } from '../common/DetailRow';
import { Divider } from '../common/Divider';

// TODO: replace all mock data with real data.

const MOCKED_PAYMENT_PROVIDERS = ['wise', 'paypal', 'cashapp', 'venmo'];

interface Props extends TransactionComponentProps {
  setStatus: Dispatch<
    SetStateAction<
      'pending' | 'incomplete' | 'confirmed' | 'received' | 'denied'
    >
  >;
}

export const IncompleteTransaction = ({ transaction, setStatus }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState<
    DropdownItemType | undefined
  >();

  const onSelectPaymentProvider = (provider: DropdownItemType) => {
    setDropdownValue(provider);
  };

  const onCopy = () => {};

  const onCompleteTransaction = async () => {
    const { transaction: transactionResponse } = await postTransaction(
      {
        ...transaction,
        adminName: 'admin name',
        adminEmail: 'admin@gmail.com',
        paymentProviderId: dropdownValue?.value ?? '',
      },
      'update'
    );

    if (transactionResponse?.status) setStatus(transactionResponse?.status);
  };

  const dropdownOptions = MOCKED_PAYMENT_PROVIDERS.map((provider) => {
    const providerKey = provider as 'wise';
    return {
      displayValue: (
        <div className='flex items-center gap-2'>
          {paymentProviders[providerKey].icon}{' '}
          {paymentProviders[providerKey].displayName}
        </div>
      ),
      value: paymentProviders[providerKey].id,
    };
  });

  return (
    <div className='flex w-full flex-col items-center laptop:min-w-[604px] desktop:min-w-[604px]'>
      <div className='flex w-full flex-col items-center gap-1'>
        <div className='flex items-center gap-2'>
          {/* TODO: add event owner avatar/img */}
          <Avatar className='h-8 w-8' />
          <p className='text-secondary text-md font-medium'>
            {/* TODO: add event owner name */}
            Pay {'Patrick Musa'}
          </p>
        </div>
        <p className='text-primary flex items-center gap-2 text-5xl font-semibold'>
          ${transaction.amount.toFixed(2)}
          <span className='cursor-pointer' onClick={() => onCopy()}>
            <Copy />
          </span>
        </p>
      </div>
      <Divider />
      <div className='flex w-full flex-col items-center gap-16 tablet:gap-12'>
        <Dropdown
          isOpen={isDropdownOpen}
          toggle={setIsDropdownOpen}
          handleSelect={onSelectPaymentProvider}
          options={dropdownOptions}
          currentValue={dropdownValue}
        />
        {!!dropdownValue && (
          <div className='w-full'>
            <Card className='border-surface-secondary flex flex-col gap-5'>
              <h4 className='text-primary text-2xl font-semibold'>
                {translate('Payment details')}
              </h4>
              <div>
                <DetailRow
                  label='Name'
                  value={
                    <span
                      className='flex cursor-pointer items-center gap-2'
                      onClick={() => onCopy()}
                    >
                      {'Event Owner Name'} <Copy />
                    </span>
                  }
                />
                <Divider dotted />
                <DetailRow
                  label='Email'
                  value={
                    <span
                      className='flex cursor-pointer items-center gap-2'
                      onClick={() => onCopy()}
                    >
                      {'client@mail.com'} <Copy />
                    </span>
                  }
                />
                <Divider dotted />
                <DetailRow
                  label='Platform'
                  value={
                    <div className='flex items-center gap-2'>
                      {dropdownValue.displayValue}
                    </div>
                  }
                />
              </div>
            </Card>
          </div>
        )}
        <div className='flex w-full items-center justify-between tablet:flex-col-reverse tablet:gap-4'>
          <Button theme='outlined-carbon' className='tablet:w-full'>
            {translate('Go Back')}
          </Button>
          <Button
            className='flex items-center justify-center gap-2 tablet:w-full'
            disabled={!dropdownValue}
            theme='aurora'
            onClick={onCompleteTransaction}
          >
            <Strike />
            {translate('Payment Completed')}
          </Button>
        </div>
        <Button theme='link'>
          {translate('Send this payment link to your email')}
        </Button>
      </div>
    </div>
  );
};
