import { LessThanEqual } from "./LessThanEqual";

export type Min<N, M> =
  LessThanEqual<N, M> extends never
    ? never
    : LessThanEqual<N, M> extends true
      ? N
      : M;
