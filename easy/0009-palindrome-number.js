/**
 * Problem: Palindrome Number
 * Link: https://leetcode.com/problems/palindrome-number/
 * Difficulty: Easy
 *
 * Approaches:
 * 1. Reverse the entire number
 * 2. Reverse only half of the number (optimized)
 */

/*
 * Approach 1: Reverse the entire number
 *
 * Time Complexity: O(log10(n))
 * Space Complexity: O(1)
 */

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  if (x < 0) return false;
  if (x <= 9) return true;

  let initialValue = x;
  let reverseNumber = 0;

  while (x > 0) {
    let lastDigit = x % 10;
    reverseNumber = reverseNumber * 10 + lastDigit;
    x = Math.floor(x / 10);
  }

  return initialValue === reverseNumber;
};

/*
  * Approach 2: Reverse only half of the number (Optimized)
  *
  * Instead of reversing the entire number, we reverse only half.
  * This avoids potential integer overflow and reduces operations.
  *
  * Time Complexity: O(log10(n))
  * Space Complexity: O(1)
  */

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindromeOptimized = function(x) {
  if (x < 0) return false;

  if (x % 10 === 0 && x !== 0) return false;

  let reversedHalf = 0;

  while (x > reversedHalf) {
    let digit = x % 10;
    reversedHalf = reversedHalf * 10 + digit;
    x = Math.floor(x / 10);
  }

  return x === reversedHalf || x === Math.floor(reversedHalf / 10);
};