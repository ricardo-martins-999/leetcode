/**
 * Problem: Linked List Cycle
 * Link: https://leetcode.com/problems/linked-list-cycle/
 * Difficulty: Easy
 *
 * Approaches:
 * 1. Hash Set
 * 2. Two Pointers (Floyd’s Cycle Detection)
 */

/**
 * Approach 1: Hash Set
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycleSet = function(head) {
  let current = head;
  const set = new Set();

  while (current) {
    if (set.has(current)) return true;
    set.add(current);
    current = current.next;
  }

  return false;
};

/**
 * Approach 2: Two Pointers (Floyd’s Cycle Detection)
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycleTwoPointer = function(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }

  return false;
};