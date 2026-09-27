import { Outlet } from '@tanstack/react-router';

const RootBlogsLayout = () => {
  return (
    <div className='px-8 pb-5 pt-8'>
      <Outlet />
    </div>
  );
};

export default RootBlogsLayout;
