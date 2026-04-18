/**
 * Problem: Promise Time Limit
 * Link: https://leetcode.com/problems/promise-time-limit
 * Difficulty: Medium
 * 
 * Approach:
 * 1. Create a timeout that will reject the promise if it exceeds the time limit.
 * 2. Call the original function and handle its resolution or rejection.
 * 3. Clear the timeout when the function resolves or rejects.
 * 
 * Time Complexity: O(fn) where fn is the time complexity of the original function.
 * Space Complexity: O(1)
 */

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
const timeLimit = function(fn, t) {
  return async function(...args) {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        clearTimeout(timeoutId);
        reject("Time Limit Exceeded");
      }, t);

      fn(...args)
        .then((result) => {
          clearTimeout(timeoutId);
          resolve(result);
        })
        .catch((error) => {
          clearTimeout(timeoutId);
          reject(error);
        });
    });
  }
};