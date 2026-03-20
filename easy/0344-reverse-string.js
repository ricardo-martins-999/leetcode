/**
 * Problem: Reverse String
 * Link: https://leetcode.com/problems/reverse-string/
 * Difficulty: Easy
 *
 * Approach:
 * 1. Two Pointers
 */

/*
 * Approach 1: Two Pointers
 *
 * Idea:
 * Use two pointers, one starting at the beginning of the array
 * and the other at the end.
 *
 * Swap the characters while moving the pointers toward the center.
 *
 * Example:
 * ["h","e","l","l","o"]
 *
 * Step 1:
 * h <-> o
 *
 * Step 2:
 * e <-> l
 *
 * Result:
 * ["o","l","l","e","h"]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)  (in-place modification)
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
};