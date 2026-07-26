import Career from '@/components/Home/Career';
import PageTitle from '@/components/elements/PageTitle';
import Hero from '@/components/Home/Hero';
import Stack from '@/components/Home/Stack';
import AiTools from '@/components/Home/AiTools';
import { useLanguage } from '@/providers/LanguageProvider';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className='px-8 pb-5 pt-8'>
      <PageTitle
        title={t('page.home.title')}
        description={t('page.home.description')}
      />
      <Hero />
      <Career />
      <Stack />
      <AiTools />
    </div>
  );
};

export default Home;
