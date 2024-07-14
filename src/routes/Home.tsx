import PageTitle from '@/components/elements/PageTitle';
import Hero from '@/components/Hero';

const Home = () => {
  return (
    <>
      <div className='px-8 pb-5 pt-8'>
        <PageTitle
          title='Home'
          description='Introduction and Professional Career mgalihpp'
        />
        <Hero />
      </div>
    </>
  );
};

export default Home;
