import SocialLinks from '@/components/Contact/SocialLinks';
import PageTitle from '@/components/elements/PageTitle';

const Contact = () => {
  return (
    <>
      <div className='px-8 pb-5 pt-8'>
        <PageTitle title='Contact' description='Reach me out.' />
        <SocialLinks />
      </div>
    </>
  );
};

export default Contact;
