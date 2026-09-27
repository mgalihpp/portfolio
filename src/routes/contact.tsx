import { createFileRoute } from '@tanstack/react-router';
import SocialLinks from '@/components/Contact/SocialLinks';
import PageTitle from '@/components/elements/PageTitle';
import { useLanguage } from '@/providers/LanguageProvider';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/contact')({
  head: () =>
    pageHead({
      title: 'Contact | mgalihpp',
      description:
        'Get in touch with Muhammad Galih Pratama Putra through social links and contact channels.',
      path: '/contact',
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
