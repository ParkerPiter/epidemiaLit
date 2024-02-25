import { memo, SVGProps } from 'react';

const VectorIcon25 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 65 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M64.9023 9.60581C55.9534 9.0993 47.1712 10.3829 38.4376 12.1106C26.0703 14.553 14.2032 18.501 2.87116 24.0657C2.30143 24.3432 1.6761 24.5236 1.07163 24.7456C-0.832109 18.1679 1.34954 12.5339 7.36645 7.96832C13.4181 3.37503 20.2966 1.3698 27.7934 1.07145C40.1746 0.571874 52.2293 2.40364 64.0477 6.01861C64.3118 6.10187 64.6036 6.10186 64.8815 6.14349C64.8884 7.29529 64.8954 8.45402 64.9023 9.60581Z'
      fill='#60475A'
    />
  </svg>
);
const Memo = memo(VectorIcon25);
export { Memo as VectorIcon25 };
