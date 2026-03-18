/**
 * Problem: Remove Element
 * Link: https://leetcode.com/problems/remove-element/
 * Difficulty: Easy
 *
 * Approach:
 * 1. Two Pointers (Overwrite / In-place)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
};