/**
 * Problem: Guess Number Higher or Lower 
 * Link: https://leetcode.com/problems/guess-number-higher-or-lower/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Use binary search to efficiently find the picked number.
 * 
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function(n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    const mid = Math.floor( (left + right) / 2 );
    const result = guess(mid);
    if (result === 0) {
      return mid;
    } else if (result < 0) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  
  return -1;
};