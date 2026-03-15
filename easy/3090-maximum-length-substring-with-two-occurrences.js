/**
 * Problem: Maximum Length Substring
 * Link: https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/
 * Difficulty: Easy
 *
 * Approaches:
 * 1. Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {string} s
 * @return {number}
 */
const maximumLengthSubstringWithTwoOccurrences = function(s) {
  let left = 0;
  let max = 0;
  const map = new Map();
  for (let right = 0; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);
    while (map.get(s[right]) > 2) {
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
};