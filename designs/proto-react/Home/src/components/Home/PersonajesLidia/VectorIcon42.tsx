import { memo, SVGProps } from 'react';

const VectorIcon42 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 102 38' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M70.105 31.94C63.405 33.21 56.925 35.44 50.115 36.3C32.895 38.49 16.235 36.91 0.344971 29.49C29.625 14.81 60.645 5.68998 92.795 0.169983C95.325 7.70998 97.285 15.47 101.035 22.55C101.555 23.54 102.035 24.54 100.855 25.43C94.735 24.5 88.635 23.77 82.465 25.29C77.755 26.46 74.125 29.55 70.105 31.94Z'
      fill='#653521'
    />
  </svg>
);
const Memo = memo(VectorIcon42);
export { Memo as VectorIcon42 };
