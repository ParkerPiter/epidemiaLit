import { memo, SVGProps } from 'react';

const VectorIcon64 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M17.955 14.53C15.895 17.65 12.415 17.0501 9.45499 17.7601C8.10499 18.0801 6.47498 17.19 5.41498 18.73C4.66498 17.33 3.915 15.94 3.155 14.54C2.785 11.32 1.84499 8.21003 1.23499 5.03003C0.954987 3.59003 0.334976 2.12002 1.50498 0.77002C6.38498 1.05002 11.295 1.11004 16.055 2.48004C17.965 6.30004 19.275 10.21 17.955 14.53Z'
      fill='#4F5350'
    />
  </svg>
);
const Memo = memo(VectorIcon64);
export { Memo as VectorIcon64 };
