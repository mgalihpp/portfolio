// import DonateBox from "@/components/elements/DonateBox";
import { extractHeadings } from '@/lib/utils';
import clsx from 'clsx';
import * as React from 'react';

interface AsideProps {
  content: BlockType[];
}

export default function Aside({ content }: AsideProps) {
  const headings = extractHeadings(content);
  const [activeHeading, setActiveHeading] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map((heading) => ({
        id: heading.headingId,
        element: document.getElementById(heading.headingId),
      }));

      const currentHeading = headingElements.find((headingElement) => {
        const rect = headingElement.element?.getBoundingClientRect();
        return rect && rect.top >= 0 && rect.top <= window.innerHeight / 4;
      });

      if (currentHeading) {
        setActiveHeading(currentHeading.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headings]);

  const MARGIN_BY_LEVEL: Record<string, string> = {
    2: '0px',
    3: '16px',
    4: '32px',
    5: '48px',
    6: '64px',
  };

  return (
    <aside
      className={clsx(
        'border__color mb-8 h-fit w-full p-4',
        'lg:sticky lg:top-8',
        'lg:mb-0 lg:border-none lg:p-0'
      )}
    >
      <h2 className="primary mb-4 text-xl font-bold md:text-2xl">
        On This Page
      </h2>

      <ul
        className={clsx(
          'flex flex-col gap-4',
          'py-0.5',
          'max-h-[50vh] overflow-y-auto',
          'lg:max-h-[60vh]'
        )}
      >
        {headings.map((heading) => {
          const isActiveHeading = activeHeading === heading.headingId;
          return (
            <li
              key={heading.headingId}
              className={clsx(
                isActiveHeading
                  ? 'primary'
                  : 'secondary lg:opacity-50 lg:hover:opacity-100'
              )}
              style={{
                marginLeft: MARGIN_BY_LEVEL[heading.level] || '0px',
                fontSize: '14px',
              }}
            >
              <a href={`#${heading.headingId}`}>{heading.text}</a>
            </li>
          );
        })}
      </ul>

      {/* <DonateBox classname='w-auto hidden lg:block' /> */}
    </aside>
  );
}
