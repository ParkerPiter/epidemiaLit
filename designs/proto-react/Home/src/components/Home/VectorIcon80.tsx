import { memo, SVGProps } from 'react';

const VectorIcon80 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 13 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.1611 5.93867C10.3268 3.62814 8.60377 1.47718 5.57447 2.44857C2.7814 3.35058 1.91984 5.69586 1.91984 9.01941C0.481621 6.48685 0.780372 4.53713 1.99626 2.69149C3.42754 0.505859 5.66478 0.0825591 7.95065 0.644579C10.4033 1.24823 11.8276 3.00368 12.1611 5.93867Z'
      fill='#7E7D7F'
    />
  </svg>
);
const Memo = memo(VectorIcon80);
export { Memo as VectorIcon80 };
