/**
 * https://leetcode-cn.com/problems/binary-search/
 * 704. 二分查找
 */

function search(arr, target) {
  let left = 0, right = arr.length - 1
  while (left <= right) {
    const mid = left + ((right - left) >> 1)
    if (target === arr[mid]) {
      return mid
    } else if (target < arr[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}

// ---- test case ----
console.log(search([-1,0,3,5,9,12], 9))
console.log(search([-1,0,3,5,9,12], 2))
