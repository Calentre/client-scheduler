interface Props {
  size?: number;
  color?: string;
}

export const WarningCircle = ({ size = 18, color = '#FFBA00' }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 41 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M20.5 35C28.7843 35 35.5 28.2843 35.5 20C35.5 11.7157 28.7843 5 20.5 5C12.2157 5 5.5 11.7157 5.5 20C5.5 28.2843 12.2157 35 20.5 35Z'
        stroke={color}
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20.5 12.5V21.25'
        stroke={color}
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20.5 28.4375C21.3629 28.4375 22.0625 27.7379 22.0625 26.875C22.0625 26.0121 21.3629 25.3125 20.5 25.3125C19.6371 25.3125 18.9375 26.0121 18.9375 26.875C18.9375 27.7379 19.6371 28.4375 20.5 28.4375Z'
        fill={color}
      />
    </svg>
  );
};
