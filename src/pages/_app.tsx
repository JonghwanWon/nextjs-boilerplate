import axios from 'axios';
import App, { AppContext, AppProps } from 'next/app';
import Head from 'next/head';

import { initAxiosConfig } from '~/utils/requestClient';

initAxiosConfig();

const MyApp = ({ Component, pageProps }: AppProps) => {
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
      </Head>
      <Component {...pageProps} />
    </>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { ctx } = appContext;
  const cookie = ctx.req ? ctx.req.headers.cookie : null;

  // INFO: token
  axios.defaults.headers.common.Cookie = '';
  if (cookie) {
    axios.defaults.headers.common.Cookie = cookie;
  }

  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
