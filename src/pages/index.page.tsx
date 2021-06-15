import { GetServerSideProps } from 'next';

import { getGlobalLayout } from '~/components/Layouts/GlobalLayout';
import { TRootStore } from '~/stores/RootStore';

import Home from './containers/Home';

type PageProps = {};

const Page: PersistentLayoutNextPage<PageProps> = ({}) => {
  return <Home />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const initialData: DeepPartial<TRootStore> = {
    sample: {
      mySsrData: 'server side',
    },
  };

  return {
    props: {
      initialData,
    },
  };
};

Page.layout = (page) =>
  getGlobalLayout(page, {
    helmet: {
      title: 'Home',
    },
  });

export default Page;
