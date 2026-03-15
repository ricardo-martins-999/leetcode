/**
 * Problem: Merge Two Sorted Lists
 * Link: https://leetcode.com/problems/merge-two-sorted-lists/
 * Difficulty: Easy
 *
 * Approaches:
 * 1. Iterative Merge (Two Pointers)
 *
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
  const mergerdList = new ListNode(0);
  let current = mergerdList;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1
      list1 = list1.next;
    } else {
      current.next = list2
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 || list2;

  return mergerdList.next;
};