# Next.js Boilerplate 🚀
#### Next.js + Typescript + MST(Mobx-State-Tree) + styled-components

# Features
- Single root store with hook
  - `const yourStore = getStore(stores => stores.yourStore)`
- Pages Folder with Container
  - `/pages/**/*.tsx` not routed - container
  - `/pages/**/*.page.tsx` routed - pages
- Injecting data into the store from the server side
```
~/pages/**/*.page.tsx

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

```
- Typescript
- styled-components
- Persistent Layout
```
~/pages/**/*.page.tsx

myPage.layout = (page) => <Layout>{page}</Layout>
```
