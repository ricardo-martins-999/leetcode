/**
 * Problem: Counter 
 * Link: https://leetcode.com/problems/counter/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Create a closure that maintains the current count.
 * 
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = function(n) {
  let count = n;
  return function() {
    return count++;
  };
};