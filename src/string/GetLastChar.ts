export type GetLastChar<T extends number | string> = `${T}` extends `${infer Other}${infer Last}`
  ? Last extends ""
    ? Other
    : GetLastChar<Last>
  : never;
