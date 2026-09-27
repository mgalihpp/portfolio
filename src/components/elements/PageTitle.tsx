import { motion } from 'framer-motion';
import Meta from './Meta';
import { Separator } from '@/components/Separator';

type PageTitleProps = {
  title: string;
  description: string;
};

const PageTitle = (props: PageTitleProps) => {
  return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}>
      <Meta title={props.title} description={props.description} />

      <h1 className='primary text-xl font-bold md:text-2xl'>{props.title}</h1>
      <p className='secondary mt-2 leading-relaxed md:mb-14 md:text-lg lg:mb-0'>
        {props.description}
      </p>

      <Separator className='my-8' />
    </motion.div>
  );
};

export default PageTitle;
