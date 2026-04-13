/**
 * Problem: Minimum Distance to the Target Element 
 * Link: https://leetcode.com/problems/minimum-distance-to-the-target-element/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Iterate through the array and calculate the distance of each element from the start index.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
const getMinDistance = function(nums, target, start) {
  let minDistance = Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      minDistance = Math.min(minDistance, Math.abs(i - start));
    }
  }

  return minDistance;
};