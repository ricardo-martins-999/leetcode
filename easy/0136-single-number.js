/**
 * Problem: Single Number
 * Link: https://leetcode.com/problems/single-number/
 * Difficulty: Easy
 *
 * Approaches:
 * 1. Frequency Map
 * 2. Bit Manipulation (XOR)
 */


/*
 * Approach 1: Frequency Map
 *
 * Idea:
 * Count how many times each number appears using a hashmap.
 * Then iterate through the map and return the number that appears only once.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  const frequenceMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (frequenceMap[nums[i]]) {
      frequenceMap[nums[i]]++;
    } else {
      frequenceMap[nums[i]] = 1;
    }
  }
  
  for (const key in frequenceMap) {
    if (frequenceMap[key] === 1) {
      return Number(key);
    }
  }
};

/*
 * Approach 2: XOR (Optimal Solution)
 *
 * Idea:
 * Using the XOR property:
 *
 * a ^ a = 0
 * a ^ 0 = a
 *
 * Since every number appears twice except one,
 * all duplicates cancel each other out.
 *
 * Example:
 * [2,2,1]
 *
 * 2 ^ 2 = 0
 * 0 ^ 1 = 1
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumberXor = function(nums) {
  let ans = 0;

  for (const n of nums) {
    ans ^= n;
  }

  return ans;
};