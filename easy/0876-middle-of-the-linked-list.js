/**
 * Problem: Middle of the Linked List
 * Link: https://leetcode.com/problems/middle-of-the-linked-list/
 * Difficulty: Easy
 *
 * Approach:
 * 1. Two Pointers (Slow & Fast)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function(head) {
  let slow = head;
  let fast = head;
  
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
};