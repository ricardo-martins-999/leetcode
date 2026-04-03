/**
 * Problem: Number of 1 Bit
 * Link: https://leetcode.com/problems/number-of-1-bits/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Brian Kernighan’s Algorithm
 * 
 * Time Complexity: O(k) (where k is the number of set bits in the binary representation of the number.)
 * Space Complexity: O(1)
 */

/**
 * @param {number} n
 * @return {number}
 */
const hammingWeight = function(n) {
  n = n >>> 0;
  
  let answer = 0;
  while (n) {
    n &= n - 1;
    answer++;
  }
  return answer;
};