/**
 * Problem: Sort By
 * Link: https://leetcode.com/problems/sort-by/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Use the built-in sort method with a custom comparison function.
 * 2. The comparison function should call the provided function `fn` on each element and compare the results.
 * 
 * Time Complexity: O(n log n) where n is the length of the input array.
 * Space Complexity: O(1) if we don't count the space used by the sort method, otherwise O(n).
 */

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
const sortBy = function(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};