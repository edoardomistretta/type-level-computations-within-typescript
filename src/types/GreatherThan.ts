import { Equals } from "./Equals";
import { Succ, Zero } from "./Numbers";

export type GreatherThan<N, M> =
  Equals<N, M> extends never
    ? never
    : Equals<N, M> extends true
      ? false
      : N extends Succ<infer PN>
        ? M extends Succ<infer PM>
          ? GreatherThan<PN, PM>
          : M extends Zero
            ? true
            : never
        : N extends Zero
          ? M extends Succ<infer _PM>
            ? false
            : never
          : never;
