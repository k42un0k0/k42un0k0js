export function constComponent<T>(v: T): React.VFC {
  return (): JSX.Element => <>{v}</>;
}
