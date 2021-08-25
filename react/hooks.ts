import { useCallback, useState } from "react";
// 同setState方式赋值
export function useSetState<s extends object>(
  initValue: s | (() => s)
): [s, (state: Partial<s> | ((state: s) => Partial<s>)) => void] {
  const [_state, _setState] = useState(initValue);
  const setState = useCallback(
    (state: Partial<s> | ((state: s) => Partial<s>)) => {
      _setState((prec: s) => {
        let next = state;
        if (typeof state === "function") {
          next = state(prec);
        }
        return { ...prec, ...next };
      });
    },
    []
  );
  return [_state, setState];
}
