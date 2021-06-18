import { useRouter } from 'next/router';
import nProgress from 'nprogress';
import { useEffect } from 'react';

import { nProgressConfig } from './nProgressConfig';

export const useNProgress = () => {
  let timer: any = null;

  const router = useRouter();

  const handleRouteChangeStart = () => {
    nProgress.set(nProgressConfig.startPosition);
    nProgress.start();
  };

  const handleRouteChangeComplete = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      nProgress.done(true);
    }, nProgressConfig.stopDelayMs);
    window.scrollTo(0, 0);
  };

  const handleRouteChangeError = () => {
    nProgress.done();
  };

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, []);
};
