/**
 * Problem: Implement Queue using Stacks
 * Link: https://leetcode.com/problems/implement-queue-using-stacks/
 * Difficulty: Easy
 * 
 * Approaches:
 * 1. Two Stacks
 * 2> One Stack
 */

/**
 * Approach 1: Two Stacks
 * 
 * Time Complexity: O(n) for push, O(1) for pop, peek and empty
 * Space Complexity: O(n) for the two stacks
 */

class MyQueueTwoStacks {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push(x) {
    this.stack1.push(x);

    while (this.stack2.length) {
      this.stack1.push(this.stack2.pop());
    }
    [this.stack1, this.stack2] = [this.stack2, this.stack1];
  }

  pop() {
    return this.stack2.pop();
  }

  peek() {
    return this.stack2[this.stack2.length - 1];
  }

  empty() {
    return this.stack2.length === 0;
  }
}

/**
 * Approach 2: One Stack
 * 
 * Time Complexity: O(n) for push, O(1) for pop, peek and empty
 * Space Complexity: O(n) for the single stack
 */

class MyQueueOneStack {
  constructor() {
    this.stack = [];
  }

  push(x) {
    this.stack.push(x);
    for (let i = 0; i < this.stack.length - 1; i++) {
      this.stack.push(this.stack.shift());
    }
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  empty() {
    return this.stack.length === 0;
  }
}