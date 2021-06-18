export type OneOrAnother<T1, T2> =
  | (T1 & { [K in keyof T2]?: never })
  | (T2 & { [K in keyof T1]?: never });
