import ThemeToggle from './ThemeToggle';
import { Separator } from './Separator';
import { NAVLINK_ITEMS } from '@/constants/NavLink';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 ml-8 hidden h-screen w-fit pt-8 md:block lg:w-52">
      <div className="lg-w-52 m-auto flex w-full items-center justify-between md:flex-col lg:mb-12 lg:flex-row">
        <div className="flex items-center gap-4">
          <img
            src="https://utfs.io/f/12fca9d9-7b76-4c9e-9d0d-e3d87ffc6c1d-wh4i21.webp"
            alt="mgalihpp avatar"
            className="border__color size-11 rounded-full"
            loading="lazy"
          />

          <div className="hidden flex-col lg:flex">
            <h2 className="primary text-base font-medium md:text-lg">
              mgalihpp
            </h2>
            <p className="secondary text-sm md:text-base">-</p>
          </div>
        </div>
        <ThemeToggle />
      </div>

      <Separator className="my-8" />

      <nav>
        <ul className="space-y-4">
          {NAVLINK_ITEMS.map((item, index) => {
            const isRoot = item.pathname === '/';
            const isActivePage = isRoot
              ? pathname === '/'
              : pathname.startsWith(item.pathname) && pathname !== '/';

            return (
              <li key={index}>
                <Link
                  to={item.pathname}
                  className={`${
                    isActivePage
                      ? 'bg-gradient-linear text-primary-light hover:scale-100'
                      : 'primary hover:scale-[1.08]'
                  } flex w-fit items-center gap-4 rounded-md px-3 py-3 font-bold duration-200 ease-in-out hover:bg-neutral-200 dark:hover:bg-neutral-800 lg:w-full`}
                >
                  {item.icon}
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Sidebar;
