import fetch from 'isomorphic-fetch';
import { GetServerSideProps } from 'next';

import { getGlobalLayout } from '~/components/Layouts/GlobalLayout';
import Home from '~/containers/Home';
import { TRootStore } from '~/stores';

type PageProps = {};

const Page: PersistentLayoutNextPage<PageProps> = ({}) => {
  return <Home />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
  }).then((res) => res.json());

  const initialData: DeepPartial<TRootStore> = {
    sample: {
      mySsrData: 'server side',
    },
    user: {
      users: resp,
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
