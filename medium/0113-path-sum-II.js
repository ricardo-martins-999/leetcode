/**
 * Problem: Path Sum II
 * Link: https://leetcode.com/problems/path-sum-ii/
 * Difficulty: Medium
 * 
 * Approach:
 * 1. Recursion with backtracking
 * 
 * Time Complexity: O(n * h) where n is the number of nodes and h is the height of the tree
 * Space Complexity: O(h) where h is the height of the tree
 */

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
const pathSum = function(root, targetSum) {
  const answer = [];

  const dfs = (node, currentSum = 0, path = []) => {
    if (!node) return;

    currentSum += node.val;
    path.push(node.val);

    if (!node.left && !node.right && currentSum === targetSum) {
      answer.push([...path]);
    }

    dfs(node.left, currentSum, path);
    dfs(node.right, currentSum, path);

    path.pop();
  };

  dfs(root);

  return answer;
};