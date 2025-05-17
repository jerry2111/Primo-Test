import { merge } from '../src/merge';

describe('merge function', () => {
  it('should merge three arrays correctly', () => {
    expect(merge([1, 3, 5], [6, 4, 2], [7, 8, 9])).toEqual([1,2,3,4,5,6,7,8,9]);
  });

  it('should handle empty arrays', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1,2,3], [], [])).toEqual([1,2,3]);
    expect(merge([], [3,2,1], [])).toEqual([1,2,3]);
    expect(merge([], [], [1,2,3])).toEqual([1,2,3]);
  });

  it('should handle duplicate values', () => {
    expect(merge([1,2], [2,1], [1,2])).toEqual([1,1,1,2,2,2]);
  });

  it('should handle negative numbers', () => {
    expect(merge([-3, -1, 0], [2, 1, -2], [3, 4])).toEqual([-3,-2,-1,0,1,2,3,4]);
  });

  it('should handle arrays of different lengths', () => {
    expect(merge([1], [3,2], [4,5,6])).toEqual([1,2,3,4,5,6]);
  });

  it('should handle arrays with one element', () => {
    expect(merge([1], [], [])).toEqual([1]);
    expect(merge([], [1], [])).toEqual([1]);
    expect(merge([], [], [1])).toEqual([1]);
  });

  it('should handle all elements equal', () => {
    expect(merge([1,1], [1,1], [1,1])).toEqual([1,1,1,1,1,1]);
  });
});
