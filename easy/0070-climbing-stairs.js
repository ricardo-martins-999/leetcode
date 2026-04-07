/**
 * Problem: Climbing Stairs 
 * Link: https://leetcode.com/problems/climbing-stairs/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Dynamic Programming
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  if (n <= 2) return n;

  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
    const current = first + second;
    first = second;
    second = current;
  }

  return second;
};