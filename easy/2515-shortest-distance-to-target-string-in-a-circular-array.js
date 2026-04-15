/**
 * Problem: Shortest Distance to Target String in a Circular Array 
 * Link: https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/
 * Difficulty: Easy
 * 
 * Approaches:
 * 1. Two pointers
 * 2. Linear search
 */

/**
 * Approach 1: Two Pointers
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
const closestTarget = function(words, target, startIndex) {
  const n = words.length;
  let left = startIndex;
  let right = startIndex;
  let distance = 0;

  while (distance < n) {
    if (words[left] === target || words[right] === target) {
      return distance;
    }

    left = (left - 1 + n) % n;
    right = (right + 1) % n;
    distance++;
  }

  return -1;
};


/**
 * Approach 2: Linear Search
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
const closestTargetLinear = function(words, target, startIndex) {
  const n = words.length;
  let minDistance = Infinity;

  for (let i = 0; i < n; i++) {
    if (words[i] === target) {
      const direct = Math.abs(i - startIndex);
      const circular = n - direct;
      minDistance = Math.min(minDistance, direct, circular);
    }
  }

  return minDistance === Infinity ? -1 : minDistance;
};