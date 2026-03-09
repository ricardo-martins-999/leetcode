/**
 * Problem: Reverse String II
 * Link: https://leetcode.com/problems/reverse-string-ii/
 * Difficulty: Easy
 *
 * Approach:
 * Two Pointers with block iteration
 */


/*
 * Approach: Reverse blocks using Two Pointers
 *
 * Idea:
 * For every block of size 2k:
 * - Reverse the first k characters
 * - Leave the next k characters unchanged
 *
 * Steps:
 * 1. Convert the string to an array (since strings are immutable).
 * 2. Iterate in steps of 2k.
 * 3. Reverse the first k characters using two pointers.
 *
 * Example:
 * s = "abcdefg", k = 2
 *
 * Step 1:
 * ab -> ba
 *
 * Step 2:
 * cd -> unchanged
 *
 * Step 3:
 * ef -> fe
 *
 * Result:
 * "bacdfeg"
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n) (due to array conversion)
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = function(s, k) {
  const arr = s.split("");

  for (let i = 0; i < arr.length; i += 2 * k) {
    let left = i;
    let right = Math.min(i + k - 1, arr.length - 1);

    while (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  return arr.join("");
};
