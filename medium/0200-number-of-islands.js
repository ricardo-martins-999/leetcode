/**
 * Problem: Number of Islands 
 * Link: https://leetcode.com/problems/number-of-islands/
 * Difficulty: Medium
 * 
 * Approach:
 * 1. DFS
 * 
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n) in worst case when the grid is filled with lands
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  const dfs = (r, c) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') return;

    grid[r][c] = '0';

    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        count++;
        dfs(r, c);
      }
    }
  }

  return count;
};