import Contact from '@/components/About/Contact';
import Text from '@/components/About/Text';
import PageTitle from '@/components/elements/PageTitle';

const About = () => {
  return (
    <>
      <div className='px-8 pb-5 pt-8'>
        <PageTitle
          title='About'
          description='Introduction and Professional Career mgalihpp'
        />
        <Text
          text={`Hi! I'm Galih. 
            I started learning web development at the beginning of the pandemic. 
            With not much else to do, I decided to begin my web development 
            journey through web development forums. After that, 
            I started watching various YouTube videos to delve deeper 
            into web development, especially in terms of frontend development.`}
        />
        <Contact />
      </div>
    </>
  );
};

export default About;
