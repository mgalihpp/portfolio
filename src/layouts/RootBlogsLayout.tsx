import { Outlet } from 'react-router-dom';

const RootBlogsLayout = () => {
  return (
    <div className='px-8 pb-5 pt-8'>
      <Outlet />
    </div>
  );
};

export default RootBlogsLayout;
