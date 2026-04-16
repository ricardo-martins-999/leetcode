/**
 * Problem: Filter Elements from Array
 * Link: https://leetcode.com/problems/filter-elements-from-array/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Iterate through the input array and apply the given function to each element. If the function returns true, include the element in the result array.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = function(arr, fn) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) answer.push(arr[i]);
  }
  return answer;
};