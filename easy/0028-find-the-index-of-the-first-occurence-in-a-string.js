/**
 * Problem: Find the Index of the First Occurrence in a String
 * Link: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 * Difficulty: Easy
 *
 * Approach:
 * 1. Sliding Window (Substring Comparison)
 *
 * Time Complexity: O(n * m)
 * Space Complexity: O(m)
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
  const size = haystack.length - needle.length;
  let i = 0;
  let j = needle.length;

  while (i <= size) {
    if (haystack.substring(i, j) === needle) return i;
    i++;
    j++;
  }

  return -1;
};