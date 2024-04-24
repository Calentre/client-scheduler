import { translate } from '@/helpers/translate';
import { ReactNode } from 'react';

interface Props {
  label: string;
  value: ReactNode;
}

export const DetailRow = ({ value, label }: Props) => {
  return (
    <div className='flex w-full justify-between tablet:min-w-full laptop:min-w-[592px] desktop:min-w-[592px]'>
      <span className='text-base font-bold text-light-gray tablet:text-sm'>
        {translate(label)}
      </span>
      <span className='text-lg font-normal text-dark-gray tablet:text-base'>
        {value}
      </span>
    </div>
  );
};
