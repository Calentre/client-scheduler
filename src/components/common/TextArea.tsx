import classNames from 'classnames';
import { TextareaHTMLAttributes } from 'react';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  block?: boolean;
}

export const TextArea = ({ label, block, ...props }: Props) => {
  return (
    <div className='flex flex-col gap-2'>
      {label && (
        <label
          className='text-primary text-base font-normal'
          htmlFor={props?.id || ''}
        >
          {label}
        </label>
      )}
      <textarea
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
