import { ReactNode } from "react";

export function renderMapByEntries<K, V>(
  map: Map<K, V>,
  render: (e: [K, V]) => ReactNode
): ReactNode {
  console.log(map);
  const gen = map.entries();
  function* renderByEntries() {
    for (const e of gen) {
      yield render(e);
    }
  }
  return [...renderByEntries()];
}
