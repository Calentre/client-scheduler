import classNames from 'classnames';

type Props = {
  options: string[];
  onChange: (value: any) => void;
  value?: string;
};

export const Toggler = ({ options, onChange, value }: Props) => {
  const isActive = value ?? options[0];

  return (
    <div className='flex h-fit w-fit shrink-0 select-none items-center justify-center rounded-[5px] bg-mutted-gray p-[2px]'>
      {options.map((option, index) => (
        <p
          key={`toggle-option-${index}`}
          className={classNames(
            'cursor-pointer rounded-[3px] px-[20px] py-[10px] text-xs font-medium leading-4 text-primary transition-all',
            {
              'bg-surface-primary shadow-md': isActive === option,
            }
          )}
          onClick={() => onChange(option)}
        >
          {option}
        </p>
      ))}
    </div>
  );
};
