import { Succ, Zero, One } from "./Numbers";

export type Increment<N> =
  N extends Succ<infer _N>
    ? Succ<N>
    : N extends Zero
      ? One
      : never;
