/**
 * Problem: Power of Three
 * Link: https://leetcode.com/problems/power-of-three/
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
const isPowerOfThreeIterative = function(n) {
  while (n > 1) {
    if (n % 3 !== 0) return false;
    n = n / 3;
  }
  return n === 1;
};

/*
 * Approach 2: Recursive
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(log n)
 */

const isPowerOfThreeRecursive = function(n) {
  if (n === 1) return true;
  if (n <= 0 || n % 3 !== 0) return false;

  return isPowerOfThreeRecursive(n / 3);
};