/**
 * https://leetcode-cn.com/problems/relative-sort-array/
 * 1122. 数组的相对排序
 * 
 */

// 方法一：O(nlogn)
// Step1: 使用 hashmap 记录相对次序 O(n)
// Step2: 按照相对顺序进行排序 O(nlogn)
function relativeSortArray(arr1, arr2) {
  const rank = new Map()
  const N = arr2.length
  arr2.forEach((item, idx) => {
    rank.set(item, idx)
  })
  return arr1.sort((x, y) => {
    const idx1 = rank.has(x) ? rank.get(x) : N + x
    const idx2 = rank.has(y) ? rank.get(y) : N + y
    return idx1 - idx2
  })
}

// 方法二：计数排序 O(n)
// 注意题眼：1. 数据范围 [1, 1000] 2. arr2元素各不相同
// Step1: 确定arr1上界，优化空间复杂度
// Step2: 统计所有元素出现的频率 cnt
// Step3: 按照 arr2 的顺序，填充在arr2中出现过的元素
// Step4: 填充 cnt 中剩余的元素
function relativeSortArray(arr1, arr2) {
  const upper = Math.max(...arr1) // O(n)
  const cnt = Array(upper + 1).fill(0)
  arr1.forEach(x => ++cnt[x]) // O(n)
  let idx = 0
  arr2.forEach(n => {
    while (cnt[n]-- > 0) {
      arr1[idx++] = n
    }
  })
  for (let n = 0; n < cnt.length; ++n) {
    while (cnt[n]-- > 0) {
      arr1[idx++] = n
    }
  }
  return arr1
}

// ---- test case ----
var arr1 = [2,3,1,3,2,4,6,7,9,2,19]
var arr2 = [2,1,4,3,9,6]
console.log(relativeSortArray(arr1, arr2))
console.log(arr1)
