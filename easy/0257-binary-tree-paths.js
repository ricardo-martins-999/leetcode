/**
 * Problem: Binary Tree Paths
 * Link: https://leetcode.com/problems/binary-tree-paths/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Recursion with backtracking
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(h) where h is the height of the tree
 */

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function(root) {
  const answer = [];

  const dfs = (node, path=[]) => {
    if (!node) return;

    path.push(node.val);

    if (!node.left && !node.right) {
      answer.push(path.join("->"));
    } else {
      dfs(node.left, path);
      dfs(node.right, path);
    }

    path.pop();
  };

  dfs(root);
  return answer;
};