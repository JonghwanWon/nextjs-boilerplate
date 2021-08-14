import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { SWRConfig } from 'swr';

import { useNProgress } from '~/components/NProgress';
import { fetcher } from '~/helpers/fetcher';
import theme, { GlobalStyle } from '~/theme';

// persistent layout
type LayoutRenderFunction = (
  component: ReactNode,
  query: any,
) => ReactNode;
const DefaultLayout: LayoutRenderFunction = (page) => <>{page}</>;

type MyAppProps = AppProps & {
  Component: {
    layout?: LayoutRenderFunction;
  };
};

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  useNProgress();
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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SWRConfig
          value={{
            fetcher,
          }}
        >
          {withLayout(<Component {...pageProps} />, router.query)}
        </SWRConfig>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
