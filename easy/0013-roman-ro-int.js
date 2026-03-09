/**
 * Problem: Roman to Integer
 * Link: https://leetcode.com/problems/roman-to-integer/
 * Difficulty: Easy
 *
 * Approaches:
 * 1. Explicit subtraction rules
 * 2. Compare current value with next value (cleaner solution)
 */

/*
 * Approach 1: Explicit subtraction rules
 *
 * Idea:
 * Handle special subtraction cases manually:
 * IV, IX, XL, XC, CD, CM
 *
 * If one of these patterns appears, we adjust the result
 * and skip the next character.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
	const symbolsMap = {
    I:1,V:5,X:10,L:50,C:100,D:500,M:1000
  };
	let result = 0;
	for (let i = 0; i < s.length; i++) {
		
		if (s[i] === 'I' && (s[i+1] === 'V' || s[i+1] === 'X')) {
			i++;
			result = result + symbolsMap[s[i]] - 1;
		} else if (s[i] === 'X' && (s[i+1] === 'L' || s[i+1] === 'C')) {
			i++;
			result = result + symbolsMap[s[i]] - 10;
		} else if (s[i] === 'C' && (s[i+1] === 'D' || s[i+1] === 'M')) {
			i++;
			result = result + symbolsMap[s[i]] - 100;
		}	else {
			result = result + symbolsMap[s[i]];
		}

	}

	return result;
};

/*
 * Approach 2: Compare current and next value (Elegant solution)
 *
 * Idea:
 * If the next Roman numeral is larger than the current one,
 * it means we are in a subtraction case.
 *
 * Example:
 * IV → 5 > 1 → subtract 1
 *
 * Otherwise we simply add the value.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {string} s
 * @return {number}
 */
const romanToIntElegant = function(s) {
  const symbolsMap = {
    I:1,V:5,X:10,L:50,C:100,D:500,M:1000
  };

  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    const current = symbolsMap[s[i]];
    const next = symbolsMap[s[i+1]];

    if (next > current) {
      ans -= current;
    } else {
      ans += current;
    }
  }

  return ans;
};
