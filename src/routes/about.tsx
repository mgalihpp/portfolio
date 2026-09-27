import { createFileRoute } from '@tanstack/react-router';
import Contact from '@/components/About/Contact';
import Text from '@/components/About/Text';
import Education from '@/components/About/Education';
import PageTitle from '@/components/elements/PageTitle';
import { useLanguage } from '@/providers/LanguageProvider';

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
      <Text text={t('about.text')} />
      <Education />
      <Contact />
    </div>
  );
}
