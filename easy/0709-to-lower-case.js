/**
 * Problem: To Lower Case
 * Link: https://leetcode.com/problems/to-lower-case/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Iterate through each character in the string.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {string} s
 * @return {string}
 */
const toLowerCase = function(s) {
  let answer = "";

  for (let ch of s) {
    let code = ch.charCodeAt(0);

    if (code >= 65 && code <= 90)
      answer += String.fromCharCode(code + 32);
    else answer += ch;
  }

  return answer;
};