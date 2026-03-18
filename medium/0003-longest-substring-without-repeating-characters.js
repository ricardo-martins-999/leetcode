/**
 * Problem: Longest Substring Without Repeating Characters
 * Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Difficulty: Medium
 *
 * Approach:
 * 1. Sliding Window + Hash Map
 *
 * Time Complexity: O(n)
 * Space Complexity: O(min(n, m))
 */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  const map = {};
  let i = 0;
  let max = 0;
  for (let j = 0; j < s.length; j++) {
    if (map[s[j]] !== undefined) {
      i = Math.max(map[s[j]] + 1, i);
    }
    map[s[j]] = j;
    max = Math.max(max, j - i + 1);
  }
  return max;
};