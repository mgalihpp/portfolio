import { createContext, useContext, useEffect, useState } from 'react';
import { en, type TranslationKey } from '@/constants/locales/en';
import { id } from '@/constants/locales/id';

export type Language = 'en' | 'id';

const TRANSLATIONS: Record<Language, Record<TranslationKey, string>> = {
  en,
  id,
};

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
  storageKey?: string;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
};

const initialState: LanguageProviderState = {
  language: 'en',
  setLanguage: () => null,
  t: (key) => en[key],
};

const LanguageProviderContext =
  createContext<LanguageProviderState>(initialState);

/** Falls back to English for anything that is not Indonesian. */
function detectBrowserLanguage(): Language {
  if (typeof navigator === 'undefined') return 'en';

  const languages = navigator.languages ?? [navigator.language];

  return languages.some((lang) => lang?.toLowerCase().startsWith('id'))
    ? 'id'
    : 'en';
}

export function LanguageProvider({
  children,
  defaultLanguage,
  storageKey = 'vite-ui-language',
  ...props
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem(storageKey) as Language | null;

    if (stored === 'en' || stored === 'id') return stored;

    return defaultLanguage ?? detectBrowserLanguage();
  });

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage: (language: Language) => {
      localStorage.setItem(storageKey, language);
      setLanguage(language);
    },
    t: (key: TranslationKey, params?: Record<string, string | number>) => {
      let text = TRANSLATIONS[language][key] ?? en[key];
      if (params) {
        Object.entries(params).forEach(([k, v]) => {
          text = text.replace(new RegExp(`\\{\\{${k}\\}\\}`, 'g'), String(v));
        });
      }
      return text;
    },
  };

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);

  if (context === undefined)
    throw new Error('useLanguage must be used within a LanguageProvider');

  return context;
};
