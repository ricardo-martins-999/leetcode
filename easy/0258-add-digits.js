/**
 * Problem: Add Digits 
 * Link: https://leetcode.com/problems/add-digits/
 * Difficulty: Easy
 * 
 * Approaches:
 * 1. Simulate the process of adding digits until we get a single digit
 * 2. Use the digital root formula: digital_root(n) = 1 + (n - 1) % 9
 */

/**
 * Approach 1: Simulate the process of adding digits until we get a single digit
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function(num) {
  let sum = 0;
  
  while (num > 9) {
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    num = sum;
    sum = 0;
  }

  return sum;
};

/**
 * Approach 2: Use the digital root formula
 * 
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

/**
 * @param {number} num
 * @return {number}
 */
const addDigitsMod = function(num) {
  if (num === 0)
    return 0;
  if (num % 9 === 0)
    return 9; 
  return num % 9;
};