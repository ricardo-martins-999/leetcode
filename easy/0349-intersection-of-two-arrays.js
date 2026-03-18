/**
 * Problem: Intersection of Two Arrays
 * Link: https://leetcode.com/problems/intersection-of-two-arrays/
 * Difficulty: Easy
 *
 * Approache:
 * 1. Hash Set
 *
 * Time Complexity: O(n + m)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  return [...set1].filter(x => set2.has(x));
};