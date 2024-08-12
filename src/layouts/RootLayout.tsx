import Footer from '@/components/Footer';
import MobileSideBar from '@/components/MobileSidebar';
import Sidebar from '@/components/Sidebar';
import TopLoadingBar from '@/components/TopLoadingBar';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <div className="md:flex lg:m-auto lg:max-w-5xl lg:justify-center">
        <Sidebar />
        <MobileSideBar />

        <div className="w-full lg:max-w-3xl">
          <main>
            <Outlet />
          </main>

          <Footer />
        </div>
      </div>

      <TopLoadingBar />
      <ScrollRestoration
        getKey={(location) => {
          const paths = ['/', '/about', '/contact', '/projects', '/blog'];

          return paths.includes(location.pathname)
            ? location.pathname
            : location.key;
        }}
      />
    </>
  );
};

export default RootLayout;
