/**
 * Problem: Construct Binary Tree from Preorder and Inorder Traversal
 * Link: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * Difficulty: Medium
 *
 * Approach:
 * 1. Recursion + Hash Map (Index Lookup)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function(preorder, inorder) {
  let index = 0;
  const map = new Map();
  inorder.forEach((value, index) => map.set(value, index));
  
  const helper = function(start, end) {
    if (start > end) return null;

    const rootValue = preorder[index++];
    const treeNode = new TreeNode(rootValue);
    const mid = map.get(rootValue);

    treeNode.left = helper(start, mid - 1);
    treeNode.right = helper(mid + 1, end);

    return treeNode;
  }

  return helper(0, inorder.length - 1);
};