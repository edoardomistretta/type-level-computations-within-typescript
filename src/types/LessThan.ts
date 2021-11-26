import { Equals } from "./Equals";
import { GreatherThan } from "./GreatherThan";

export type LessThan<N, M> =
  Equals<N, M> extends never
  ? never
  : Equals<N, M> extends true
    ? false
    : GreatherThan<N, M> extends true
      ? false
      : true;
