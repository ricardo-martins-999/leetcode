/**
 * Problem: Is Object Empty
 * Link: https://leetcode.com/problems/is-object-empty/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Check if the input is an array.
 * 2. If it's an array, return true if its length is 0.
 * 3. If it's an object, return true if it has no enumerable properties.
 *
 * Time Complexity: O(n) where n is the number of keys in the object or the length of the array.
 * Space Complexity: O(1)
 */

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
const isEmpty = function(obj) {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  return Object.keys(obj).length === 0;
};