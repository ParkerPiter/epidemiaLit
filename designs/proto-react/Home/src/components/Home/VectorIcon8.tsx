import { memo, SVGProps } from 'react';

const VectorIcon8 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 13 51' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.34231 50.9792C7.07778 35.3745 5.79938 19.7629 0.769075 4.78262C0.706543 4.60916 0.55369 4.44264 0.55369 4.26918C0.51895 2.99943 -0.168899 1.27175 1.33186 0.723611C3.04105 0.106084 3.78446 1.81292 4.22218 3.11042C5.43807 6.73232 6.63312 10.3751 7.57109 14.0802C10.5726 25.9173 12.3652 37.9557 12.9974 50.1605C13.0113 50.4311 12.9001 50.7016 12.8446 50.9722C11.3508 50.9792 9.85001 50.9792 8.34231 50.9792Z'
      fill='#F3F3F2'
    />
  </svg>
);
const Memo = memo(VectorIcon8);
export { Memo as VectorIcon8 };
