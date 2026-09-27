import type { FC, ReactNode } from 'react';

interface MarqueeElementProps {
  direction?: 'left' | 'right' | 'up';
  children: ReactNode;
}

const Marquee: FC<MarqueeElementProps> = ({ children }) => {
  return <div className="py-3 overflow-hidden">{children}</div>;
};

export default Marquee;
