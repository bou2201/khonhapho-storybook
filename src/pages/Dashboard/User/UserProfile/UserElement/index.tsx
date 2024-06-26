import { Typography } from '@/components/General';
import { ReactNode } from 'react';

type UserElementProps = {
  title: string;
  children: ReactNode;
};

const UserElement = ({ title, children }: UserElementProps) => {
  return (
    <div className="rounded-md bg-white dark:bg-primaryColorDark w-full">
      <Typography variant="h3" className="px-6 py-4 max-md:text-base">
        {title}
      </Typography>
      <hr className="w-full h-[0.5px] bg-textSecondaryDark dark:opacity-20" />
      <div className="p-5">{children}</div>
    </div>
  );
};

export default UserElement;
