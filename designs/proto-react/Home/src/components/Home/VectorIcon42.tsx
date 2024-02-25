import { memo, SVGProps } from 'react';

const VectorIcon42 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 133 66' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M132.387 65.905C125.307 63.8304 118.241 61.7349 111.154 59.6811C95.007 54.9907 78.86 50.2795 62.6991 45.6445C53.2638 42.9385 43.773 40.3782 34.5947 36.909C24.8815 33.2385 15.2169 29.2628 8.10919 21.0753C4.41983 16.829 1.43221 12.2079 0.799943 6.48365C0.591505 4.57556 1.10566 2.58416 1.28631 0.627502C3.50965 7.17745 8.53995 11.2643 14.0497 14.7197C23.9366 20.9157 34.817 25.0095 45.5377 29.4848C68.9592 39.2612 92.7698 47.9829 116.705 56.3646C120.054 57.5372 123.403 58.8208 126.856 59.5354C130.532 60.2917 132.366 62.1791 132.387 65.905Z'
      fill='#A8A9AD'
    />
  </svg>
);
const Memo = memo(VectorIcon42);
export { Memo as VectorIcon42 };