import { memo, SVGProps } from 'react';

const VectorIcon90 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 23 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M17.705 0.300049C19.335 2.12005 17.495 4.75002 19.105 6.65002C20.635 6.42002 20.065 3.13002 22.455 4.40002C22.005 10.05 20.105 15.14 16.385 19.42C11.205 25.39 5.91498 25.33 0.474976 19.36C3.70498 19.75 4.28499 17.4501 4.77499 15.0701C9.79499 18.3601 13.485 17.1601 15.225 11.3801C16.305 7.75007 16.895 3.99005 17.705 0.300049Z'
      fill='#D09E08'
    />
  </svg>
);
const Memo = memo(VectorIcon90);
export { Memo as VectorIcon90 };
