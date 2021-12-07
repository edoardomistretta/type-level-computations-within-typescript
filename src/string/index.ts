import { GetLastChar } from "./GetLastChar";

type _GLC1 = GetLastChar<102>; // 2
type _GLC2 = GetLastChar<1021235>; // 5
type _GLC3 = GetLastChar<0>; // 0
type _GLC4 = GetLastChar<103919>; // 9
type _GLC5 = GetLastChar<"">; // never
