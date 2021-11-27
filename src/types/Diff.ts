import { Equals } from "./Equals";
import { Increment } from "./Increment";
import { Succ, Zero } from "./Numbers";

export type Diff<N, M, Accumulator = Zero> =
  N extends Succ<infer PN>
    ? M extends Succ<infer _PM>
      ? Equals<N, M> extends true
        ? Accumulator
        : Equals<N, M> extends false
          ? Diff<PN, M, Increment<Accumulator>>
          : never
      : M extends Zero
        ? N
        : never
    : N extends Zero
      ? M extends Zero
        ? Zero
        : never
      : never;
