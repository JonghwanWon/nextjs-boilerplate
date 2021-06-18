# Next.js Boilerplate 🚀

#### Next.js + Typescript + MST(Mobx-State-Tree) + styled-components

# Features

- Single root store with hook
  - `const yourStore = getStore(stores => stores.yourStore)`
- Injecting data into the store from the server side

```
~/pages/**/*.tsx

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
- MST(mobx-state-tree)
- Persistent Layout

```
~/pages/**/*.tsx

myPage.layout = (page) => <Layout>{page}</Layout>
```
