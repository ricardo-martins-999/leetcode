/**
 * Problem: Container With Most Water
 * Link: https://leetcode.com/problems/container-with-most-water/
 * Difficulty: Medium
 * 
 * Approach:
 * 1. Two-pointer technique: Start with two pointers, one at the beginning and one at the end of the array.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let areaTotal = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);

    areaTotal = Math.max(areaTotal, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return areaTotal;
};