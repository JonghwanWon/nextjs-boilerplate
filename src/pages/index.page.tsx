import { getGlobalLayout } from '~/components/Layouts/GlobalLayout';

type PageProps = {};

const Page: PersistentLayoutNextPage<PageProps> = ({}) => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

Page.layout = (page) =>
  getGlobalLayout(page, {
    helmet: {
      title: 'Home',
    },
  });

export default Page;
