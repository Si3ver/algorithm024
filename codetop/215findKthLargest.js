/**
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 * 215. 数组中的第K个最大元素 ｜ medium
 */

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

function findKthLargest(arr, k, l = 0, r = arr.length - 1) {
  // console.log("🚀", arr, k, l, r)
  if (l === r) return arr[l]
  const pivotIdx = partition(arr, l, r)
  if (pivotIdx === r + 1 - k) {
    return arr[pivotIdx]
  } else if (pivotIdx < r + 1 - k) { // 继续在右边找
    return findKthLargest(arr, k, pivotIdx + 1, r)
  } else {  // 在左边找
    return findKthLargest(arr, k - (r - pivotIdx + 1), l, pivotIdx - 1)
  }
}

// ---- test case ----
console.log(findKthLargest([3,2,1,5,6,4], 2)) // 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)) // 4
console.log(findKthLargest([2, 1], 2))  // 1
console.log(findKthLargest([7,6,5,4,3,2,1], 2)) // 6
console.log(findKthLargest([7,6,5,4,3,2,1], 5)) // 3
