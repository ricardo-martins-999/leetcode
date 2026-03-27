/**
 * Problem: Search Insert Position
 * Link: https://leetcode.com/problems/search-insert-position/
 * Difficulty: Easy
 *
 * Approach:
 * 1. Binary Search
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return low;
};