import { memo, SVGProps } from 'react';

const VectorIcon50 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 94 55' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.615002 0.25C6.335 8.61 14.075 14.5101 23.035 18.9601C45.525 30.1301 68.015 41.3001 90.495 52.4801C91.675 53.0701 92.825 53.74 93.825 54.76C85.335 52.35 76.845 49.97 68.365 47.53C50.045 42.26 31.755 36.9001 13.415 31.7301C10.355 30.8701 7.15501 30.1501 3.87501 30.4601C5.28501 23.4201 2.50501 16.93 1.12501 10.27C0.415012 6.92002 0.245002 3.62 0.615002 0.25Z'
      fill='#A8A9AD'
    />
  </svg>
);
const Memo = memo(VectorIcon50);
export { Memo as VectorIcon50 };
