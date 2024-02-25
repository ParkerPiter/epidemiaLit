import { memo, SVGProps } from 'react';

const VectorIcon75 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.50498 3.02002C9.73498 7.92002 9.04498 12.7301 7.78498 17.4401C7.39498 18.9101 7.10499 21.25 5.38499 21.29C3.46499 21.33 2.935 18.99 2.465 17.4C0.825003 11.93 0.414999 6.29004 0.804999 0.600037C3.705 1.40004 6.60498 2.21002 9.50498 3.02002Z'
      fill='#F6F5F4'
    />
  </svg>
);
const Memo = memo(VectorIcon75);
export { Memo as VectorIcon75 };
