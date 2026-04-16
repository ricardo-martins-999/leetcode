/**
 * Problem: Array Reduce Transformation
 * Link: https://leetcode.com/problems/array-reduce-transformation/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Iterate through the input array and apply the given function to each element, accumulating the results in a single value.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function(nums, fn, init) {
  let accumulator = init;
  for (let i = 0; i < nums.length; i++) {
    accumulator = fn(accumulator, nums[i], i);
  }
  return accumulator;
};