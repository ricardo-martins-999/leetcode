/**
 * Problem: Increasing Order Search Tree
 * Link: https://leetcode.com/problems/increasing-order-search-tree/
 * Difficulty: Easy 
 * 
 * Approach:
 * 1. Reconstruct the tree such that each node has only a right child, forming a right-skewed tree.
 * 
 * Time Complexity: O(n) for in-order traversal
 * Space Complexity: O(h) for the recursion stack, where h is the height of the tree
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const increasingBST = function(root) {
  let current = null;
  let newRoot = null;

  const inOrderTraversal = (node) => {
    if (!node) return;

    inOrderTraversal(node.left);

    const right = node.right;

    if (!newRoot) {
      newRoot = node;
      current = newRoot;
    } else {
      current.right = node;
      current = node;
    }

    node.left = null;
    
    inOrderTraversal(right);
  };

  inOrderTraversal(root);

  return newRoot;
};