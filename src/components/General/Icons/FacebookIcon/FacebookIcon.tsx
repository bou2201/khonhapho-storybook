import SvgIcon, { TypeIcon } from '../SvgIcon';

const FacebookIcon = ({ color = '#333', width, height, viewBox, className = '' }: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} className={className}>
      <path
        d="M13.75 1.75H2.25C1.97344 1.75 1.75 1.97344 1.75 2.25V13.75C1.75 14.0266 1.97344 14.25 2.25 14.25H13.75C14.0266 14.25 14.25 14.0266 14.25 13.75V2.25C14.25 1.97344 14.0266 1.75 13.75 1.75ZM12.3062 5.39844H11.3078C10.525 5.39844 10.3734 5.77031 10.3734 6.31719V7.52187H12.2422L11.9984 9.40781H10.3734V14.25H8.425V9.40938H6.79531V7.52187H8.425V6.13125C8.425 4.51719 9.41094 3.6375 10.8516 3.6375C11.5422 3.6375 12.1344 3.68906 12.3078 3.7125V5.39844H12.3062Z"
        fill={color}
      />
    </SvgIcon>
  );
};

export default FacebookIcon;
