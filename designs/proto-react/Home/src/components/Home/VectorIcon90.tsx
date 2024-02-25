import { memo, SVGProps } from 'react';

const VectorIcon90 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 34 26' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M33.1023 0.383636C29.4963 1.88929 25.7444 2.97863 22.194 4.66468C13.523 8.77922 7.29764 14.8782 5.42865 24.7031C4.32393 25.1402 3.34425 25.959 2.05194 25.8341C1.91298 25.7994 1.77402 25.7855 1.63506 25.7855C1.19734 23.0032 0.752673 20.2139 0.314953 17.4316C-0.115819 11.7212 2.64253 7.98132 7.81874 6.25363C16.052 3.50598 24.4521 1.35503 33.1023 0.383636Z'
      fill='#DDB995'
    />
  </svg>
);
const Memo = memo(VectorIcon90);
export { Memo as VectorIcon90 };
