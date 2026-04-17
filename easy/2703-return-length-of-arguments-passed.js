/**
 * Problem: Return Length of Arguments Passed
 * Link: https://leetcode.com/problems/return-length-of-arguments-passed/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Return the length of the rest parameter array
 * 
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
const argumentsLength = function(...args) {
  return args.length;
};