import { One, Succ, Zero } from "./Numbers";
import { Product } from "./Product";

export type Power<Base, Exp, Accumulator = Base> =
  Base extends Zero
    ? Exp extends Zero
      ? One
      : Exp extends Succ<infer _PExp>
        ? Zero
        : never
    : Base extends One
      ? Exp extends Zero
        ? One
        : Exp extends Succ<infer _PExp>
          ? One
          : never
      : Base extends Succ<infer _PBase>
        ? Exp extends Zero
          ? One
          : Exp extends One
            ? Accumulator
            : Exp extends Succ<infer PExp>
              ? Power<Base, PExp, Product<Accumulator, Base>>
              : never
        : never;
