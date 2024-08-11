import Career from '@/components/Home/Career';
import PageTitle from '@/components/elements/PageTitle';
import Hero from '@/components/Home/Hero';
import Stack from '@/components/Home/Stack';

const Home = () => {
  return (
    <div className='px-8 pb-5 pt-8'>
      <PageTitle
        title='Home'
        description='Introduction and Professional Career mgalihpp'
      />
      <Hero />
      <Career />
      <Stack />
    </div>
  );
};

export default Home;
