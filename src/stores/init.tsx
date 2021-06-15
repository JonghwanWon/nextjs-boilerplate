/*
 * the entry of the App root store
 *
 */

import { enableStaticRendering } from 'mobx-react';
import { applySnapshot } from 'mobx-state-tree';
import { FC, createContext, useContext, useMemo } from 'react';

import { isServer } from '~/helpers/utils/isServer';

import RootStore, { TRootStore } from './RootStore';

enableStaticRendering(isServer);

const rootStoreCtx = createContext<TRootStore | null>(null);
let _rootStore: TRootStore | null = null;

const initRootStore = (snapshot: any = null): TRootStore => {
  const rootStore = _rootStore ?? RootStore.create(snapshot || {});

  if (snapshot) {
    applySnapshot(rootStore, snapshot);
  }

  // For SSG and SSR always create a new store
  if (isServer) return rootStore;
  // Create the store once in the client
  if (!_rootStore) _rootStore = rootStore;

  return rootStore;
};

export const StoreProvider: FC<{ initialData?: DeepPartial<TRootStore> }> = ({
  children,
  initialData,
}) => {
  const store = useMemo(() => initRootStore(initialData), [initialData]);

  return (
    <rootStoreCtx.Provider value={store}>{children}</rootStoreCtx.Provider>
  );
};

const useStoreData = <Selection, ContextData, Store>(
  context: React.Context<ContextData>,
  storeSelector: (contextData: ContextData) => Store,
  dataSelector: (store: Store) => Selection,
) => {
  const value = useContext(context);
  if (!value) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  const store = storeSelector(value);
  return dataSelector(store);
};

/* eslint-disable @typescript-eslint/no-non-null-assertion */
export const getStore = function <Selection>(
  dataSelector: (rootVm: TRootStore) => Selection,
) {
  return useStoreData(
    rootStoreCtx,
    (contextData) => contextData!,
    dataSelector,
  );
};

export default StoreProvider;
