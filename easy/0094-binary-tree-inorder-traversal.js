/**
 * Problem: Binary Tree Inorder Traversal
 * Link: https://leetcode.com/problems/binary-tree-inorder-traversal/
 * Difficulty: Easy
 *
 * Approach:
 * 1. Depth-First Search (DFS) - Recursive
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
*/
const inorderTraversal = function(root) {
  const ans = [];

  function dfs(node) {
    if (!node) return;

    dfs(node.left);
    ans.push(node.val);
    dfs(node.right);
  }

  dfs(root);
  return ans;
};