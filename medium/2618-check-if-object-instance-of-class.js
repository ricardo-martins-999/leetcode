/**
 * Problem: Check If Object Instance Of Class
 * Link: https://leetcode.com/problems/check-if-object-instance-of-class/
 * Difficulty: Medium
 * 
 * Approach:
 * 1. Use a loop to traverse the prototype chain of the object.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
const checkIfInstanceOf = function(obj, classFunction) {
  if (obj === null || obj === undefined) return false;
  if (typeof classFunction !== "function") return false;

  let prototype = Object.getPrototypeOf(obj);

  while (prototype !== null) {
    if (prototype === classFunction.prototype) return true;
    prototype = Object.getPrototypeOf(prototype);
  }

  return false;
};