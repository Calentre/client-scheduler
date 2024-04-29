import { translate } from '@/helpers/translate';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import classNames from 'classnames';
import { Dispatch, ReactNode, SetStateAction, useRef } from 'react';
import { themeColors } from '../../../../tailwind.config';
import { CaretDown } from '../../Icons/CaretDown';
import { CaretUp } from '../../Icons/CaretUp';
import { DropdownItem } from './DropdownItem';

export type DropdownItemType = {
  displayValue: ReactNode;
  value: string;
};

interface Props {
  isOpen: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
  currentValue?: DropdownItemType;
  handleSelect: (value: DropdownItemType) => void;
  options: DropdownItemType[];
}

export const Dropdown = ({
  isOpen,
  toggle,
  currentValue,
  options,
  handleSelect,
}: Props) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dropdownRef, () => {
    toggle(false);
  });

  const toggleDropdown = () => {
    toggle(!isOpen);
  };

  const onSelect = (item: DropdownItemType) => {
    handleSelect(item);
    toggle(false);
  };

  return (
    <div className='flex w-full flex-col'>
      <div className='relative flex w-full flex-col gap-3'>
        <p className='text-md text-primary font-medium'>
          {translate('Select your preferred payment platform')}
        </p>
        <div ref={dropdownRef}>
          <div
            className='rounded-minimal p-sm-1 border-disabled flex w-full cursor-pointer select-none border'
            onClick={toggleDropdown}
          >
            <div
              className={classNames(
                'flex w-full items-center justify-between font-normal',
                {
                  'text-disabled': !currentValue?.displayValue,
                }
              )}
            >
              {currentValue?.displayValue ?? translate('Select Payment Method')}
              {isOpen ? (
                <CaretUp color={themeColors.secondary} />
              ) : (
                <CaretDown color={themeColors.secondary} />
              )}
            </div>
          </div>
          {isOpen && options.length > 0 && (
            <div className='rounded-minimal py-sm bg-surface-primary absolute top-24 mt-1 flex max-h-72 w-full flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
              <div className='h-4' />
              {options.map((option) => (
                <DropdownItem
                  key={option.value}
                  currentSelection={currentValue}
                  handleSelect={onSelect}
                  {...option}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
