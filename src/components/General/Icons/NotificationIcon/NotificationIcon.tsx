import SvgIcon, { TypeIcon } from '../SvgIcon';

const NotificationIcon = ({ color = '#333', width, height, viewBox = '0 0 20 20' }: TypeIcon) => {
  return (
    <SvgIcon
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.32813 16.5053H12.0765C12.0087 17.8122 11.1665 18.6447 10.0048 18.6447C8.83347 18.6447 8.00095 17.8122 7.92351 16.5053H6.41336C6.4908 18.364 7.95254 20 10.0048 20C12.0474 20 13.5092 18.364 13.5866 16.5053H17.6718C18.5914 16.5053 19.1336 16.031 19.1336 15.334C19.1336 14.3659 18.1558 13.4947 17.3137 12.6331C16.6747 11.9651 16.5005 10.5905 16.4327 9.47726C16.3553 5.66311 15.3775 3.19455 12.7928 2.26522C12.4734 1.00678 11.4279 0 10.0048 0C8.5721 0 7.53628 1.00678 7.20713 2.26522C4.63214 3.19455 3.64469 5.66311 3.57695 9.47726C3.49951 10.5905 3.33491 11.9651 2.68632 12.6331C1.8538 13.4947 0.866394 14.3659 0.866394 15.334C0.866394 16.031 1.41817 16.5053 2.32813 16.5053ZM2.7541 15.0436V14.9274C2.92836 14.637 3.49951 14.0755 4.01258 13.5044C4.69987 12.7299 5.02902 11.4908 5.11613 9.59341C5.19358 5.3727 6.45206 4.01741 8.1171 3.57211C8.35914 3.51404 8.48499 3.38819 8.49465 3.14615C8.5334 2.1297 9.10454 1.42304 10.0048 1.42304C10.8954 1.42304 11.4763 2.1297 11.5053 3.14615C11.515 3.38819 11.6505 3.51404 11.8925 3.57211C13.5479 4.01741 14.8064 5.3727 14.8935 9.59341C14.971 11.4908 15.3001 12.7299 15.9971 13.5044C16.5005 14.0755 17.0813 14.637 17.2556 14.9274V15.0436H2.7541Z"
        fill={color}
      />
    </SvgIcon>
  );
};

export default NotificationIcon;