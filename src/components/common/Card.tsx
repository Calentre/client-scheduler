'use client';

import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  withoutBorder?: boolean;
  withPadding?: boolean;
  className?: string;
};

export const Card = ({
  children,
  withoutBorder,
  withPadding = true,
  className,
}: Props) => {
  return (
    <div
      className={classNames(
        {
          'border-surface-secondary border border-solid': !withoutBorder,
          'px-9 py-7': withPadding,
        },
        `rounded-lg bg-white ${className}`
      )}
    >
      {children}
    </div>
  );
};
