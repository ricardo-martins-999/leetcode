/**
 * Problem: Chunk Array
 * Link: https://leetcode.com/problems/chunk-array/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Initialize an empty array to store the chunks.
 * 2. Iterate through the input array with a step size equal to the specified chunk size.
 * 3. For each iteration, slice the array from the current index to the current index plus the chunk size.
 * 4. Push the sliced array into the chunks array.
 * 5. Return the chunks array.
 *
 * Time Complexity: O(n) where n is the length of the input array.
 * Space Complexity: O(n) where n is the length of the input array.
 */

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
const chunk = function(arr, size) {
  const answer = [];
  
  for (let i = 0; i < arr.length; i += size) {
    answer.push(arr.slice(i, i + size));
  }

  return answer;
};