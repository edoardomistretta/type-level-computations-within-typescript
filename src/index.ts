import { Equals } from "./types/Equals";
import { GreatherThan } from "./types/GreatherThan";
import { GreatherThanEqual } from "./types/GreatherThanEqual";
import { Increment } from "./types/Increment";
import { LessThan } from "./types/LessThan";
import { LessThanEqual } from "./types/LessThanEqual";
import { Max } from "./types/Max";
import { One, Two, Zero, Four, Three } from "./types/Numbers";
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

type _M1 = Equals<One, Max<One, Zero>> // true
type _M2 = Equals<One, Max<One, One>> // true
type _M3 = Equals<One, Max<Zero, One>> // true
type _M4 = Equals<One, Max<Zero, Two>> // false
type _M5 = Equals<One, Max<1, One>> // never
type _M6 = Equals<One, Max<One, 1>> // never

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
