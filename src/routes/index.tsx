import { createFileRoute } from '@tanstack/react-router';
import Career from '@/components/Home/Career';
import Hero from '@/components/Home/Hero';
import Stack from '@/components/Home/Stack';
import AiTools from '@/components/Home/AiTools';
import PageTitle from '@/components/elements/PageTitle';
import { useLanguage } from '@/providers/LanguageProvider';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'mgalihpp | Fullstack Developer' },
      { name: 'description', content: 'Portfolio of mgalihpp.' },
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
