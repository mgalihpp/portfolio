import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { Separator } from './Separator';
import { NAVLINK_ITEMS } from '@/constants/NavLink';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/providers/LanguageProvider';

const Sidebar = () => {
  const { pathname } = useLocation();
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 ml-8 hidden h-screen w-fit pt-8 md:flex md:flex-col lg:w-52">
      <div className="flex items-center gap-4">
        <img
          src="/my.jpg"
          alt="mgalihpp avatar"
          className="border__color size-11 rounded-full"
          loading="lazy"
        />

        <div className="hidden flex-col lg:flex">
          <h2 className="primary text-base font-medium md:text-lg">
            mgalihpp
          </h2>
          <p className="gradient__text text-sm md:text-base">
            {t('common.role')}
          </p>
        </div>
      </div>

      <Separator className="my-8" />

      <nav className="flex-1">
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
                  <span className="hidden lg:block">{t(item.labelKey)}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex items-center justify-center gap-2 pb-8">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Sidebar;
