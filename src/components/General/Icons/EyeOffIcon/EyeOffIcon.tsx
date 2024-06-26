import SvgIcon, { TypeIcon } from '../SvgIcon';

const EyeOffIcon = ({ color = '#333', width, height, viewBox, className = '' }: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} className={className}>
      <g clipPath="url(#clip0_579_90495)">
        <path
          d="M11.9593 11.9594C10.8197 12.828 9.43209 13.3093 7.99935 13.3327C3.33268 13.3327 0.666016 7.99937 0.666016 7.99937C1.49528 6.45396 2.64544 5.10377 4.03935 4.03937M6.59935 2.82603C7.05824 2.71862 7.52806 2.66492 7.99935 2.66603C12.666 2.66603 15.3327 7.99937 15.3327 7.99937C14.928 8.75644 14.4454 9.46919 13.8927 10.126M9.41268 9.4127C9.22958 9.6092 9.00878 9.7668 8.76345 9.87612C8.51812 9.98543 8.25328 10.0442 7.98474 10.0489C7.7162 10.0537 7.44946 10.0043 7.20042 9.90369C6.95139 9.8031 6.72516 9.65339 6.53525 9.46347C6.34533 9.27355 6.19561 9.04733 6.09502 8.79829C5.99443 8.54926 5.94503 8.28251 5.94977 8.01397C5.95451 7.74543 6.01329 7.4806 6.1226 7.23526C6.23191 6.98993 6.38952 6.76913 6.58602 6.58603"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.666016 0.666016L15.3327 15.3327"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_579_90495">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default EyeOffIcon;
