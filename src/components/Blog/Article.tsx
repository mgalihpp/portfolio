import BlockContent from '@sanity/block-content-to-react';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import '@/styles/blogDetails.css';
import clsx from 'clsx';
import * as React from 'react';
import { BiCheckDouble, BiSolidCopyAlt } from 'react-icons/bi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ArticleProps {
  content: unknown;
}

export default function Article({ content }: ArticleProps) {
  const [value, copy] = useCopyToClipboard();
  const [isCopied, setIsCopied] = React.useState<boolean>(false);
  const isTableSize = useMediaQuery('(min-width: 768px)');
  const isLaptopSize = useMediaQuery('(min-width: 1024px)');

  const handleCopy = (code: string) => {
    copy(code);
    setIsCopied(true);
  };

  console.log('Copied', value);

  React.useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isCopied]);

  const serializers = {
    types: {
      code: (props: { node: { code: string; language: string } }) => (
        <div className="group relative mb-5">
          <SyntaxHighlighter
            language={props.node.language}
            style={a11yDark}
            customStyle={{
              padding: '16px',
              fontSize: '14px',
              borderRadius: '8px',
            }}
            PreTag="pre"
            wrapLongLines={isTableSize ? (isLaptopSize ? false : true) : false}
          >
            {props.node.code}
          </SyntaxHighlighter>

          <button
            className={clsx(
              'absolute right-1 top-1',
              'primary rounded-md p-2 text-sm'
            )}
            onClick={() => handleCopy(props.node.code)}
            aria-label="Copy code to clipboard"
          >
            {!isCopied ? (
              <BiSolidCopyAlt size={18} className="text-neutral-200" />
            ) : (
              <BiCheckDouble size={18} className="text-green-300" />
            )}
          </button>
        </div>
      ),

      block: (props: {
        node: { style: string; _key: string };
        children: React.ReactNode;
      }) => {
        const { node, children } = props;
        const { style, _key } = node;

        if (
          style.startsWith('h') &&
          style.length === 2 &&
          parseInt(style[1]) >= 2 &&
          parseInt(style[1]) <= 6
        ) {
          const HeadingTag = style as keyof JSX.IntrinsicElements;
          const headingId = _key;
          return (
            <HeadingTag id={headingId} className="scroll-mt-28">
              {children}
            </HeadingTag>
          );
        } else {
          return <p>{children}</p>;
        }
      },

      image: (props: { node: { alt: string; asset: { _ref: string } } }) => {
        const url = props.node.asset._ref;
        const cleanUrl = url
          .replace('image-', '')
          .replace('-webp', '.webp')
          .replace('-gif', '.gif');

        const projectId = 'g4pufrpg';
        const dataset = 'production';
        const uri = `https://cdn.sanity.io/images/${projectId}/${dataset}/${cleanUrl}`;

        return (
          <img
            src={uri}
            alt={props.node.alt}
            width={1920}
            height={1080}
            className="h-auto w-auto"
          />
        );
      },
    },
  };

  return (
    <article className={'content'}>
      <BlockContent
        blocks={content}
        projectId={'g4pufrpg'}
        dataset={'production'}
        serializers={serializers}
      />
    </article>
  );
}
