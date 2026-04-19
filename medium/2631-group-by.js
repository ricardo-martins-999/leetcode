/**
 * Problem: Group By
 * Link: https://leetcode.com/problems/group-by/
 * Difficulty: Medium
 * 
 * Approach:
 * 1. Use Array.prototype.reduce to iterate through the array and build the grouped object.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
  return this.reduce((grouped, item) => {
    const key = fn(item);

    if (!grouped[key]) {
      grouped[key]= [];
    }

    grouped[key].push(item);

    return grouped;
  }, {});
};