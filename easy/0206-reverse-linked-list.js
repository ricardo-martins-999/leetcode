/**
 * Problem: Reverse Linked List
 * Link: https://leetcode.com/problems/reverse-linked-list/
 * Difficulty: Easy
 *
 * Approach:
 * 1. Iterative (Pointer Reversal)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
  let new_list = null;
  
  while (head) {
    let next_node = head.next;
    head.next = new_list;
    new_list = head;
    head = next_node;
  }
  
  return new_list;
};