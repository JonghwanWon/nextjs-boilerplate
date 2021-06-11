/// <reference types="next/types/global" />

import * as next from 'next';

import { ThemeInterface } from './src/theme';

declare global {
  type DeepPartial<T> = T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {
        [key in keyof T]: T[key];
      }
    ? {
        [K in keyof T]?: DeepPartial<T[K]>;
      }
    : T;

  // NextPage with persistent Layout
  type PersistentLayoutNextPage<P = {}, IP = P> = next.NextPage<P, IP> & {
    layout?: (page: next.NextPage<P, IP>, query: ParsedUrlQuery) => JSX.Element;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}
