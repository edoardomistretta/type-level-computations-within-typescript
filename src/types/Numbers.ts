export type Succ<N> = { n: N }
 
export type Zero = "Zero";
export type One = Succ<Zero>;
export type Two = Succ<One>;
export type Three = Succ<Two>;
export type Four = Succ<Three>;
export type Five = Succ<Four>;
export type Six = Succ<Five>;
export type Seven = Succ<Six>;
export type Eight = Succ<Seven>;
export type Nine = Succ<Eight>;
export type Ten = Succ<Nine>;
