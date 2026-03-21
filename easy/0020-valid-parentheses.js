/**
 * Problem: Valid Parentheses
 * Link: https://leetcode.com/problems/valid-parentheses/
 * Difficulty: Easy
 *
 * Approach:
 * 1. Stack + Hash Map (Matching Pairs)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const hash = {
    ')': '(', '}': '{', ']': '[',
  };
  const stack = [];

  for (let char of s) {
    if (hash[char]) {
      if (stack.at(-1) === hash[char]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char)
    }
  }

  return stack.length === 0;
};

console.log(isValid('()[]{}'));