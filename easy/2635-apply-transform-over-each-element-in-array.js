/**
 * Problem: Apply Transform Over Each Element in Array
 * Link: https://leetcode.com/problems/apply-transform-over-each-element-in-array/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Iterate through the input array and apply the given function to each element, storing the results in a new array.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1) (in-place modification of the input array)
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = function(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }
  return arr;
};