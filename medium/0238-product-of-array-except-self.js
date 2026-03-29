/**
 * Problem: Product of Array Except Self
 * Link: https://leetcode.com/problems/product-of-array-except-self/
 * Difficulty: Medium
 *
 * Approach:
 * 1. Prefix Product + Suffix Product (Space Optimized)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
  const size = nums.length;
  const answer = [1];

  for (let i = 1; i < size; i++) {
    answer.push(answer[i - 1] * nums[i - 1]);
  }

  let right = 1;

  for (let i = size - 1; i >= 0; i--) {
    answer[i] *= right;
    right *= nums[i];
  }

  return answer;
};