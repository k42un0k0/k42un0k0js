/**
 * 0～lengthを値を持つ配列を返す
 * @param  {number} length
 * @returns number[]
 */
export function range(length: number): number[];
/**
 * start～end-1を値を持つ配列を返す
 * @param  {number} start
 * @param  {number} end
 * @returns number[]
 */
export function range(start: number, end: number): number[];
/**
 * start, start + step, start + step * 2, ... start + step * floor((end - start) / step) を値を持つ配列を返す
 * @param  {number} start
 * @param  {number} end
 * @param  {number} step
 * @returns number[]
 */
export function range(start: number, end: number, step: number): number[];
export function range(
  startOrLength: number,
  end?: number,
  step?: number
): number[] {
  function init(
    startOrLength: number,
    end: number | undefined,
    step: number | undefined
  ) {
    if (step != null) {
      return {
        length: Math.ceil((end! - startOrLength) / step),
        start: startOrLength,
      };
    } else if (end != null) {
      return {
        length: end - startOrLength,
        start: startOrLength,
      };
    } else {
      return { length: startOrLength, start: 0 };
    }
  }

  let { length, start } = init(startOrLength, end, step);
  function* gen(length: number, cb: (k: number) => number) {
    for (const k of Array(length).keys()) {
      yield cb(k);
    }
  }
  return [...gen(length, (i) => i * (step ?? 1) + start)];
}
