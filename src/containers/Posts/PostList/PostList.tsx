import { FC } from 'react';
import styled from 'styled-components';

import RouteLink from '~/components/RouteLink';
import Spinner from '~/components/Spinner';
import { TPost } from '~/models/post';

const Container = styled.div``;

type PostListProps = {
  posts: TPost[];
};

const PostList: FC<PostListProps> = ({ posts }) => {
  // const { data: posts, error } = useSWR<TPost[]>(
  //   'https://jsonplaceholder.typicode.com/posts',
  // );

  // if (error) return <div>error</div>;
  if (!posts) return <Spinner />;

  return (
    <Container>
      {posts.map((post) => (
        <RouteLink key={post.id} href={`/posts/${post.id}`}>
          <p>{post.title}</p>
        </RouteLink>
      ))}
    </Container>
  );
};

export default PostList;
