import Contact from '@/components/About/Contact';
import Text from '@/components/About/Text';
import Education from '@/components/About/Education';
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
          text={`Halo! Saya Galih, mahasiswa Sistem Informasi di Universitas Gunadarma.
            Saya mulai belajar web development di awal pandemi, berangkat dari forum-forum
            web development lalu mendalaminya lewat berbagai video, terutama di sisi frontend.
            Kini saya banyak membangun aplikasi web dengan React.js dan Next.js,
            sekaligus mendampingi peserta pelatihan dan sertifikasi sebagai asisten laboratorium.`}
        />
        <Education />
        <Contact />
      </div>
    </>
  );
};

export default About;
