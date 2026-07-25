import { useLanguage } from '@/providers/LanguageProvider';

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <button
      className='primary grid size-10 place-items-center rounded-full text-sm font-bold transition duration-200 hover:bg-neutral-200 dark:hover:bg-neutral-800 active:scale-95'
      onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
      aria-label={t('language.toggle')}
      title={t('language.toggle')}
    >
      {language === 'en' ? 'EN' : 'ID'}
    </button>
  );
}
