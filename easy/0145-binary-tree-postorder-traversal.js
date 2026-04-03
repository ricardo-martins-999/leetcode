/**
 * Problem: Binary Tree Postorder Traversal
 * Link: https://leetcode.com/problems/binary-tree-postorder-traversal/
 * Difficulty: Easy
 * 
 * Approuch:
 * 1. Recursion (Postorder: left → right → root)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(h) (h = height of the tree)
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = function(root) {
  if (!root) return [];
  
  const answer = [];

  const traversal = (node) => {
    if (!node) return;

    traversal(node.left);
    traversal(node.right);

    answer.push(node.val);
  };

  traversal(root);

  return answer;
};