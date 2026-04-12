/**
 * Problem: Array Prototype Last
 * Link: https://leetcode.com/problems/array-prototype-last/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Check if the array is empty. If so, return null. Otherwise, return the last element of the array.
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
  if (this.length === 0) return -1;
  return this[this.length - 1];
};