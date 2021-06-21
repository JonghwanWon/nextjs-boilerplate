import { FC } from 'react';
import styled from 'styled-components';

import { TPost } from '~/models/post';

import PostList from './PostList';

const Container = styled.div``;

type PostsProps = {
  posts: TPost[];
};

const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <Container>
      <PostList posts={posts} />
    </Container>
  );
};

export default Posts;
