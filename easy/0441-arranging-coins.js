/**
 * Problem: Arranging Coins
 * Link: https://leetcode.com/problems/arranging-coins
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Binary Search
 * 
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = function(n) {
  let left = 0;
  let right = n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const coinsNeeded = (mid * (mid + 1) / 2);

    if (coinsNeeded === n) return mid;

    if (coinsNeeded < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
};