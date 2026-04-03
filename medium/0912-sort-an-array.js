/**
 * Problem: Sort an Array 
 * Link: https://leetcode.com/problems/sort-an-array/
 * Difficulty: Medium
 * 
 * Approach:
 * 1. Merge Sort
 * 
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function(nums) {
  mergeSort(nums, 0, nums.length - 1);
  return nums;
};

const merge = function(arr, start, mid, end) {
  const leftSize = mid - start + 1;
  const rightSize = end - mid;

  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < leftSize; i++) {
    leftArr.push(arr[start + i]);
  }

  for (let j = 0; j < rightSize; j++) {
    rightArr.push(arr[mid + 1 + j]);
  }

  let i = 0, j = 0, k = start;

  while (i < leftSize && j < rightSize) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k++] = leftArr[i++];
    } else {
      arr[k++] = rightArr[j++];
    }
  }

  while (i < leftSize) {
    arr[k++] = leftArr[i++];
  }

  while (j < rightSize) {
    arr[k++] = rightArr[j++];
  }
};

const mergeSort = function(arr, start, end) {
  if (start >= end) return;

  let mid = Math.floor(start + (end - start) / 2);

  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, mid, end);
};
