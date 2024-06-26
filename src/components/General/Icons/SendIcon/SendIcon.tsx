import SvgIcon, { TypeIcon } from '../SvgIcon';

const SendIcon = ({
  color = '#333',
  width,
  height,
  viewBox = '0 0 24 24',
  className = '',
}: TypeIcon) => {
  return (
    <SvgIcon
      width={width}
      height={height}
      viewBox={viewBox}
      className={`dark:[&>g>path]:fill-white ${className}`}
    >
      <g clipPath="url(#clip0_380_18325)">
        <path
          d="M22.3314 12.1544C22.3407 11.4377 21.9525 10.779 21.322 10.4332L6.63011 2.3611C5.97206 1.98918 5.19633 2.03487 4.57625 2.4583C3.9448 2.88885 3.6216 3.91379 3.79812 4.65406L5.16967 10.4003C5.31047 10.9896 5.83783 11.4045 6.44453 11.4019L14.6205 11.3765C15.0392 11.3681 15.3788 11.7077 15.3704 12.1263C15.3691 12.5379 15.0345 12.8724 14.6159 12.8808L6.43208 12.8998C5.82538 12.901 5.29544 13.3178 5.15098 13.9079L3.73093 19.677C3.55851 20.3588 3.75509 21.0394 4.23612 21.5204C4.29271 21.577 4.35637 21.6406 4.42008 21.6901C5.04303 22.1707 5.85887 22.232 6.55542 21.8609L21.2971 13.8677C21.9297 13.5323 22.322 12.8711 22.3314 12.1544Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_380_18325">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default SendIcon;
