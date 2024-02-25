import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 201 207' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M65.115 0.323412C59.783 0.808569 56.6807 1.32607 52.4313 2.42576C42.4297 5.01326 33.2846 9.75162 24.9634 16.6732C22.8791 18.4036 18.3873 22.8994 16.6584 24.9855C7.4971 36.0309 2.05201 48.7258 0.581669 62.5851C-0.0161605 68.0836 -0.0807908 70.0404 0.226203 73.7437C0.387778 75.652 0.613984 78.0131 0.743245 78.9996C2.43979 92.2282 7.88489 104.6 16.5453 114.982C18.2096 116.987 22.1035 120.917 24.2363 122.777C33.7693 131.073 45.1442 136.555 57.5694 138.836C64.194 140.048 72.806 140.226 79.576 139.305C89.8037 137.898 100.338 133.887 108.676 128.243C109.322 127.822 110.001 127.37 110.195 127.273C110.534 127.095 112.731 129.246 149.764 166.295C180.965 197.507 189.124 205.593 189.771 205.916C191.031 206.531 192.873 207.032 193.632 206.951C195.555 206.741 197.187 205.997 198.544 204.671C199.901 203.361 200.741 201.599 200.952 199.626C201.032 198.882 200.548 197.022 199.917 195.761C199.594 195.114 191.596 187.028 160.671 156.059C139.31 134.663 121.828 117.117 121.828 117.052C121.828 116.987 122.329 116.373 122.927 115.661C140.312 95.4626 144.739 67.1456 134.318 42.7099C132.621 38.7478 130.795 35.3679 128.194 31.4543C120.261 19.4871 108.87 10.2529 95.572 5.02943C88.6888 2.31255 83.1468 1.06732 74.7287 0.323412C70.5116 -0.0485407 69.2836 -0.0485407 65.115 0.323412ZM76.9908 15.2662C87.5255 16.754 96.5091 20.6029 104.701 27.1526C106.608 28.6889 110.146 32.1173 111.81 34.0418C124.042 48.3054 128.178 67.3073 123.024 85.3875C121.198 91.7754 117.611 98.794 113.523 103.985C102.261 118.281 85.2311 126.076 67.2316 125.154C48.2303 124.184 31.2972 113.64 21.8289 96.918C18.7266 91.4358 16.3838 84.5304 15.4466 78.1101C14.6064 72.353 14.7195 65.7387 15.7536 60.0785C19.6476 38.8772 35.8051 21.6865 56.713 16.4953C59.5406 15.7837 62.3359 15.3309 66.0036 14.9751C67.5224 14.8296 75.2942 15.0398 76.9908 15.2662Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(GroupIcon);
export { Memo as GroupIcon };