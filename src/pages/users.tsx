import { GetServerSideProps } from 'next';

import { getGlobalLayout } from '~/components/Layouts/GlobalLayout';
import Users from '~/containers/Users/Users';
import { fetcher } from '~/helpers/fetcher';
import { TUser } from '~/models/user';
import { TRootStore } from '~/stores';

const Page: PersistentLayoutNextPage = ({}) => {
  return <Users />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const resp = await fetcher<TUser[]>(
    'https://jsonplaceholder.typicode.com/users',
  );

  const initialData: DeepPartial<TRootStore> = {
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
      title: 'Users',
    },
  });

export default Page;
