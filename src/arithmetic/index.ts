import { Diff } from "./types/Diff";
import { Equals } from "./types/Equals";
import { GreatherThan } from "./types/GreatherThan";
import { GreatherThanEqual } from "./types/GreatherThanEqual";
import { Increment } from "./types/Increment";
import { LessThan } from "./types/LessThan";
import { LessThanEqual } from "./types/LessThanEqual";
import { Max } from "./types/Max";
import { Min } from "./types/Min";
import { Zero, One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten } from "./types/Numbers";
import { Power } from "./types/Power";
import { Product } from "./types/Product";
import { Quotient } from "./types/Quotient";
import { Sum } from "./types/Sum";

type _E1 = Equals<One, One> // true
type _E2 = Equals<One, Two> // false
type _E3 = Equals<Zero, Zero> // true
type _E4 = Equals<One, 2> // never
type _E5 = Equals<1, Two> // never

type _I1 = Equals<Two, Increment<One>> // true
type _I2 = Equals<One, Increment<Zero>> // true
type _I3 = Equals<One, Increment<2>> // never

type _S1 = Equals<Two, Sum<One, One>>; // true
type _S2 = Equals<Four, Sum<One, Three>>; // true
type _S3 = Equals<Two, Sum<Zero, One>>; // false
type _S4 = Equals<Zero, Sum<Zero, Zero>>; // true
type _S5 = Equals<Zero, Sum<1, Zero>>; // never
type _S6 = Equals<Zero, Sum<Zero, 1>>; // never

type _GTE1 = GreatherThanEqual<One, Zero> // true
type _GTE2 = GreatherThanEqual<One, One> // true
type _GTE3 = GreatherThanEqual<Zero, One> // false
type _GTE4 = GreatherThanEqual<Zero, 0> // never
type _GTE5 = GreatherThanEqual<0, Zero> // never

type _MAX1 = Equals<One, Max<One, Zero>> // true
type _MAX2 = Equals<One, Max<One, One>> // true
type _MAX3 = Equals<One, Max<Zero, One>> // true
type _MAX4 = Equals<One, Max<Zero, Two>> // false
type _MAX5 = Equals<One, Max<1, One>> // never
type _MAX6 = Equals<One, Max<One, 1>> // never

type _GT1 = GreatherThan<One, One> // false
type _GT2 = GreatherThan<Zero, Zero> // false
type _GT3 = GreatherThan<Zero, Two> // false
type _GT4 = GreatherThan<Four, Two> // true
type _GT5 = GreatherThan<1, Zero> // never
type _GT6 = GreatherThan<One, 0> // never

type _LTE1 = LessThanEqual<One, One> // true
type _LTE2 = LessThanEqual<Zero, Zero> // true
type _LTE3 = LessThanEqual<Zero, Two> // true
type _LTE4 = LessThanEqual<Four, Two> // false
type _LTE5 = LessThanEqual<1, Zero> // never
type _LTE6 = LessThanEqual<One, 0> // never

type _LT1 = LessThan<One, One> // false
type _LT2 = LessThan<Zero, Zero> // false
type _LT3 = LessThan<Zero, Two> // true
type _LT4 = LessThan<Four, Two> // false
type _LT5 = LessThan<1, Zero> // never
type _LT6 = LessThan<One, 0> // never

type _MIN1 = Equals<One, Min<One, One>> // true
type _MIN2 = Equals<Zero, Min<Zero, Zero>> // true
type _MIN3 = Equals<Zero, Min<Zero, Two>> // true
type _MIN4 = Equals<Two, Min<Four, Two>> // true
type _MIN5 = Equals<Zero, Min<1, Zero>> // never
type _MIN6 = Equals<Zero, Min<One, 0>> // never

type _P1 = Equals<One, Product<One, One>> // true
type _P2 = Equals<Zero, Product<Zero, Zero>> // true
type _P3 = Equals<Zero, Product<Zero, Two>> // true
type _P4 = Equals<Eight, Product<Four, Two>> // true
type _P5 = Equals<Four, Product<Two, Two>> // true
type _P6 = Equals<Zero, Product<1, Zero>> // never
type _P7 = Equals<Zero, Product<One, 0>> // never

type _POW1 = Equals<One, Power<One, One>> // true
type _POW2 = Equals<One, Power<Zero, Zero>> // true
type _POW3 = Equals<Zero, Power<Zero, Two>> // true
type _POW4 = Equals<One, Power<One, Three>> // true
type _POW5 = Equals<Eight, Power<Two, Three>> // true
type _POW6 = Equals<One, Power<Three, Zero>> // true
type _POW7 = Equals<Nine, Power<Three, Two>> // true
type _POW8 = Equals<Zero, Power<1, Zero>> // never
type _POW9 = Equals<Zero, Power<One, 0>> // never

type _D1 = Equals<One, Diff<Two, One>> // true
type _D2 = Equals<Zero, Diff<Two, Two>> // true
type _D3 = Equals<Zero, Diff<Zero, Zero>> // true
type _D4 = Equals<Five, Diff<Nine, Four>> // true
type _D5 = Diff<Eight, Nine> // never
type _D6 = Diff<Zero, One> // never
type _D7 = Diff<1, One> // never
type _D8 = Diff<Two, 2> // never

type _Q1 = Equals<Two, Quotient<Two, One>> // true
type _Q2 = Equals<One, Quotient<Two, Two>> // true
type _Q3 = Equals<Zero, Quotient<Zero, One>> // true
type _Q4 = Equals<Two, Quotient<Nine, Four>> // true
type _Q5 = Equals<Three, Quotient<Nine, Three>> // true
type _Q6 = Equals<Four, Quotient<Nine, Two>> // true
type _Q8 = Quotient<Zero, Zero> // never
type _Q9 = Quotient<1, One> // never
type _Q10 = Quotient<Two, 2> // never
