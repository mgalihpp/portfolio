import { createFileRoute } from '@tanstack/react-router';
import Contact from '@/components/About/Contact';
import Text from '@/components/About/Text';
import Education from '@/components/About/Education';
import PageTitle from '@/components/elements/PageTitle';
import { useLanguage } from '@/providers/LanguageProvider';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/about')({
  head: () =>
    pageHead({
      title: 'About | mgalihpp',
      description:
        'Learn more about Muhammad Galih Pratama Putra, his background, education, and experience as a fullstack developer.',
      path: '/about',
    }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLanguage();
  return (
    <div className="px-8 pb-5 pt-8">
      <PageTitle title={t('page.about.title')} description={t('page.about.description')} />
      <Text text={t('about.text')} />
      <Education />
      <Contact />
    </div>
  );
}
