import type { CSSProperties, FC, ReactNode } from 'react';

interface MarqueeElementProps {
  direction?: 'left' | 'right' | 'up';
  speed?: number;
  children: ReactNode;
}

const Marquee: FC<MarqueeElementProps> = ({ children, direction = 'left', speed = 30 }) => {
  const animationName = direction === 'right' ? 'marquee-right' : 'marquee-left';
  const style: CSSProperties = {
    animationName,
    animationDuration: `${speed}s`,
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  };
  return (
    <div className="marquee-viewport py-3">
      <div className="marquee-track" style={style}>
        <div className="marquee-group">{children}</div>
        <div className="marquee-group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
