/**
 * Problem: Missing Number
 * Link: https://leetcode.com/problems/missing-number/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. XOR (Bitwise)
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
  const size = nums.length;
  let xor = 0;

  for (let num of nums) {
    xor ^= num;
  }

  for (let i = 0; i <= size; i++) {
    xor ^= i;
  } 

  return xor;
};