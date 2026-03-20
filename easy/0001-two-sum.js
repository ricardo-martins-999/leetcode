/**
 * Problem: Two Sum
 * Link: https://leetcode.com/problems/two-sum/
 * Difficulty: Easy
 *
 * Approaches:
 * 1. Brute Force
 * 2. Hash Map (Optimized)
 */

/*
 * Approach 1: Brute Force
 *
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumBrute = function(nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
};

/*
 * Approach 2: Hash Map
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumOptimized = function(nums, target) {
	let hashMap = {};
	for (let i = 0; i < nums.length; i++) {
		let comp = target - nums[i];
		if (hashMap[comp] !== undefined) {
			return [ hashMap[comp], i ];
		}
		hashMap[nums[i]] = i;
	}
};
