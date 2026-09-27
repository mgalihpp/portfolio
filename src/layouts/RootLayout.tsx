import Footer from '@/components/Footer';
import MobileSideBar from '@/components/MobileSidebar';
import { PostHogPageView } from '@/components/PostHogPageView';
import Sidebar from '@/components/Sidebar';
import TopLoadingBar from '@/components/TopLoadingBar';
import { Outlet } from '@tanstack/react-router';

const RootLayout = () => {
  return (
    <>
      <PostHogPageView />
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
      
    </>
  );
};

export default RootLayout;
