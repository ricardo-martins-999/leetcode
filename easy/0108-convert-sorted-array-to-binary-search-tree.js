/**
 * Problem: Convert Sorted Array to Binary Search Tree
 * Link: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Recursion
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(log n)
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums) {
  const buildBST = function (start, end) {
    if (start > end) {
      return null;
    }

    const mid = Math.floor((start + end) / 2);

    const node = new TreeNode(nums[mid]);

    node.left = buildBST(start, mid - 1);
    node.right = buildBST(mid + 1, end);

    return node;
  }
  
  return buildBST(0, nums.length - 1);
};