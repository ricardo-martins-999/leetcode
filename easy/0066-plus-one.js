/**
 * Problem: Plus One
 * Link: https://leetcode.com/problems/plus-one/
 * Difficulty: Easy
 *
 * Approach:
 * 1. Simulate Addition with Carry (Right to Left)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) (ignoring output array if resized)
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  let i = digits.length - 1;

  while (i >= 0 && digits[i] === 9) {
    digits[i] = 0;
    i--;
  }

  if (i >= 0) {
    digits[i] += 1;
    return digits;
  }

  digits.unshift(1);
  return digits;
};