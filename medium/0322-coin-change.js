/**
 * Problem: Coin Change
 * Link: https://leetcode.com/problems/coin-change/
 * Difficulty: Medium
 * 
 * Approach:
 * 1. Dynamic Programming
 * 
 * Time Complexity: O(n * m)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);

  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};