/**
 * Problem: Power of Two
 * Link: https://leetcode.com/problems/power-of-two/
 * Difficulty: Easy
 *
 * Approach:
 * 1. Iterative
 * 2. Recursive
 */

/*
 * 1. Iterative
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwoIterative = function(n) {
  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }
  return n === 1;
};


/*
 * 2. Recursive
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(log n)
 */

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwoRecursive = function(n) {
  if (n === 1) return true;
  if (n <= 0 || n % 2 !== 0) return false;

  return isPowerOfTwoRecursive(n / 2);
};