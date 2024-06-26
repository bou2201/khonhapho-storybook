import SvgIcon, { TypeIcon } from '../SvgIcon';

const MessageIcon = ({
  color = '#333',
  height,
  width,
  viewBox = '0 0 20 20',
  className = '',
}: TypeIcon) => {
  return (
    <SvgIcon
      width={width}
      height={height}
      viewBox={viewBox}
      className={`[&>path]:fill-primaryButtonLight [&>path[data-path-2]]:fill-white ${className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 17.612C14.4873 17.612 18.125 14.0891 18.125 9.74348C18.125 5.39784 14.4873 1.875 10 1.875C5.51269 1.875 1.875 5.39784 1.875 9.74348C1.875 12.107 2.95105 14.2271 4.65461 15.6695V17.2617C4.65461 17.8841 5.2885 18.3015 5.85368 18.0513L7.62062 17.2692C8.37315 17.4921 9.17212 17.612 10 17.612Z"
        fill="url(#paint0_linear_1562_12848)"
      />
      <path
        d="M8.05438 8.07082L5.69827 11.2931C5.44565 11.6386 5.89996 12.0536 6.24584 11.7933L8.25767 10.2793C8.46246 10.1252 8.74951 10.1231 8.95668 10.2742L10.746 11.5795C11.0891 11.8298 11.5795 11.7578 11.8293 11.4205L14.3003 8.0838C14.5566 7.73775 14.0988 7.31934 13.7524 7.58303L11.6254 9.20225C11.4206 9.35818 11.132 9.36104 10.9239 9.20922L9.14041 7.90819C8.79584 7.65682 8.30314 7.73061 8.05438 8.07082Z"
        fill="white"
        data-path-2
      />
      <defs>
        <linearGradient
          id="paint0_linear_1562_12848"
          x1="10"
          y1="1.875"
          x2="7.39289"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color} />
          <stop offset="1" stopColor={color} />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};

export default MessageIcon;
