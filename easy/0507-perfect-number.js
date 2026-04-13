/**
 * Problem: Perfect Number
 * Link: https://leetcode.com/problems/perfect-number/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Find all divisors of the number (excluding the number itself) and sum them up.
 * 
 * Time Complexity: O(√n)
 * Space Complexity: O(1)
 */

/**
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber = function(num) {
  if (num <= 1) return false;

  let sum = 1;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) {
        sum += num / i;
      }
    }
  }

  return sum === num;
};