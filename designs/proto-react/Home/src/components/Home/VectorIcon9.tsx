import { memo, SVGProps } from 'react';

const VectorIcon9 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 19' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3.51737 18.9792C2.53772 13.7337 1.55805 8.4882 0.57839 3.23575C0.397743 2.26436 0.30047 1.30678 1.48857 0.918228C2.46128 0.599056 3.0588 1.14726 3.54515 1.93825C6.87321 7.35723 10.0693 12.8455 11.966 18.9792C9.14519 18.9792 6.33129 18.9792 3.51737 18.9792Z'
      fill='#010202'
    />
  </svg>
);
const Memo = memo(VectorIcon9);
export { Memo as VectorIcon9 };
