import { createFileRoute } from '@tanstack/react-router';
import SocialLinks from '@/components/Contact/SocialLinks';
import PageTitle from '@/components/elements/PageTitle';
import { useLanguage } from '@/providers/LanguageProvider';

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [{ title: 'Contact | mgalihpp' }, { name: 'description', content: 'Contact mgalihpp.' }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLanguage();
  return (
    <div className="px-8 pb-5 pt-8">
      <PageTitle title={t('page.contact.title')} description={t('page.contact.description')} />
      <SocialLinks />
    </div>
  );
}
