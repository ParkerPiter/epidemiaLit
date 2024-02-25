import { memo, SVGProps } from 'react';

const VectorIcon96 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 41 41' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M25.125 1.53003C25.855 -1.19997 27.575 0.520072 28.545 1.01007C36.235 4.88007 39.935 11.4401 40.465 19.8901C40.915 27.0901 35.985 35.19 29.255 38.3C21.965 41.67 14.775 41.57 8.37502 36.34C1.42502 30.66 -1.58496 23.3601 1.01504 14.3301C1.37504 13.0901 1.44502 11.55 3.18502 11.27C4.46502 11.31 5.42501 12.1101 6.48501 12.6801C13.235 16.3101 20.105 13.8201 23.095 6.76007C23.815 5.03007 23.835 3.03003 25.125 1.53003Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(VectorIcon96);
export { Memo as VectorIcon96 };
