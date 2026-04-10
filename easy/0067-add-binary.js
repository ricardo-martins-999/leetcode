/**
 * Problem: Add Binary
 * Link: https://leetcode.com/problems/add-binary/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Simulate the addition process
 * 
 * Time Complexity: O(max(n, m))
 * Space Complexity: O(max(n, m))
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
  let carry = 0;

  let i = a.length - 1;
  let j = b.length - 1;

  let result = "";

  while (i >= 0 || j >= 0 || carry) {
    const bitA = (i >= 0 ? a.charCodeAt(i)-48 : 0);
    const bitB = (j >= 0 ? b.charCodeAt(j)-48 : 0);
    
    const sum = bitA + bitB + carry;

    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  return result;
};