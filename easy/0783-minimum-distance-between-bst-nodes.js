/**
 * Problem: Minimum Distance Between BST Nodes 
 * Link: https://leetcode.com/problems/minimum-distance-between-bst-nodes/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Recursive Inorder Traversal
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(h) where h is the height of the tree
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDiffInBST = function(root) {
  if (!root) return 0;

  let minDiff = Number.MAX_SAFE_INTEGER;
  let prev = null;

  const traverseInorder = (node) => {
    if (!node) return;

    traverseInorder(node.left);

    if (prev !== null) {
      minDiff = Math.min(minDiff, node.val - prev);
    }

    prev = node.val;
    traverseInorder(node.right);
  }

  traverseInorder(root);
  return minDiff;
};