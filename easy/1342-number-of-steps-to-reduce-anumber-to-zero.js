/**
 * Problem: Number of Steps
 * Link: https://leetcode.com/problems/number-of-steps/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Bitwise
 * 
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = function(num) {
  let answer = 0;

  while (num > 0) {
    (num & 1) ? num-- : num >>= 1;
    answer++;
  }

  return answer;
};