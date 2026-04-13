/**
 * Problem: Majority Element
 * Link: https://leetcode.com/problems/majority-element/
 * Difficulty: Easy
 * 
 * Approaches:
 * 1. Count the occurrences of each element using a hash map.
 * 2. Boyer-Moore Voting Algorithm: This algorithm
 */

/**
 * Approach 1: Hash Map
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  const countMap = new Map();

  for (const num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  for (const [num, count] of countMap.entries()) {
    if (count > nums.length / 2) return num;
  }

  return -1;
};


/**
 * Approach 2: Boyer-Moore Voting Algorithm
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const boyerMoore = function(nums) {
  let element = null;
  let count = 0;

  for(let i = 0; i < nums.length; i++){
    if(count === 0){
      element = nums[i];
    }
    count += (element === nums[i]) ? 1 : -1;
  }

  return element;   
};