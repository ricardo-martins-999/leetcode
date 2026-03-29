/**
 * Problem: Brick Wall
 * Link: https://leetcode.com/problems/brick-wall/
 * Difficulty: Medium
 *
 * Approach:
 * 1. Prefix Sum + Hash Map (Counting / Frequency)
 *
 * Time Complexity: O(n * m)
 * Space Complexity: O(n)
 */

/**
 * @param {number[][]} wall
 * @return {number}
 */
const leastBricks = function(wall) {
  const map = new Map();

  let sumMax = 0;

  for (let line of wall) {
    let sum = 0;
    for (let i = 0; i + 1 < line.length; i++) {
      sum += line[i];
      const count = (map.get(sum) || 0) + 1;
      map.set(sum, count);
      sumMax = Math.max(sumMax, count);
    }
  }

  return wall.length - sumMax;
};