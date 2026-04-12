/**
 * Problem: First Bad Version
 * Link: https://leetcode.com/problems/first-bad-version/
 * Difficulty: Easy
 * 
 * Approach:
 * 1. Use binary search to efficiently find the first bad version.
 * 
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let left = 1;
    let right = n;

    while (left < right) {
      const mid = Math.floor( (left + right) / 2 );
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    
    return left;
  };
};