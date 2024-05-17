import SvgIcon, { TypeIcon } from '../SvgIcon';

const LikeIcon = ({
  color = '#333',
  width,
  height,
  viewBox = '0 0 11 10',
  className = '',
}: TypeIcon) => {
  return (
    <SvgIcon
      width={width}
      height={height}
      viewBox={viewBox}
      className={`dark:[&>path]:stroke-white ${className}`}
    >
      <path
        d="M9.19203 1.63535L9.18495 1.62898L9.17764 1.62289C8.82712 1.33079 8.41279 1.1316 7.9717 1.0514L7.9717 1.05139L7.96793 1.05073C7.51397 0.971782 7.08076 1.01276 6.65943 1.14682L6.64973 1.1499L6.64016 1.15338C6.24777 1.29607 5.87373 1.51272 5.56305 1.82713C5.24798 1.5213 4.89296 1.30074 4.48772 1.15338L4.47815 1.1499L4.46845 1.14682C4.04852 1.0132 3.59851 0.971332 3.15807 1.05106C2.69477 1.13199 2.29653 1.33431 1.95024 1.62289L1.95021 1.62285L1.94494 1.62737C1.54136 1.9733 1.26377 2.38677 1.10662 2.87787L1.10659 2.87786L1.10495 2.88321C0.955991 3.36732 0.912552 3.85754 1.03169 4.37379C1.14795 4.8776 1.38428 5.31251 1.75408 5.68331L4.8284 8.85321C5.03363 9.08416 5.30496 9.17415 5.56394 9.17415C5.8276 9.17415 6.08179 9.07126 6.28523 8.86782L6.28528 8.86788L6.29147 8.86147L9.37429 5.66683C9.72976 5.31012 9.96463 4.87463 10.0802 4.37379L9.59301 4.26136L10.0802 4.37379C10.1965 3.87005 10.1761 3.38085 10.0229 2.88321L10.023 2.8832L10.0213 2.87787C9.86135 2.37816 9.56423 1.97034 9.19203 1.63535Z"
        stroke={color}
      />
    </SvgIcon>
  );
};

export default LikeIcon;
