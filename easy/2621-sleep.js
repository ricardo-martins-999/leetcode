/**
 * Problem: Sleep
 * Link: https://leetcode.com/problems/sleep/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Create a Promise that resolves after a specified number of milliseconds.
 * 
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  await new Promise(resolve => setTimeout(resolve, millis));
}