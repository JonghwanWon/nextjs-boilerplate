import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { useNProgress } from '~/components/NProgress';
import StoreProvider from '~/stores';
import theme, { GlobalStyle } from '~/theme';

// persistent layout
type LayoutRenderFunction = (
  component: ReactNode,
  query: ParsedUrlQuery,
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
        <title>loading...</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StoreProvider initialData={pageProps.initialData}>
          {withLayout(<Component {...pageProps} />, router.query)}
        </StoreProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
