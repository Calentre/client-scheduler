import { themeColors } from '../../../tailwind.config';

interface Props {
  color?: string;
  size?: number;
}

export const Copy = ({ size = 24, color = themeColors.primary }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.75 15.75H20.25V3.75H8.25V8.25'
        stroke={color}
        strokeWidth='1.125'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.75 8.25H3.75V20.25H15.75V8.25Z'
        stroke={color}
        strokeWidth='1.125'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
