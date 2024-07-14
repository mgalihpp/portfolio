import * as React from 'react';
import { useTheme } from '../providers/ThemeProvider';

export default function ThemeToggle() {
  const {
    theme,
    setTheme,
  } = useTheme();
  const [
    mounted,
    setMounted,
  ] =
    React.useState(
      false,
    );
  React.useEffect(
    () =>
      setMounted(
        true,
      ),
    [],
  );

  return (
    <button
      className='grid size-10 place-items-center rounded-full md:mb-8 md:mt-8 md:h-0 lg:mt-0'
      onClick={() =>
        setTheme(
          theme ===
            'dark'
            ? 'light'
            : 'dark',
        )
      }
      aria-label='Theme Button'
    >
      {mounted ? (
        <>
          {theme ===
          'light' ? (
            <span className='text-2xl'>
              🌕
            </span>
          ) : (
            <span className='text-2xl'>
              🌤️
            </span>
          )}
        </>
      ) : (
        <span className='text-2xl'>
          🌤️
        </span>
      )}
    </button>
  );
}
