/**
 * Problem: Fibonacci Number
 * Link: https://leetcode.com/problems/fibonacci-number/
 * Difficulty: Easy
 *
 * Approaches:
 * 1. Iterative
 * 2. Recursive
 */

/**
 * 1. Iterative
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number} n
 * @return {number}
 */
const fibonacciIterative = function(n) {
  if (n <= 1) return n;

  let fib = 0;
  let a = 0, b = 1;
  
  for (let i = 2; i <= n; i++) {
    fib = a + b;
    a = b;
    b = fib;
  }

  return b;
};

/**
 * 2. Recursive
 *
 * Time Complexity: O(2^n)
 * Space Complexity: O(n)
 */

/**
 * @param {number} n
 * @return {number}
 */
const fibonacciRecursive = function(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};