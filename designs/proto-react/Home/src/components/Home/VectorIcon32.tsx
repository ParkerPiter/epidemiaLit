import { memo, SVGProps } from 'react';

const VectorIcon32 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.8468 10.0171C10.6507 10.3223 8.0244 9.24686 5.92612 6.79756C4.11271 4.6813 2.2437 2.60669 0.402496 0.518188C4.75886 2.28058 9.4626 1.03857 13.8954 2.11404C13.8745 4.74375 13.8607 7.38041 13.8468 10.0171Z'
      fill='#C36747'
    />
  </svg>
);
const Memo = memo(VectorIcon32);
export { Memo as VectorIcon32 };
