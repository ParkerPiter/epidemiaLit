import { memo, SVGProps } from 'react';

const GroupIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M60.7507 38.8987L31.4173 18.8987C31.008 18.6213 30.48 18.5907 30.0427 18.8213C29.6067 19.052 29.3333 19.5053 29.3333 20V60C29.3333 60.4947 29.6067 60.948 30.044 61.1787C30.2387 61.2827 30.4533 61.3333 30.6667 61.3333C30.9293 61.3333 31.192 61.2547 31.4173 61.1013L60.7507 41.1013C61.1147 40.8533 61.3333 40.4413 61.3333 40C61.3333 39.5587 61.1147 39.1467 60.7507 38.8987ZM32 57.476V22.524L57.6333 40L32 57.476Z'
      fill='#F4BECE'
    />
    <path
      d='M40 0C17.944 0 0 17.944 0 40C0 62.056 17.944 80 40 80C62.056 80 80 62.056 80 40C80 17.944 62.056 0 40 0ZM40 77.3333C19.4147 77.3333 2.66667 60.5853 2.66667 40C2.66667 19.4147 19.4147 2.66667 40 2.66667C60.5853 2.66667 77.3333 19.4147 77.3333 40C77.3333 60.5853 60.5853 77.3333 40 77.3333Z'
      fill='#F4BECE'
    />
  </svg>
);
const Memo = memo(GroupIcon2);
export { Memo as GroupIcon2 };
