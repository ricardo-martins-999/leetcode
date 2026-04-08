/**
 * Problem: Sum Root to Leaf Numbers
 * Link: https://leetcode.com/problems/sum-root-to-leaf-numbers/
 * Difficulty: Medium
 * 
 * Approach:
 * 1. Recusion
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(h) where h is the height of the tree
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumNumbers = function(root) {
  const sum = (node, current) => {
    if (!node) return 0;

    const newValue = current * 10 + node.val;

    if (!node.left && !node.right) return newValue;

    return sum(node.left, newValue) + sum(node.right, newValue);
  };

  return sum(root, 0);
};