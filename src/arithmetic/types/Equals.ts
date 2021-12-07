import { Succ, Zero } from "./Numbers";

export type Equals<N, M> =
  N extends Succ<infer PN>
  ? M extends Succ<infer PM>
    ? Equals<PN, PM>
    : M extends Zero
      ? false
      : never
  : N extends Zero
    ? M extends Zero
      ? true
      : M extends Succ<infer _PM>
        ? false
        : never
    : never;
