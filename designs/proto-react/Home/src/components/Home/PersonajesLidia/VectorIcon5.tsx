import { memo, SVGProps } from 'react';

const VectorIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 49 61' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.905 0.0200021C22.575 7.26 29.125 14.6 34.325 23.02C40.545 33.09 44.855 44.01 48.105 55.35C48.565 56.96 49.105 59.21 46.995 60.01C44.595 60.92 44.185 58.54 43.575 56.99C36.445 39.03 26.605 22.89 12.215 9.84C8.43497 6.41 4.40499 3.28 0.484985 0.0100021C5.63499 0.0200021 10.765 0.0200021 15.905 0.0200021Z'
      fill='#310201'
    />
  </svg>
);
const Memo = memo(VectorIcon5);
export { Memo as VectorIcon5 };
