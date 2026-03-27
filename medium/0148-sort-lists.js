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
const sortList = function(head) {
	return mergeSort(head);
};

const split = function(head) {
	let slow = head;
	let fast = head;

	while (fast && fast.next) {
		fast = fast.next.next;
		if (fast) {
			slow = slow.next;
		}
	}

	let second = slow.next;
	slow.next = null;

	return second;
}

const merge = function(first, second) {
	if (!first) return second;
	if (!second) return first;

	if (first.val < second.val) {
		first.next = merge(first.next, second);
		return first;
	} else {
		second.next = merge(first, second.next);
		return second;
	}
}

const mergeSort = function(head) {
	if (!head || !head.next) {
		return head;
	}

	let second = split(head);

	head = mergeSort(head);
	second = mergeSort(second);

	return merge(head, second);
}