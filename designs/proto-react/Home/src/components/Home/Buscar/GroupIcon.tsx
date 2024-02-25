import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 23' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.12701 0.0359337C6.54341 0.0898399 6.20386 0.14734 5.73875 0.269527C4.64405 0.557027 3.64309 1.08351 2.73232 1.85257C2.50418 2.04484 2.01254 2.54437 1.82331 2.77617C0.820578 4.00343 0.224598 5.41398 0.0636653 6.9539C-0.00176882 7.56484 -0.00884277 7.78226 0.0247585 8.19375C0.0424434 8.40578 0.0672023 8.66812 0.0813502 8.77773C0.267041 10.2476 0.863022 11.6222 1.81093 12.7758C1.99309 12.9986 2.41929 13.4352 2.65273 13.6419C3.69614 14.5637 4.94116 15.1728 6.30113 15.4262C7.02621 15.5609 7.96881 15.5807 8.70981 15.4783C9.82926 15.322 10.9823 14.8763 11.8949 14.2492C11.9656 14.2025 12.0399 14.1522 12.0611 14.1414C12.0982 14.1216 12.3387 14.3606 16.3921 18.4773C19.8071 21.9452 20.7002 22.8437 20.7709 22.8796C20.9088 22.9479 21.1105 23.0036 21.1936 22.9946C21.404 22.9713 21.5826 22.8886 21.7312 22.7412C21.8797 22.5957 21.9717 22.3998 21.9947 22.1806C22.0035 22.098 21.9505 21.8913 21.8815 21.7512C21.8461 21.6793 20.9707 20.7809 17.5859 17.3398C15.2479 14.9626 13.3344 13.013 13.3344 13.0058C13.3344 12.9986 13.3892 12.9303 13.4547 12.8512C15.3576 10.607 15.8421 7.46062 14.7014 4.74554C14.5158 4.30531 14.3159 3.92976 14.0312 3.49492C13.1629 2.16523 11.9161 1.13922 10.4606 0.558824C9.70724 0.256949 9.10064 0.11859 8.17926 0.0359337C7.71769 -0.00539448 7.58328 -0.00539448 7.12701 0.0359337ZM8.42685 1.69625C9.5799 1.86156 10.5632 2.28922 11.4598 3.01695C11.6685 3.18765 12.0558 3.56859 12.2379 3.78242C13.5767 5.36726 14.0294 7.47859 13.4653 9.4875C13.2654 10.1973 12.8728 10.9771 12.4254 11.5539C11.1928 13.1423 9.32878 14.0084 7.35868 13.906C5.27894 13.7982 3.42556 12.6266 2.38923 10.7687C2.04968 10.1595 1.79325 9.39226 1.69068 8.6789C1.59871 8.03922 1.61109 7.30429 1.72428 6.67539C2.15048 4.31968 3.91897 2.40961 6.2074 1.83281C6.51688 1.75375 6.82283 1.70343 7.22428 1.6639C7.39051 1.64773 8.24116 1.67109 8.42685 1.69625Z'
      fill='#F2F2F2'
    />
  </svg>
);
const Memo = memo(GroupIcon);
export { Memo as GroupIcon };
