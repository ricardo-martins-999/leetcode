/**
 * Problem: Search in a Binary Search Tree 
 * Link: https://leetcode.com/problems/search-in-a-binary-search-tree/
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
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = function(root, val) {
  if (!root) return null;

  if (root.val === val) {
    return root;
  }

  if (root.val > val) {
    return searchBST(root.left, val);
  }

  return searchBST(root.right, val);
};