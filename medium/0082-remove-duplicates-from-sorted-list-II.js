/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
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