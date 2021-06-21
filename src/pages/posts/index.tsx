import { GetStaticProps } from 'next';

import { getGlobalLayout } from '~/components/Layouts/GlobalLayout';
import Posts from '~/containers/Posts';
import { fetcher } from '~/helpers/fetcher';
import { TPost } from '~/models/post';

type PageProps = {
  posts: TPost[];
};

const Page: PersistentLayoutNextPage<PageProps> = ({ posts }) => {
  return <Posts posts={posts} />;
};

export const getStaticProps: GetStaticProps<PageProps> = async ({}) => {
  try {
    const posts = await fetcher<TPost[]>(
      'https://jsonplaceholder.typicode.com/posts',
    );

    return posts ? { props: { posts }, revalidate: 10 } : { notFound: true };
  } catch (error) {
    return { notFound: true };
  }
};

Page.layout = (page) =>
  getGlobalLayout(page, {
    helmet: {
      title: 'Posts',
    },
  });

export default Page;
