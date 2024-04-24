interface Props {
  size?: number;
}

export const ExternalLink = ({ size = 24 }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16.875 7.8125V3.125H12.1875'
        stroke='url(#paint0_linear_1311_7497)'
        strokeWidth='0.9375'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.25 8.75L16.875 3.125'
        stroke='url(#paint1_linear_1311_7497)'
        strokeWidth='0.9375'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.375 11.25V16.25C14.375 16.4158 14.3092 16.5747 14.1919 16.6919C14.0747 16.8092 13.9158 16.875 13.75 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V6.25C3.125 6.08424 3.19085 5.92527 3.30806 5.80806C3.42527 5.69085 3.58424 5.625 3.75 5.625H8.75'
        stroke='url(#paint2_linear_1311_7497)'
        strokeWidth='0.9375'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <defs>
        <linearGradient
          id='paint0_linear_1311_7497'
          x1='14.5313'
          y1='3.125'
          x2='17.0408'
          y2='3.35378'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#3A77ED' />
          <stop offset={1} stopColor='#A600CF' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_1311_7497'
          x1='14.0625'
          y1='3.125'
          x2='17.0739'
          y2='3.39954'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#3A77ED' />
          <stop offset={1} stopColor='#A600CF' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_1311_7497'
          x1='8.75'
          y1='5.625'
          x2='14.7729'
          y2='6.17407'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#3A77ED' />
          <stop offset={1} stopColor='#A600CF' />
        </linearGradient>
      </defs>
    </svg>
  );
};
