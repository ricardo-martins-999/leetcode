/**
 * Problem: Detect Capital
 * Link: https://leetcode.com/problems/detect-capital/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Count uppercase Letters
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = function(word) {
  const isUpperCase = (char) => char >= 'A' && char <= 'Z';

  let upperCaseCount = 0;

  for (const char of word)
    if (isUpperCase(char)) upperCaseCount++;

  return (upperCaseCount === 0 || upperCaseCount === word.length || (upperCaseCount === 1 && isUpperCase(word[0])));
};