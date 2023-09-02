export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): void {
  // Initialize indices i and j to the end of the arrays nums1 and nums2 respectively.
  let i: number = m - 1;
  let j: number = n - 1;

  // k is the last position in nums1 to place the numbers.
  let k: number = m + n - 1;

  // While there are still numbers to compare in both nums1 and nums2
  while (i >= 0 && j >= 0) {
    // If the number at nums1 is greater, place this number at position k.
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--; // Decrement index i to the next number in nums1.
    } else {
      nums1[k] = nums2[j];
      j--; // Decrement index j to the next number in nums2.
    }
    k--; // Decrement index k to the next available position.
  }

  // If there are still numbers in nums2 that haven't been placed in nums1.
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }

  // If there are still numbers in nums1, they are already in their correct positions.
  // No need for an extra loop.
}
