/**
 * Problem: Fizz Buzz
 * Link: https://leetcode.com/problems/fizz-buzz/
 * Difficulty: Easy
 *
 * Approach:
 * 1. Iteration + Modulo
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function(n) {
  const ans = [];

  for (let i = 1; i <= n; i++) {
    let str = "";

    if (i % 3 === 0) str += "Fizz";
    if (i % 5 === 0) str += "Buzz";

    ans.push(str || String(i));
  }

  return ans;
}
