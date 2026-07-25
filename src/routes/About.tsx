import Contact from '@/components/About/Contact';
import Text from '@/components/About/Text';
import Education from '@/components/About/Education';
import PageTitle from '@/components/elements/PageTitle';
import { useLanguage } from '@/providers/LanguageProvider';

const About = () => {
  const { t } = useLanguage();

  return (
    <>
      <div className='px-8 pb-5 pt-8'>
        <PageTitle
          title={t('page.about.title')}
          description={t('page.about.description')}
        />
        <Text text={t('about.text')} />
        <Education />
        <Contact />
      </div>
    </>
  );
};

export default About;
