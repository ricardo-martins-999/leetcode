/**
 * Problem: Memoize
 * Link: https://leetcode.com/problems/memoize/
 * Difficulty: Medium
 * 
 * Approach:
 * 1. Use a cache object to store previously computed results.
 * 2. Generate a unique key based on the function arguments.
 * 3. Check if the result for the given arguments is already in the cache.
 * 4. If it is, return the cached result; otherwise, compute the result, store it in the cache, and return it.
 *
 * Time Complexity: O(1), O(n) or O(2^n) depending on the original function's complexity and the number of unique argument combinations.
 * Space Complexity: O(m) where m is the number of unique argument combinations.
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  }
}