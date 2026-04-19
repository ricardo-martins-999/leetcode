/**
 * Problem: Join Two Arrays by ID
 * Link: https://leetcode.com/problems/join-two-arrays-by-id/
 * Difficulty: Medium
 * 
 * Approach:
 * 1. Merger with hashmap
 * 
 * Time Complexity: O(n + m)
 * Space Complexity: O(n + m)
 */

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
const join = function(arr1, arr2) {
  const answer = {};

  for (const obj of [...arr1, ...arr2]) {
    if (!answer[obj.id]) {
      answer[obj.id] = obj;
      continue;
    }

    const objExist = answer[obj.id];
    answer[obj.id] = { ...objExist, ...obj };
  }

  return Object.values(answer);
};