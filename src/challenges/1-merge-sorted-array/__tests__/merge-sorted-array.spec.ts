import { merge } from '../index';

describe('[1] Merge Sorted Array', () => {
  it('should merge two sorted arrays correctly', () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;

    merge(nums1, m, nums2, n);

    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it('should handle empty arrays', () => {
    const nums1: number[] = [];
    const m = 0;
    const nums2: number[] = [];
    const n = 0;

    merge(nums1, m, nums2, n);

    expect(nums1).toEqual([]);
  });

  it('should handle arrays with single elements', () => {
    const nums1 = [1, 0];
    const m = 1;
    const nums2 = [2];
    const n = 1;

    merge(nums1, m, nums2, n);

    expect(nums1).toEqual([1, 2]);
  });

  it('should merge when all elements in nums1 are greater than all elements in nums2', () => {
    const nums1 = [4, 5, 6, 0, 0, 0];
    const m = 3;
    const nums2 = [1, 2, 3];
    const n = 3;

    merge(nums1, m, nums2, n);

    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should merge when all elements in nums2 are greater than all elements in nums1', () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [4, 5, 6];
    const n = 3;

    merge(nums1, m, nums2, n);

    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
