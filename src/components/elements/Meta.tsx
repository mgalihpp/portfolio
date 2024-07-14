import { Helmet, HelmetProvider } from 'react-helmet-async';

type Props = {
  title?: string;
  description?: string;
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
