/**
 * Problem: Maximum Depth of Binary Tree 
 * Link: https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * Difficulty: Easy
 *
 * Approach:
 * 1. Recursive DFS (top-down) tracking current depth
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(h) (h = height of the tree, recursion stack)
 */

/**
 * @param {TreeNode} current
 * @param {number} currentDepth 
 * @returns {number}
 */
const dfs = function(current, currentDepth) {
	if (!current) return currentDepth;
	currentDepth++;
	return Math.max(
		dfs(current.left, currentDepth),
		dfs(current.right, currentDepth)
	);
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function(root) {
  return dfs(root, 0);
};