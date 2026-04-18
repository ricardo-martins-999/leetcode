/**
 * Problem: Debounce
 * Link: https://leetcode.com/problems/debounce/
 * Difficulty: Medium
 * 
 * Approach:
 * 1. Use a timer variable to keep track of the timeout.
 * 2. When the returned function is called, clear any existing timeout.
 * 
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
const debounce = function(fn, t) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, t);
  }
};