/**
 * Problem: Power of Four
 * Link: https://leetcode.com/problems/power-of-four/
 * Difficulty: Easy
 *
 * Approaches:
 * 1. Iterative
 * 2. Recursive
 */

/*
 * Approach 1: Iterative
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFourIterative = function(n) {
  while (n > 1) {
    if (n % 4 !== 0) return false;
    n = n / 4;
  }
  return n === 1;
};

/*
 * Approach 2: Recursive
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(log n)
 */

const isPowerOfFourRecursive = function(n) {
  if (n === 1) return true;
  if (n <= 0 || n % 4 !== 0) return false;

  return isPowerOfFourRecursive(n / 4);
};