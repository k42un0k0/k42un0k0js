export * from "./array";

export function noop(): void {
  void 0;
}

export function identity<A>(a: A) {
  return a;
}
