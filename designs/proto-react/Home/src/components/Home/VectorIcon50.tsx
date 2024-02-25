import { memo, SVGProps } from 'react';

const VectorIcon50 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 35 26' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M33.2199 0.822266C34.3594 3.61848 33.6229 6.58122 33.9356 9.45376C34.415 13.9152 35.1654 18.3975 34.818 22.9214C24.403 25.2527 13.9464 26.4739 3.36464 24.0107C2.42667 17.4261 1.4887 10.8484 0.543781 4.26373C1.25247 5.4294 2.44751 5.84574 3.64256 5.90125C12.5984 6.35226 21.5404 7.01831 30.5102 5.60286C33.0184 5.20737 33.4423 4.29842 33.1365 2.21687C33.074 1.77974 33.1852 1.29408 33.2199 0.822266Z'
      fill='#A9A8AC'
    />
  </svg>
);
const Memo = memo(VectorIcon50);
export { Memo as VectorIcon50 };
