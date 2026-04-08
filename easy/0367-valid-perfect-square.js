/**
 * Problem: Valid Perfect Square 
 * Link: https://leetcode.com/problems/valid-perfect-square/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Binary Search
 * 
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function(num) {
  if (num < 2) return true;

  let left = 2;
  let right = Math.floor(num / 2);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (num % mid === 0 && mid === num / mid) return true;

    if (mid < num / mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};

console.log(isPerfectSquare(5));