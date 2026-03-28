/**
 * Problem: Count Complete Tree Nodes
 * Link: https://leetcode.com/problems/count-complete-tree-nodes/
 * Difficulty: Easy
 *
 * Approach:
 * 1. Divide and Conquer (Complete Tree Optimization)
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(log n)
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes = function(root) {
  if (!root) return 0;

  let left = getDepth(root.left);
  let right = getDepth(root.right);
  
  if (left === right) {
    return (1 << left) + countNodes(root.right);
  } else {
    return (1 << right) + countNodes(root.left);
  }
};

const getDepth = function(node) {
  let depth = 0;
  while (node) {
    node = node.left;
    depth++;
  }
  return depth;
}