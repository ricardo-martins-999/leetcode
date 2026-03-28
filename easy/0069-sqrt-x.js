/**
 * Problem: Sqrt(x)
 * Link: https://leetcode.com/problems/sqrtx/
 * Difficulty: Easy
 *
 * Approach:
 * 1. Binary Search
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
  if (x <= 1) return x;

  let start = 1;
  let end = x;
  let mid = -1;

  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);

    if (mid * mid > x) {
      end = mid - 1;
    } else if (mid * mid === x) {
      return mid;
    } else {
      start = mid + 1;
    }
  }

  return Math.floor(end);
};