import { memo, SVGProps } from 'react';

const VectorIcon64 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.65827 27.2071C4.04635 26.4924 2.43446 25.7777 0.25975 24.8064C9.90349 18.6658 16.8445 10.6796 21.7358 0.715851C23.4103 1.88846 23.841 3.66473 24.7304 5.10794C20.1169 13.9962 13.7248 21.3302 5.65827 27.2071Z'
      fill='#E3E1DF'
    />
  </svg>
);
const Memo = memo(VectorIcon64);
export { Memo as VectorIcon64 };
