/**
 * Problem: Binary Tree Preorder Traversal
 * Link: https://leetcode.com/problems/binary-tree-preorder-traversal/
 * Difficulty: Easy
 * 
 * Approuch:
 * 1. Recursion (Preorder: root → left → right)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(h) (h = height of the tree)
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = function(root) {
  if (!root) return [];
  
  const answer = [];

  const traversal = (node) => {
    if (!node) return;

    answer.push(node.val);

    traversal(node.left);
    traversal(node.right);
  };

  traversal(root);

  return answer;
};