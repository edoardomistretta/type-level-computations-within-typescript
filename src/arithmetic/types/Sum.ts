import { Increment } from "./Increment";
import { Succ, Zero } from "./Numbers";

export type Sum<N, M> =
  N extends Succ<infer _PN>
    ? M extends Succ<infer PM>
      ? Sum<Increment<N>, PM>
      : M extends Zero
        ? N
        : never
    : N extends Zero
      ? M extends Succ<infer _PM>
        ? M
        : M extends Zero
          ? M
          : never
      : never;
