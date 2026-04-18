/**
 * Problem: Cache With Time Limit
 * Link: https://leetcode.com/problems/cache-with-time-limit/
 * Difficulty: Medium
 * 
 * Approach:
 * 1. Use a Map to store key-value pairs along with their expiration timeouts.
 * 2. When setting a key, clear any existing timeout for that key.
 * 3. Set a new timeout to delete the key after the specified duration.
 * 4. When getting a key, check if it exists and is not expired.
 * 5. When counting keys, return the size of the cache map.
 * 
 * Time Complexity: O(1)
 * Space Complexity: O(n) where n is the number of keys in the cache.
 */

const TimeLimitedCache = function() {
  this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
  let found = this.cache.has(key);
  
  if (found) {
    clearTimeout(this.cache.get(key).timeoutId);
  }

  const timeoutId = setTimeout(() => {
    this.cache.delete(key);
  }, duration);

  this.cache.set(key, { value, timeoutId });
  
  return found;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
  return this.cache.has(key) ? this.cache.get(key).value : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
  return this.cache.size;
};