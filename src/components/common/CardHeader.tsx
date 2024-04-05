import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const CardHeader = ({ children }: Props) => {
  return (
    <h2 className='text-[22px] font-semibold leading-none tracking-[0.15px] text-gray'>
      {children}
    </h2>
  );
};
