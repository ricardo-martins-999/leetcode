/**
 * Problem: Range Sum of BST
 * Link: https://leetcode.com/problems/range-sum-of-bst/
 * Difficulty: Easy 
 * 
 * Approach:
 * 1. Recursion
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 */

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const rangeSumBST = function(root, low, high) {
  let sum = 0;

  const traverse = function(node) {
    if (!node) return;

    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }
    
    if (node.val > low) {
      traverse(node.left);
    }

    if (node. val < high) {
      traverse(node.right);
    }
  }

  traverse(root);

  return sum;
};