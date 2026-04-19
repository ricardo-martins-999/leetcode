/**
 * Problem: Flatten Deeply Nested Array
 * Link: https://leetcode.com/problems/flatten-deeply-nested-array/
 * Difficulty: Medium
 * 
 * Approach:
 * 1. Recursion
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
const flat = function (arr, depth) {
  if (depth === 0) return arr.slice();

  const flattened = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattened.push(...flat(arr[i], depth - 1));
    } else {
      flattened.push(arr[i]);
    }
  }

  return flattened;
};