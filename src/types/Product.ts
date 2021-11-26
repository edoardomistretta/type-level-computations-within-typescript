import { Succ, Zero } from "./Numbers";
import { Sum } from "./Sum";

export type Product<N, M, Accumulator = Zero> =
  N extends Succ<infer _PN>
    ? M extends Succ<infer PM>
      ? Product<N, PM, Sum<Accumulator, N>>
      : M extends Zero
        ? Accumulator
        : never
    : N extends Zero
      ? M extends Succ<infer _PM>
        ? Accumulator
        : M extends Zero
          ? Accumulator
          : never
      : never;
