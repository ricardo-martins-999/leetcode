/**
 * Problem: Binary Tree Level Order Traversal 
 * Link: https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Difficulty: Medium
 * 
 * Approach:
 * 1. BFS
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(w) where w is the maximum width of the tree
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
  if (!root) return [];
  
  const answer = [];
  const queue = [root];
  let front = 0;

  while (front < queue.length) {
    const levelSize = queue.length - front;
    const levelNodes = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue[front++];
      levelNodes.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    answer.push(levelNodes);
  }

  return answer;
};