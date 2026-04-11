/**
 * Problem: Length of Last Word
 * Link: https://leetcode.com/problems/length-of-last-word/
 * Difficulty: Easy
 *
 * Approach:
 * 1. String manipulation (trim + split)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
  const words = s.trim().split(" ");
  return words[words.length - 1].length;
};