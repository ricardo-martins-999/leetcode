/**
 * Problem: Timeout Cancellation
 * Link: https://leetcode.com/problems/timeout-cancellation
 * Difficulty: Easy
 * 
 * Approach:
 * 1. SetTimeout and ClearTimeout
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
  const cancelFn = () => clearTimeout(timeoutId);
  
  const timeoutId = setTimeout(() => {
    fn(...args);
  }, t);

  return cancelFn;
};