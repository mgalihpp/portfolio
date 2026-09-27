import { Suspense, lazy } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import PageTitle from '@/components/elements/PageTitle';
import { SectionSkeleton } from '@/components/elements/SectionSkeleton';
import { useLanguage } from '@/providers/LanguageProvider';

const Text = lazy(() => import('@/components/About/Text'));
const Education = lazy(() => import('@/components/About/Education'));
const Contact = lazy(() => import('@/components/About/Contact'));

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [{ title: 'About | mgalihpp' }, { name: 'description', content: 'About mgalihpp.' }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLanguage();
  return (
    <div className="px-8 pb-5 pt-8">
      <PageTitle title={t('page.about.title')} description={t('page.about.description')} />
      <Suspense fallback={<SectionSkeleton lines={2} />}>
        <Text text={t('about.text')} />
      </Suspense>
      <Suspense fallback={<SectionSkeleton lines={3} />}>
        <Education />
      </Suspense>
      <Suspense fallback={<SectionSkeleton lines={2} />}>
        <Contact />
      </Suspense>
    </div>
  );
}
