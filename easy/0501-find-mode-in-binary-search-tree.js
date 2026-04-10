/**
 * Problem: Find Mode in Binary Search Tree
 * Link: https://leetcode.com/problems/find-mode-in-binary-search-tree/
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
 * @return {number[]}
 */
const findMode = function(root) {
  const answer = [];
  let previousValue = null;
  let maxCount = 0;
  let currentCount = 0;

  const traverse = function(node) {
    if (!node) return null;

    traverse(node.left);

    if (node.val !== previousValue) {
      currentCount = 1;
    } else {
      currentCount++;
    }

    if (currentCount === maxCount) {
      answer.push(node.val);
    } else if (currentCount > maxCount) {
      maxCount = currentCount;
      answer.length = 0;
      answer.push(node.val);
    }

    previousValue = node.val;

    traverse(node.right);
  }

  traverse(root);

  return answer;
};