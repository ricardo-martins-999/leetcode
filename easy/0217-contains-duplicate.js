/**
 * Problem: Contains Duplicate
 * Link: https://leetcode.com/problems/contains-duplicate/
 * Difficulty: Easy
 *
 * Approach:
 * 1. Hash Set
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) {
      return true;
    } 
    set.add(num);
  }
  return false;
};