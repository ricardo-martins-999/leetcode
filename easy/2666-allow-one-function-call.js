/**
 * Problem: Allow One Function Call
 * Link: https://leetcode.com/problems/allow-one-function-call
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Use a closure to maintain the state of whether the function has been called.
 * 
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
const once = function(fn) {
  let called = false;
  let result;
  return function(...args){
    if (!called) {
      called = true;
      result = fn(...args);
      return result;
    }
  };
};