/**
 * Problem: To Be or Not To Be
 * Link: https://leetcode.com/problems/to-be-or-not-to-be/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Return an object with methods to compare values
 * 
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

/**
 * @param {string} val
 * @return {Object}
 */
const expect = function(val) {
  return {
    toBe: function(expected) {
      if (val === expected) return true;
      throw new Error("Not Equal");
    },
    notToBe: function(expected) {
      if (val !== expected) return true;
      throw new Error("Equal");
    }
  };
};