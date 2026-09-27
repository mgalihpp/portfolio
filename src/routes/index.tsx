import { createFileRoute } from '@tanstack/react-router';
import Career from '@/components/Home/Career';
import Hero from '@/components/Home/Hero';
import Stack from '@/components/Home/Stack';
import AiTools from '@/components/Home/AiTools';
import PageTitle from '@/components/elements/PageTitle';
import { useLanguage } from '@/providers/LanguageProvider';
import { SITE_URL, pageHead } from '@/lib/seo';

export const Route = createFileRoute('/')({
  head: () => ({
    ...pageHead({
      title: 'mgalihpp | Fullstack Developer',
      description:
        'Portfolio of Muhammad Galih Pratama Putra, a fullstack developer working with React, TypeScript, and modern web technologies.',
      path: '/',
    }),
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'mgalihpp',
          url: SITE_URL,
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useLanguage();
  return (
    <div className="px-8 pb-5 pt-8">
      <PageTitle title={t('page.home.title')} description={t('page.home.description')} />
      <Hero />
      <Career />
      <Stack />
      <AiTools />
    </div>
  );
}
