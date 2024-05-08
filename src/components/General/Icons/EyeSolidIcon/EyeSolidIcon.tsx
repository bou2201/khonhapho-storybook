import SvgIcon, { TypeIcon } from '../SvgIcon';

const EyeSolidIcon = ({ color = '#333', width, height, viewBox }: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox}>
      <path
        d="M6.18759 8C6.18759 8.46413 6.37196 8.90925 6.70015 9.23744C7.02834 9.56563 7.47346 9.75 7.93759 9.75C8.40172 9.75 8.84684 9.56563 9.17503 9.23744C9.50322 8.90925 9.68759 8.46413 9.68759 8C9.68759 7.53587 9.50322 7.09075 9.17503 6.76256C8.84684 6.43437 8.40172 6.25 7.93759 6.25C7.47346 6.25 7.02834 6.43437 6.70015 6.76256C6.37196 7.09075 6.18759 7.53587 6.18759 8ZM14.722 7.59688C13.2407 4.47656 11.0017 2.90625 8.00009 2.90625C4.99697 2.90625 2.75947 4.47656 1.27822 7.59844C1.2188 7.72425 1.18799 7.86165 1.18799 8.00078C1.18799 8.13991 1.2188 8.27732 1.27822 8.40312C2.75947 11.5234 4.99853 13.0938 8.00009 13.0938C11.0032 13.0938 13.2407 11.5234 14.722 8.40156C14.8423 8.14844 14.8423 7.85469 14.722 7.59688ZM7.93759 10.75C6.41884 10.75 5.18759 9.51875 5.18759 8C5.18759 6.48125 6.41884 5.25 7.93759 5.25C9.45634 5.25 10.6876 6.48125 10.6876 8C10.6876 9.51875 9.45634 10.75 7.93759 10.75Z"
        fill={color}
      />
    </SvgIcon>
  );
};

export default EyeSolidIcon;