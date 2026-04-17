/**
 * Problem: Interval Cancellation
 * Link: https://leetcode.com/problems/interval-cancellation
 * Difficulty: Easy
 * 
 * Approach:
 * 1. SetInterval and ClearInterval
 * 
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
const cancellable = function(fn, args, t) {
  fn(...args);
  const intervalId = setInterval(() => {
    fn(...args);
  }, t);

  return function() {
    clearInterval(intervalId);
  };
};