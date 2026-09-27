import React from 'react';
import { Link } from '@tanstack/react-router';
import { useLanguage } from '@/providers/LanguageProvider';

export function ErrorBoundary({ error }: { error?: unknown }) {
  const { t } = useLanguage();
  let message = t('error.default');
  if (error instanceof Error && error.message) message = error.message;
  return <Template>{message}</Template>;
}

const Template = (props: React.PropsWithChildren) => {
  const { t } = useLanguage();
  return (
    <div className="grid h-screen place-content-center px-4">
      <div className="text-center">
        <h1 className="mt-6 text-2xl font-bold tracking-tight primary sm:text-4xl">
          {t('error.uhOh')}
        </h1>
        <p className="mt-4 primary">{props.children}</p>
      </div>
      <div className="flex justify-center">
        <Link
          to="/"
          aria-current="page"
          aria-label={t('error.goToHome')}
          className="cursor-pointer rounded-md bg-neutral-950 px-3 py-2 text-sm text-white shadow-lg shadow-neutral-500/20 transition active:scale-95 dark:bg-neutral-100 dark:text-neutral-900 mt-8"
        >
          {t('error.backToHome')}
        </Link>
      </div>
    </div>
  );
};
