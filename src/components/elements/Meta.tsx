import { Helmet, HelmetProvider } from 'react-helmet-async';

type Props = {
  title?: string;
  description?: string;
  openGraph?: {
    images?: string;
    url?: string;
    siteName?: string;
    locale?: string;
    type?: string;
    authors?: string;
  };
  keyword?: string;
};

const Meta = (props: Props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{props.title}</title>
        <meta name='description' content={props.description} />
      </Helmet>
    </HelmetProvider>
  );
};

export default Meta;
