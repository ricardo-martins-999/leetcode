/**
 * Problem: Counter II
 * Link: https://leetcode.com/problems/counter-ii/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Closure to maintain the state of the counter and return an object with methods to manipulate it.
 * 
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = function(init) {
  let count = init;
  return {
    increment: function() {
      return ++count;
    },
    decrement: function() {
      return --count;
    },
    reset: function() {
      count = init;
      return count;
    }
  };
};