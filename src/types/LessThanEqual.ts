import { Equals } from "./Equals";
import { GreatherThan } from "./GreatherThan";

export type LessThanEqual<N, M> =
  Equals<N, M> extends never
  ? never
  : Equals<N, M> extends true
    ? true
    : GreatherThan<N, M> extends true
      ? false
      : true;
