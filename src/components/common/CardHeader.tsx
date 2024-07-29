import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const CardHeader = ({ children }: Props) => {
  return (
    <h4 className='text-2xl font-semibold leading-none tracking-[0.15px] text-secondary'>
      {children}
    </h4>
  );
};
