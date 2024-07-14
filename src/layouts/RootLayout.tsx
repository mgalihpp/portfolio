import MobileSideBar from '@/components/MobileSidebar';
import Sidebar from '@/components/Sidebar';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className='md:flex lg:m-auto lg:max-w-5xl lg:justify-center'>
      <Sidebar />
      <MobileSideBar />

      <div className='w-full lg:max-w-3xl'>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
