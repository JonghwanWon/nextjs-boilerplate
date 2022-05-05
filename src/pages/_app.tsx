import { AppProps } from 'next/app';
import Head from 'next/head';
import { SWRConfig } from 'swr';

import { fetcher } from '~/utils/fetcher';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const title = [process.env.NEXT_PUBLIC_SEO_TITLE, process.env.NEXT_PUBLIC_SEO_TITLE_TEMPLATE]
    .filter(Boolean)
    .join(' :: ');

  return (
    <>
      <Head>
        <meta charSet="utf-8" key="charSet" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="httpEquiv" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <title>{title}</title>
      </Head>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
};

export default MyApp;
