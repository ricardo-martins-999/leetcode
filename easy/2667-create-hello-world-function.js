/**
 * Problem: Create Hello World Function
 * Link: https://leetcode.com/problems/create-hello-world-function/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Closure to return a function that always returns "Hello World"
 * 
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

/**
 * @return {Function}
 */
const createHelloWorld = function() {
  const greeting = "Hello World";
  return function(...args) {
    return greeting;
  };
};