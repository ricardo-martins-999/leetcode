/**
 * Problem: Add Two Promises
 * Link: https://leetcode.com/problems/add-two-promises
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Promise.all to wait for both promises to resolve and then add their results
 * 
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async function(promise1, promise2) {
  const [result1, result2] = await Promise.all([promise1, promise2]);
  return result1 + result2;
};