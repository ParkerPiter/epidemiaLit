import { memo, SVGProps } from 'react';

const VectorIcon12 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 17 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16.199 0.0138773C16.4492 2.44929 15.5668 3.15008 13.1072 2.52562C9.11213 1.5126 5.03369 0.832621 0.98999 0.0138773C6.06198 0.0138773 11.127 0.0138773 16.199 0.0138773Z'
      fill='#060202'
    />
  </svg>
);
const Memo = memo(VectorIcon12);
export { Memo as VectorIcon12 };
