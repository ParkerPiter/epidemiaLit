import { memo, SVGProps } from 'react';

const VectorIcon80 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.345032 4.44004C0.275032 4.20004 0.20501 3.97002 0.13501 3.73002C8.10501 1.37002 16.145 -0.269997 24.475 1.65C16.425 2.58 8.38503 3.51004 0.345032 4.44004Z'
      fill='#BB8966'
    />
  </svg>
);
const Memo = memo(VectorIcon80);
export { Memo as VectorIcon80 };
