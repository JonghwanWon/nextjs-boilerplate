import { getGlobalLayout } from '~/components/Layouts/GlobalLayout';

const Page: PersistentLayoutNextPage = ({}) => {
  return <div></div>;
};

Page.layout = (page) =>
  getGlobalLayout(page, {
    helmet: {
      title: 'Home',
    },
  });

export default Page;
