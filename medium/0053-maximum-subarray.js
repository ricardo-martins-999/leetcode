/**
 * Problem: Maximum Subarray
 * Link: https://leetcode.com/problems/maximum-subarray/
 * Difficulty: Medium
 *
 * Approach:
 * 1. Kadane’s Algorithm
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  let localMax = nums[0];
  let globalMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    localMax = Math.max(nums[i], localMax + nums[i]);
    if (localMax > globalMax) {
      globalMax = localMax;
    }
  }
  
  return globalMax;    
};