import { memo, SVGProps } from 'react';

const VectorIcon24 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 38 45' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M37.985 44.16C32.665 44.16 27.335 44.15 22.015 44.16C18.895 44.17 15.895 43.56 12.975 42.52C5.67497 39.9 4.035 33.4 2.505 26.89C2.015 24.8 1.89497 22.63 1.59497 20.5C0.944967 19.9 0.664965 19.06 0.904965 18.3C2.84497 12.04 4.81498 5.76998 10.545 1.72998C18.085 0.419981 25.655 -0.260023 33.295 0.569977C34.935 0.749977 36.485 0.989994 37.995 0.149994C37.985 14.82 37.985 29.49 37.985 44.16Z'
      fill='#653521'
    />
  </svg>
);
const Memo = memo(VectorIcon24);
export { Memo as VectorIcon24 };
