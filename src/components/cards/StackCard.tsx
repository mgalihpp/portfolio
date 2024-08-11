import React from 'react';

type StackCardProps = {
  name: string;
  icon: JSX.Element;
};

const StackCard: React.FC<StackCardProps> = ({ name, icon }) => {
  return (
    <div className='px-2'>
      <div className='border__gradient flex w-full items-center gap-2 rounded-md px-4 py-2 text-sm font-medium md:text-base'>
        {icon}
        {name}
      </div>
    </div>
  );
};

export default StackCard;
