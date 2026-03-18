/**
 * Problem: Median of Two Sorted Arrays
 * Link: https://leetcode.com/problems/median-of-two-sorted-arrays/
 * Difficulty: Hard
 *
 * Approach:
 * 1. Merge + Median (Brute Force)
 *
 * Time Complexity: O(n + m)
 * Space Complexity: O(n + m)
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  let i = 0;
  let j = 0;
  const merged = [];
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }
  while (i < nums1.length) {
    merged.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    merged.push(nums2[j]);
    j++;
  }
  const size = merged.length;
  let median;
  if (size % 2 === 0) {
    median = (merged[(size / 2) - 1] + merged[size / 2]) / 2;
  } else {
    median = merged[Math.floor(size / 2)];
  }
  return median;
};