/**
 * Problem: Execute Asynchronous Functions in Parallel
 * Link: https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/
 * Difficulty: Medium
 * 
 * Approach:
 * 1. Create a new Promise that will resolve when all functions have completed.
 * 2. Use an array to store the results of each function.
 * 3. Use a counter to track how many functions have completed.
 * 4. For each function, call it and handle its resolution or rejection.
 * 5. If a function resolves, store its result and check if all functions have completed.
 * 
 * Time Complexity: O(n) where n is the number of functions.
 * Space Complexity: O(n) where n is the number of functions.
 */

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
const promiseAll = async function(functions) {
  return await new Promise((resolve, reject) => {
    let results = Array(functions.length);
    let completed = 0;

    functions.forEach((fn, index) => {
      fn()
        .then((result) => {
          results[index] = result;
          completed++;
          if (completed === functions.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  })
};