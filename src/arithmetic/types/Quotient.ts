import { Diff } from "./Diff";
import { Equals } from "./Equals";
import { Increment } from "./Increment";
import { LessThan } from "./LessThan";
import { Succ, Zero } from "./Numbers";

export type Quotient<N, M, Accumulator = Zero> =
  N extends Succ<infer _PN>
    ? M extends Succ<infer _PM>
      ? LessThan<N, M> extends true
        ? Accumulator
        : Equals<N, M> extends true
          ? Increment<Accumulator>
          : Quotient<Diff<N, M>, M, Increment<Accumulator>>
      : never
    : N extends Zero
      ? M extends Succ<infer _PM>
        ? Accumulator
        : never
      : never