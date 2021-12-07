import { GreatherThanEqual } from "./GreatherThanEqual";

export type Max<N, M> =
  GreatherThanEqual<N, M> extends never
    ? never
    : GreatherThanEqual<N, M> extends true
      ? N
      : M;
