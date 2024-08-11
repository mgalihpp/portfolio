import { FC } from 'react';
import ReactFastMarquee from 'react-fast-marquee';

interface MarqueeElementProps {
  direction?: 'left' | 'right' | 'up';
  children: React.ReactNode;
}

const Marquee: FC<MarqueeElementProps> = ({ children, direction }) => {
  return <ReactFastMarquee direction={direction} speed={50} className='py-3'>{children}</ReactFastMarquee>;
};

export default Marquee;
