/**
 * Problem: Mirror Distance of an Integer
 * Link: https://leetcode.com/problems/mirror-distance-of-an-integer/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Reverse the digits of the integer.
 * 
 * Time Complexity: O(n) where n is the number of digits in the integer.
 * Space Complexity: O(1)
 */

/**
 * @param {number} n
 * @return {number}
 */
const mirrorDistance = function(n) {
  if (n >= 1 && n <= 9) return 0;
  const reversed = String(n).split("").reverse().join("");
  return Math.abs(n - reversed);
};