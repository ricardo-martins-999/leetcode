/**
 * Problem: Maximum Distance Between a Pair of Values
 * Link: https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/
 * Difficulty: Meidum
 * 
 * Approach:
 * 1. Two Pointers
 * 
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const maxDistance = function(nums1, nums2) {
  let i = 0, j = 1;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] > nums2[j]) i++;
    j++;
  }

  return j - i - 1;
};