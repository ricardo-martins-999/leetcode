/**
 * Problem: Symmetric Tree
 * Link: https://leetcode.com/problems/symmetric-tree/
 * Difficulty: Easy
 *
 * Approaches:
 * 1. DFS (Recursive mirror comparison)
 * 2. BFS (Iterative)
 */

/**
 * Approach 1: DFS (Recursive mirror comparison)
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(h) (h = height of the tree, due to recursion stack)
 */

/**
 * @param {TreeNode} subTree1
 * @param {TreeNode} subTree2 
 * @returns {boolean}
 */
const isMirror = function(subTree1, subTree2) {
	if (!subTree1 && !subTree2) return true;
	if (!subTree1 || !subTree2) return false;
	if (subTree1.val !== subTree2.val) return false;

	return isMirror(subTree1.left, subTree2.right) &&
	       isMirror(subTree1.right, subTree2.left);
};

/**
 * Approach 2: BFS (Iterative)
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {TreeNode} root 
 * @returns {boolean}
 */
const isSymmetricBFS = function(root) {
	if (!root) return true;

	const queue = [];
	queue.push(root.left);
	queue.push(root.right);

	let head = 0;
	while (head < queue.length) {
		const subTree1 = queue[head++];
		const subTree2 = queue[head++];

		if (!subTree1 && !subTree2) continue;
		if (!subTree1 || !subTree2) return false;
		if (subTree1.val !== subTree2.val) return false;

		queue.push(subTree1.left);
		queue.push(subTree2.right);
		queue.push(subTree1.right);
		queue.push(subTree2.left);
	}

	return true;
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function(root) {
	if (!root) return true;
	return isMirror(root.left, root.right);
};