import { GetStaticPaths, GetStaticProps } from 'next';
import styled from 'styled-components';

import { getGlobalLayout } from '~/components/Layouts/GlobalLayout';
import { fetcher } from '~/helpers/fetcher';
import { TPost } from '~/models/post';

const Container = styled.div``;

type PageParams = {
  id: string;
};

type PageProps = {
  post: TPost;
};

const Page: PersistentLayoutNextPage<PageProps> = ({ post }) => {
  return <Container>{JSON.stringify(post)}</Container>;
};

export const getStaticPaths: GetStaticPaths<PageParams> = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps: GetStaticProps<PageProps, PageParams> = async ({
  params,
}) => {
  try {
    const post = await fetcher<TPost>(
      `https://jsonplaceholder.typicode.com/posts/${params?.id}`,
    );

    return post ? { props: { post }, revalidate: 10 } : { notFound: true };
  } catch (error) {
    return { notFound: true };
  }
};

Page.layout = (page) =>
  getGlobalLayout(page, {
    helmet: {
      title: 'Post',
    },
  });

export default Page;
