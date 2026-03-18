/**
 * Problem: Elimination Game
 * Link: https://leetcode.com/problems/elimination-game/
 * Difficulty: Medium
 *
 * Approach:
 * 1. Recursion (Simulation with Pattern)
 *
 * Idea:
 * Instead of simulating the entire list, track:
 * - the starting number (x)
 * - the step between remaining numbers
 * - the count of remaining elements
 * - the direction of elimination (left → right or right → left)
 *
 * At each step:
 * - If eliminating from left OR count is odd → move the head (x += step)
 * - Double the step (step *= 2)
 * - Halve the count (count = count / 2)
 * - Flip direction
 *
 * Repeat until only one number remains.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(log n) (due to recursion stack)
 */

/**
 * Helper function
 *
 * @param {number} x - current head value
 * @param {number} step - distance between remaining numbers
 * @param {number} count - number of remaining elements
 * @param {boolean} direction - true = left to right, false = right to left
 * @return {number}
 */
const helper = function(x, step, count, direction) {
  if (count < 2) return x;

  let increment = (direction || count % 2 === 1) ? step : 0;

  return helper(
    x + increment,
    2 * step,
    Math.floor(count / 2),
    !direction
  );
}

/**
 * @param {number} n
 * @return {number}
 */
const lastRemaining = function(n) {
  return helper(1, 1, n, true);
};