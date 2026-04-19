/**
 * Problem: Count Negative Numbers in a Sorted Matrix
 * Link: https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
 * Difficulty: Easy
 * 
 * Approaches:
 * 1. Start from the bottom-left corner of the matrix.
 * 2. Binary Search
 */

/**
 * Approach 1: Start from the bottom-left corner of the matrix.
 * 
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = function(grid) {
  let count = 0;

  let m = grid.length;
  let n = grid[0].length;

  let i = m - 1;
  let j = 0;

  while (i >= 0 && j < n) {
    if (grid[i][j] < 0) {
      count += n - j;
      i--;
    } else {
      j++;
    }
  }

  return count;
};

/**
 * Approach 2: Binary Search
 * 
 * Time Complexity: O(n log m)
 * Space Complexity: O(1)
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegativesBinarySearch = function(grid) {
  let count = 0;
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m; i++) {
    let left = 0;
    let right = n - 1;
    let firstNegativeIndex = n;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (grid[i][mid] < 0) {
        firstNegativeIndex = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    count += n - firstNegativeIndex;
  }

  return count;
};