import { memo, SVGProps } from 'react';

const VectorIcon11 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3.54183 0.0205688C4.74383 5.27997 5.44558 10.6088 5.87635 15.9792C4.188 15.9792 2.49269 15.9792 0.804344 15.9792C1.55472 11.1847 2.29815 6.38321 3.06242 1.58868C3.15275 1.05442 3.37508 0.547897 3.54183 0.0205688Z'
      fill='#A8A9AC'
    />
  </svg>
);
const Memo = memo(VectorIcon11);
export { Memo as VectorIcon11 };
