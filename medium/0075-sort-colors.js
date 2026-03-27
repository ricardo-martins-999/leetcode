/**
 * Problem: Sort Colors
 * Link: https://leetcode.com/problems/sort-colors/
 * Difficulty: Medium
 *
 * Approach:
 * 1. Three Pointers (Dutch National Flag)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {
	let low = 0;
	let mid = 0;
	let high = nums.length - 1;

	while (mid <= high) {
		if (nums[mid] === 0) {
			[nums[low], nums[mid]] = [nums[mid], nums[low]];
			low++;
			mid++;
		} else if (nums[mid] === 1) {
			mid++;	
		} else {
			[nums[high], nums[mid]] = [nums[mid], nums[high]];
			high--;
		}
	}
};