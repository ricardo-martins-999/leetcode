/**
 * Problem: Longest Common Prefix
 * Link: https://leetcode.com/problems/longest-common-prefix/
 * Difficulty: Easy
 *
 * Approaches:
 * 1. Brute Force
 * 2. Sorting
 * 3. Trie
 */

/*
 * Approach 1: Brute Force
 *
 * Time Complexity: O(n * m)
 * Space Complexity: O(1)
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefixBrute = function(strs) {
  if (!strs || strs.length === 0) return '';
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== strs[0][i]) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
}


/*
 * Approach 2: Sorting
 *
 * Time Complexity: O(n log n * m)
 * Space Complexity: O(1)
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefixSorting = function(strs) {
  if (!strs || strs.length === 0) return '';
  const sorted = [...strs].sort();
  let firstWord = sorted[0], lastWord = sorted.at(-1);
  for (let i = 0; i < firstWord.length; i++) {
    if (firstWord[i] !== lastWord[i]) {
      return firstWord.slice(0, i);
    }

  }
  return firstWord;
}


/*
 * Approach 3: Trie
 *
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 */

class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.isEndOfWord = true;
  }

  longestCommonPrefix() {
    let node = this.root;
    let prefix = '';
    while (node.children.size === 1 && !node.isEndOfWord) {
      const char = node.children.keys().next().value;
      prefix += char;
      node = node.children.get(char);
    }
    return prefix;
  }
}

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefixTrie = function(strs) {
  if (!strs || strs.length === 0) return '';

  const trie = new Trie();
  for (const word of strs) {
    trie.insert(word);
  }

  return trie.longestCommonPrefix();
}