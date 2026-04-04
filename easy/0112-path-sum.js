/**
 * Problem: Path Sum
 * Link: https://leetcode.com/problems/path-sum/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. DFS
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(h) where h is the height of the tree
 */

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function(root, targetSum) {
  if (!root) return false;

  if (!root.left && !root.right && targetSum - root.val === 0) return true;

  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};