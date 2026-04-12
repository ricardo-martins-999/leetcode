/**
 * Problem: Implement Stack using Queues
 * Link: https://leetcode.com/problems/implement-stack-using-queues/
 * Difficulty: Easy
 * 
 * Approaches:
 * 1. Two Queues
 * 2. One Queue
 */

/**
 * Approach 1: Two Queues
 * 
 * Time Complexity: O(n) for push, O(1) for pop, top and empty
 * Space Complexity: O(n) for the two queues
 */

class MyStackTwoQueues {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(x) {
    this.queue1.push(x);
    while (this.queue2.length) {
      this.queue1.push(this.queue2.shift());
    }
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
  }

  pop() {
    return this.queue2.shift();
  }

  top() {
    return this.queue2[0];
  }

  empty() {
    return this.queue2.length === 0;
  }
}


/**
 * Approach 2: One Queue
 * 
 * Time Complexity: O(n) for push, O(1) for pop, top and empty
 * Space Complexity: O(n) for the single queue
 */

class MyStackOneQueue {
  constructor() {
    this.queue = [];
  }
  
  push(x) {
    this.queue.push(x);
    for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue.push(this.queue.shift());
    }
  }

  pop() {
    return this.queue.shift();
  }

  top() {
    return this.queue[0];
  }

  empty() {
    return this.queue.length === 0;
  }
}