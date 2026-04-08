/**
 * Problem: Validate Binary Search Tree
 * Link: https://leetcode.com/problems/validate-binary-search-tree/
 * Difficulty: Medium
 * 
 * Approach:
 * 1. Recursion
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(h) where h is the height of the tree
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function(root) {
  const validate = (node, minimum, maximum) => {
    if (!node) return true;

    if (!(node.val > minimum && node.val < maximum)) return false;

    return validate(node.left, minimum, node.val) && validate(node.right, node.val, maximum);
  };
  
  return validate(root, -Infinity, Infinity);
};