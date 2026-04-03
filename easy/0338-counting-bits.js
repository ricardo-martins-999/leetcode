/**
 * Problem: Counting Bits
 * Link: https://leetcode.com/problems/counting-bits/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Dynamic Programming
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function(n) {
  const dp = new Array(n + 1).fill(0);
  let offset = 1;

  for (let i = 1; i <= n; i++) {
    if (offset * 2 === i) {
      offset = i;
    }

    dp[i] = dp[i - offset] + 1;
  }

  return dp;
};