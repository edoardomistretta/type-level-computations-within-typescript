import { Succ, Zero } from "./Numbers";

export type GreatherThanEqual<N, M> =
  N extends Succ<infer PN>
    ? M extends Succ<infer PM>
      ? GreatherThanEqual<PN, PM>
      : M extends Zero
        ? true
        : never
    : N extends Zero
      ? M extends Zero
        ? true
        : M extends Succ<infer PM>
          ? false
          : never
      : never;
