import { Equals } from "./Equals";
import { LessThan } from "./LessThan";
import { Decrement } from "./Decrement";
import { Zero } from "./Numbers";

export type Diff<N, M> =
  Equals<N, M> extends never
    ? never
    : Equals<N, M> extends true
      ? Zero
      : LessThan<N, M> extends true
        ? never
        : M extends Zero
          ? N
          : Diff<Decrement<N>, Decrement<M>>;
