import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { SWRConfig } from 'swr';

import { fetcher } from '~/helpers/fetcher';

// persistent layout
type LayoutRenderFunction = (component: ReactNode, query: any) => ReactNode;
const DefaultLayout: LayoutRenderFunction = (page) => <>{page}</>;

type MyAppProps = AppProps & {
  Component: {
    layout?: LayoutRenderFunction;
  };
};

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  const router = useRouter();

  // persistent layout
  const withLayout = Component.layout ?? DefaultLayout;

  return (
    <>
      <Head>
        <meta charSet="utf-8" key="charSet" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="httpEquiv" />
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>{process.env.NEXT_PUBLIC_SEO_SITE_NAME}</title>
      </Head>
      <SWRConfig value={{ fetcher }}>
        {withLayout(<Component {...pageProps} />, router.query)}
      </SWRConfig>
    </>
  );
};

export default MyApp;
