import classNames from 'classnames';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  block?: boolean;
}

export const Input = ({ label, block, ...props }: Props) => {
  return (
    <div className='flex flex-col gap-2'>
      {label && (
        <label
          className='text-base font-normal text-carbon-black'
          htmlFor={props?.id || ''}
        >
          {label}
        </label>
      )}
      <input
        {...props}
        className={classNames(
          `rounded border border-light-gray px-3 py-4 ${props.className}`,
          {
            'w-full': block,
          }
        )}
      />
    </div>
  );
};
