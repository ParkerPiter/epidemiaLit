import { memo, SVGProps } from 'react';

const VectorIcon8 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 21 51' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20.725 7.98012C16.145 8.57012 12.035 6.48004 7.70503 5.65004C4.98503 5.12004 3.93502 5.5201 4.62502 8.8401C7.47502 22.6101 8.93498 36.6 10.835 50.53C9.48498 50.53 8.13499 50.53 6.78499 50.53C6.70499 35.98 4.20503 21.7201 1.63503 7.47011C1.21503 5.11011 -0.555012 1.89012 0.844988 0.610122C2.35499 -0.769878 5.19502 1.50001 7.37502 2.37001C11.855 4.16001 16.275 6.10012 20.725 7.98012Z'
      fill='#96969A'
    />
  </svg>
);
const Memo = memo(VectorIcon8);
export { Memo as VectorIcon8 };
