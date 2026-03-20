/**
 * Problem: Remove Duplicates from Sorted List II
 * Link: https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
 * Difficulty: Medium
 *
 * Approach:
 * 1. Iterative (Two Pointers + Dummy Node)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
  const dummy = new ListNode(0, head);
  let prev = dummy;
  let current = head;

  while (current) {
    if (current.next && current.val === current.next.val) {
      while (current.next && current.val === current.next.val) {
        current = current.next;
      }
      prev.next = current.next;
    } else {
      prev = prev.next;
    }

    current = current.next;
  }

  return dummy.next;
};