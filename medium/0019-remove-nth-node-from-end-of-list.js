/**
 * Problem: Remove Nth Node From End of List
 * Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Difficulty: Medium
 *
 * Approach:
 * 1. Two Pointers (Fast & Slow)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
  if (!head.next) return null;
  
  let slow = head;
  let fast = head;

  let i = 1;
  while (i <= n) fast = fast.next;

  if (!fast) return head.next;
  
  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  if (slow.next)
    slow.next = slow.next.next;

  return head;
};