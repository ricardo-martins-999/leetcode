/**
 * Problem: Pow(x, n)
 * Link: https://leetcode.com/problems/powx-n/
 * Difficulty: Medium
 *
 * Approach:
 * 1. Binary Exponentiation (Fast Power)
 *
 * Idea:
 * Instead of multiplying x by itself n times (O(n)),
 * use the property:
 *
 * - If n is even:  x^n = (x^2)^(n/2)
 * - If n is odd:   x^n = x * (x^2)^(n/2)
 *
 * Also handle negative powers:
 * - x^(-n) = 1 / x^n
 *
 * This reduces the exponent at each step by half.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function(x, n) {
  if (n === 0) return 1;
  let N = n;
  if (N < 0) {
    x = 1 / x;
    N = -N;
  }
  let result = 1;
  while (N > 0) {
    if (N % 2 === 1) {
      result *= x;
    }
    x *= x;
    N = Math.floor(N / 2);
  }
  return result;
};