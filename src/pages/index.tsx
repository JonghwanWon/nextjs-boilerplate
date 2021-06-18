import { GetServerSideProps } from 'next';

import { getGlobalLayout } from '~/components/Layouts/GlobalLayout';
import Home from '~/containers/Home';
import { TRootStore } from '~/stores';

const Page: PersistentLayoutNextPage = ({}) => {
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
