/**
 * https://leetcode-cn.com/problems/sort-an-array/
 * 912. 排序数组 | medium
 */

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return
  const pivotIdx = partition(arr, left, right)
  quickSort(arr, left, pivotIdx - 1)
  quickSort(arr, pivotIdx + 1, right)
}

function partition(arr, left, right) {
  const pivot = arr[left]
  while (left < right) {
    while (left < right && arr[right] >= pivot) --right
    if (left < right) arr[left] = arr[right]
    while (left < right && arr[left] <= pivot) ++left
    if (left < right) arr[right] = arr[left]
  }
  arr[left] = pivot
  return left
}

function sortArray(arr) {
  quickSort(arr, 0, arr.length - 1)
  return arr
}

// ---- test case ----
console.log(sortArray([5,2,3,1]))
