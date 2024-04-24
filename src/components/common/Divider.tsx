import classNames from 'classnames';

interface Props {
  horizontal?: boolean;
  vertical?: boolean;
  margin?: 4 | 6;
  dotted?: boolean;
}

export const Divider = ({
  vertical,
  horizontal = true,
  margin = 4,
  dotted,
}: Props) => {
  const margins = {
    4: horizontal ? 'my-4' : 'mx-4',
    6: horizontal ? 'my-6' : 'mx-6',
  };

  if (dotted) {
    return (
      <div
        className={classNames(
          `${margins[margin]} border-dotted border-off-gray`,
          {
            'h-px w-full border-t': horizontal && !vertical,
            'h-full w-px border-l': !horizontal && vertical,
          }
        )}
      />
    );
  }
  return (
    <div
      className={classNames(`${margins[margin]} bg-off-gray`, {
        'h-px w-full': horizontal && !vertical,
        'h-full w-px': !horizontal && vertical,
      })}
    />
  );
};
