/**
 * Problem: Function Composition
 * Link: https://leetcode.com/problems/function-composition/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Reduce Right the array of functions
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = function(functions) {
  if (functions.length === 0) {
    return (x) => x;
  }
  return function(x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  }
};
