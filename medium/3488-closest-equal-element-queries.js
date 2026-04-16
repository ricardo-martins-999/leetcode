/**
 * Problem: Closest Equal Element Queries
 * Link: https://leetcode.com/problems/closest-equal-element-queries/
 * Difficulty: Medium
 * 
 * Approach:
 * 1. Hash Map + Circular Neighbor Traversal (previous/next indices)
 * 
 * Time Complexity: O(n + m)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
const solveQueries = function(nums, queries) {
  const map = new Map();
  const n = nums.length;
  
  for (let i = 0; i < n; i++) {
    if (!map.has(nums[i])) map.set(nums[i], []);
    map.get(nums[i]).push(i);
  }
  
  const answer = new Array(n).fill(-1);
  for (const indices of map.values()) {
    const size = indices.length;

    if (size === 1) continue;

    for (let i = 0; i < size; i++) {
      const current = indices[i];

      const previous = indices[(i - 1 + size) % size];
      const next = indices[(i + 1) % size];

      let distanceToPrevious = Math.abs(current - previous);
      distanceToPrevious = Math.min(distanceToPrevious, n - distanceToPrevious);

      let distanceToNext = Math.abs(current - next);
      distanceToNext = Math.min(distanceToNext, n - distanceToNext);

      answer[current] = Math.min(distanceToNext, distanceToPrevious);
    }
  }

  return queries.map(query => answer[query]);
};