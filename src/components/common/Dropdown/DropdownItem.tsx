import classNames from 'classnames';
import { ReactNode, useState } from 'react';
import { DropdownItemType } from '.';

interface Props {
  displayValue: ReactNode;
  value: string;
  currentSelection?: DropdownItemType;
  handleSelect: (value: DropdownItemType) => void;
}

export const DropdownItem = ({
  value,
  displayValue,
  currentSelection,
  handleSelect,
}: Props) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={classNames('w-full', {
        'bg-[linear-gradient(90deg,_rgba(166,117,233,0.3)_0%,_rgba(10,174,248,0.3)_100%)]':
          currentSelection?.value === value,
        'bg-[linear-gradient(90deg,_rgba(166,117,233,0.15)_0%,_rgba(10,174,248,0.15)_100%)]':
          isHover,
      })}
      onClick={() => handleSelect({ value, displayValue })}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className='p-sm-1'>{displayValue}</div>
    </div>
  );
};
