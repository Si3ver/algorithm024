/**
 * https://leetcode-cn.com/problems/relative-sort-array/
 * 1122. 数组的相对排序
 * 
 */

// hashmap + Array.prototype.sort()
function relativeSortArray(arr1, arr2) {
  const lookup = new Map()
  const N = arr2.length
  arr2.forEach((item, idx) => {
    lookup.set(item, idx)
  })
  return arr1.sort((x, y) => {
    x = lookup.has(x) ? lookup.get(x) : N + x
    y = lookup.has(y) ? lookup.get(y) : N + y
    return x - y
  })
}

// ---- test case ----
var arr1 = [2,3,1,3,2,4,6,7,9,2,19]
var arr2 = [2,1,4,3,9,6]
console.log(relativeSortArray(arr1, arr2))
console.log(arr1)
