import SocialLinks from '@/components/Contact/SocialLinks';
import PageTitle from '@/components/elements/PageTitle';
import { useLanguage } from '@/providers/LanguageProvider';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <>
      <div className='px-8 pb-5 pt-8'>
        <PageTitle
          title={t('page.contact.title')}
          description={t('page.contact.description')}
        />
        <SocialLinks />
      </div>
    </>
  );
};

export default Contact;
