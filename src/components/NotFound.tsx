import { Link } from '@tanstack/react-router';
import { useLanguage } from '@/providers/LanguageProvider';

export function NotFound() {
  const { t } = useLanguage();
  return (
    <div className="grid min-h-[60vh] place-content-center px-4">
      <div className="text-center">
        <h1 className="primary mt-6 text-2xl font-bold tracking-tight sm:text-4xl">
          {t('error.uhOh')}
        </h1>
        <p className="primary mt-4">{t('error.notFound')}</p>
      </div>
      <div className="flex justify-center">
        <Link
          to="/"
          aria-current="page"
          aria-label={t('error.goToHome')}
          className="mt-8 cursor-pointer rounded-md bg-neutral-950 px-3 py-2 text-sm text-white shadow-lg shadow-neutral-500/20 transition active:scale-95 dark:bg-neutral-100 dark:text-neutral-900"
        >
          {t('error.backToHome')}
        </Link>
      </div>
    </div>
  );
}
