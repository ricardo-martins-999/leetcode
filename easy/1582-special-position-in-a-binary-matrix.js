/**
 * Problem: Special Position in a Binary Matrix
 * Link: https://leetcode.com/problems/special-positions-in-a-binary-matrix/
 * Difficulty: Easy
 *
 * Approaches:
 * 1. Brute Force
 *
 * Time Complexity: O(n * m * (n + m))
 * Space Complexity: O(1)
 */

/**
 * @param {number[][]} mat
 * @return {number}
 */
const numSpecial = function(mat) {
  const m = mat.length;
  const n = mat[0].length;
  let ans = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        let row = 0, col = 0;

        for (let k = 0; k < n; k++) row += mat[i][k];
        for (let k = 0; k < m; k++) col += mat[k][j];

        if (row === 1 && col === 1) ans++;
      }
    }
  }

  return ans;
};