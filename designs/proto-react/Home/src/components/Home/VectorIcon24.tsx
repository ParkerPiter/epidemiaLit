import { memo, SVGProps } from 'react';

const VectorIcon24 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 58 23' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.463745 21.466C1.56847 17.9135 4.41018 15.7556 7.16157 13.7504C15.9785 7.32533 25.8237 3.12755 36.5791 1.32354C41.5677 0.483981 46.6328 0.706006 51.538 2.01045C53.6502 2.57246 55.8805 1.78839 57.8815 2.85692C57.8676 8.92118 57.8607 14.9785 57.8468 21.0428C54.8244 22.6386 51.6006 21.9656 48.4879 21.6811C37.6352 20.7028 26.7964 20.3836 15.909 21.1954C11.6985 21.5077 7.49507 21.7852 3.29852 22.2501C2.28412 22.368 1.22107 22.4166 0.463745 21.466Z'
      fill='#C37C43'
    />
  </svg>
);
const Memo = memo(VectorIcon24);
export { Memo as VectorIcon24 };
