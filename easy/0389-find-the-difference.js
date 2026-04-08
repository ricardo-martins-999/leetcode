/**
 * Problem: Find the Difference 
 * Link: https://leetcode.com/problems/find-the-difference/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Hash Map
 * 2. Bit Manipulation (XOR)
 */

/**
 * Approach 1: Hash Map
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(s)
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function(s, t) {
  if (s.length === 0) return t[0];

  const charCount = {};

  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of t) {
    if (!charCount[char]) return char;
    charCount[char]--;
  }

  return "";
};

/**
 * Approach 2: Bit Manipulation (XOR)
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifferenceBit = function(s, t) {
  if (s.length === 0) return t[0];

  let answer = 0;

  for (let i = 0; i < s.length; i++)
    answer ^= s.charCodeAt(i);

  for (let i = 0; i < t.length; i++)
    answer ^= t.charCodeAt(i);

  return String.fromCharCode(answer);
};