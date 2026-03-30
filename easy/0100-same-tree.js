/**
 * Problem: Same Tree
 * Link: https://leetcode.com/problems/same-tree/
 * Difficulty: Easy
 *
 * Approach:
 * 1. DFS (recursive) with structural comparison
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(h) (h = height of the tree, due to recursion stack)
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function(p, q) {
  if (!p && !q) return true;
	if (!p || !q) return false;
  if (p.val !== q.val) return false;

	return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};