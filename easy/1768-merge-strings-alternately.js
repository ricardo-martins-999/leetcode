/**
 * Problem: Merge Strings Alternately
 * Link: https://leetcode.com/problems/merge-strings-alternately/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Use two pointers to iterate through both strings simultaneously.
 * 
 * Time Complexity: O(m + n)
 * Space Complexity: O(m + n)
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function(word1, word2) {
  let answer = "";
  let i = 0, j =0;

  while (i < word1.length && j < word2.length) {
    answer += word1[i++];
    answer += word2[j++];
  }

  answer += word1.slice(i);
  answer += word2.slice(j);

  return answer;
};