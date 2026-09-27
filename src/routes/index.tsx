import { Suspense, lazy } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import Hero from '@/components/Home/Hero';
import PageTitle from '@/components/elements/PageTitle';
import { SectionSkeleton } from '@/components/elements/SectionSkeleton';
import { useLanguage } from '@/providers/LanguageProvider';

const Career = lazy(() => import('@/components/Home/Career'));
const Stack = lazy(() => import('@/components/Home/Stack'));
const AiTools = lazy(() => import('@/components/Home/AiTools'));

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
      <Suspense fallback={<SectionSkeleton lines={3} />}>
        <Career />
      </Suspense>
      <Suspense fallback={<SectionSkeleton lines={4} />}>
        <Stack />
      </Suspense>
      <Suspense fallback={<SectionSkeleton lines={3} />}>
        <AiTools />
      </Suspense>
    </div>
  );
}
