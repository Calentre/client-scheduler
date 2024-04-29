type Props = {
  size?: number;
  color?: string;
};

export const CaretUp = ({ size = 18, color = '#1A1A1A' }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6 20L16 10L26 20'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
