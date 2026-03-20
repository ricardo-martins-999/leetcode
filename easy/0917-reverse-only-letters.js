/**
 * Problem: Reverse Only Letters
 * Link: https://leetcode.com/problems/reverse-only-letters/
 * Difficulty: Easy
 *
 * Approach:
 * 1. Two Pointers
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n) (due to array conversion)
 */

/**
 * Helper function to check if a character is a letter
 *
 * @param {string} letter
 * @return {boolean}
 */
const isLetter = function(letter) {
  if (letter >= 'A' && letter <= 'Z') return true;
  if (letter >= 'a' && letter <= 'z') return true;
  return false;
}

/**
 * @param {string} s
 * @return {string}
 */
const reverseOnlyLetters = function(s) {
  const ans = s.split("");

  let i = 0;
  let j = ans.length - 1;

  while (i < j) {
    if (isLetter(ans[i]) && isLetter(ans[j])) {
      [ans[j], ans[i]] = [ans[i], ans[j]];
      i++;
      j--;
    } else if (!isLetter(ans[i])) {
      i++;
    } else if (!isLetter(ans[j])) {
      j--;
    } else {
      i++;
      j--;
    }
  }

  return ans.join("");
};