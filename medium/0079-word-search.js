/**
 * Problem: Word Search
 * Link: https://leetcode.com/problems/word-search/
 * Difficulty: Medium
 *
 * Approach:
 * 1. Backtracking (DFS)
 *    - Try starting from each cell
 *    - Explore 4 directions (up, right, down, left)
 *    - Mark visited cells temporarily
 *    - Backtrack after exploration
 *
 * Time Complexity: O(m * n * 4^L)
 * Space Complexity: O(L)
 */

const posX = [1, 0, -1, 0];
const posY = [0, 1, 0, -1];

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function(board, word) {
	let row = board.length;
	let col = board[0].length;

	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if (backtrack(i, j, row, col, board, 0, word)) return true;
		}
	}

	return false;
};

const backtrack = function(row, col, nrow, ncol, board, index, word) {
	if (index === word.length) return true;

	if (row < 0 || row === nrow || col < 0 || col === ncol || board[row][col] !== word[index]) {
		return false;
	}

	const temp = board[row][col];
	board[row][col] = '#';

	for (let i = 0; i < 4; i++) {
		const res = backtrack(row + posX[i], col + posY[i], nrow, ncol, board, index + 1, word);
		if (res) {
      board[row][col] = temp;
      return true;
    }
	}

	board[row][col] = temp;
	
	return false;
};