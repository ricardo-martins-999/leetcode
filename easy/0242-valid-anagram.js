/**
 * Problem: Valid Anagram
 * Link: https://leetcode.com/problems/valid-anagram/
 * Difficulty: Easy
 *
 * Approaches:
 * 1. Hash Map (frequency count)
 * 2. Counting Array (frequency)
 */

/**
 * Approach 1: Hash Map (frequency count)
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagramMap = function(s, t) {
	if (s.length !== t.length) return false;

	const map = new Map();

	for (let char of s) {
		map.set(char, (map.get(char) || 0) + 1);
	}
	
	for (let char of t) {
		const count = (map.get(char) || 0) - 1;
		if (count < 0) return false;
		map.set(char, count);
	}

	return true;
}

/**
 * Approach 2: Counting Array (frequency)
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagramArray = function(s, t) {
	if (s.length !== t.length) return false;

	const arr = new Array(26).fill(0);

	for (let i = 0; i < s.length; i++) {
		arr[s.charCodeAt(i) - 97] += 1;
		arr[t.charCodeAt(i) - 97] -= 1; 
	}

	for (let i = 0; i < 26; i++) {
		if (arr[i] !== 0) return false;
	}

	return true;
}