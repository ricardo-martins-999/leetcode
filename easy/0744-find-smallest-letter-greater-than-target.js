/**
 * Problem: Find Smallest Letter Greater Than Target
 * Link: https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Use binary search to find the smallest letter greater than the target.
 * 
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = function(letters, target) {
  const size = letters.length;
  let left = 0;
  let right = size - 1;
  let answer = size;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (letters[middle] > target) {
      answer = middle;
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return letters[answer % size];
};