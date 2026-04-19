/**
 * Problem: Multiply Strings
 * Link: https://leetcode.com/problems/multiply-strings/
 * Difficulty: Medium
 * 
 * Approach:
 * - Simulate manual multiplication (digit by digit)
 * 
 * Time Complexity: O(n * m)
 * Space Complexity: O(n + m)
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function(num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  const size1 = num1.length;
  const size2 = num2.length;

  const answer = new Array(size1 + size2).fill(0);

  for (let i = size1 - 1; i >= 0; i--) {
    for (let j = size2 - 1; j >= 0; j--) {
      const mul = (num1[i] - '0') * (num2[j] - '0');
      const sum = mul + answer[i + j + 1];
      answer[i + j + 1] = sum % 10;
      answer[i + j] += Math.floor(sum / 10); 
    }
  }

  const ans = answer.join("").replace(/^0+/, "");
  return ans === "" ? "0" : ans;
};