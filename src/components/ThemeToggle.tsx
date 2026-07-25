import * as React from 'react';
import { flushSync } from 'react-dom';
import { useTheme } from '../providers/ThemeProvider';
import { useLanguage } from '@/providers/LanguageProvider';

export default function ThemeToggle() {
  const { t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!document.startViewTransition) {
      setTheme(theme === 'dark' ? 'light' : 'dark');
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    );

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      });
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)',
        },
      );
    });
  };

  return (
    <button
      className='grid size-10 place-items-center rounded-full transition duration-200 hover:scale-110 hover:bg-neutral-200 dark:hover:bg-neutral-800 active:scale-95'
      onClick={handleClick}
      aria-label={t('common.themeButton')}
    >
      {mounted ? (
        <>
          {theme === 'light' ? (
            <span className='text-2xl'>🌕</span>
          ) : (
            <span className='text-2xl'>🌤️</span>
          )}
        </>
      ) : (
        <span className='text-2xl'>🌤️</span>
      )}
    </button>
  );
}
