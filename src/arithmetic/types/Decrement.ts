import { Succ } from "./Numbers";

export type Decrement<N> =
  N extends Succ<infer PN>
    ? PN
    : never;
