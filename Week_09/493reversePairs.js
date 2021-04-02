/**
 * https://leetcode-cn.com/problems/reverse-pairs/
 * 493. 翻转对 | hard
 */

// 解法一：暴力 O(n^2)
function reversePairs(arr) {
  const n = arr.length
  if (n < 2) return 0
  let cnt = 0
  for (let i = 0; i < n - 1; ++i) {
    for (let j = i + 1; j < n; ++j) {
      if (arr[i] > 2 * arr[j]) ++cnt
    }
  }
  return cnt
}

// 解法二：归并排序 O(nlogn)
function reversePairs(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return 0
  const mid = left + ((right - left) >> 1)
  const cnt1 = reversePairs(arr, left, mid)
  const cnt2 = reversePairs(arr, mid + 1, right)
  return merge(arr, left, mid, right, cnt1 + cnt2)
}

function merge(arr, left, mid, right, cnt) {
  // 统计逆序对的逻辑
  let i = left, j = mid + 1
  while (i <= mid && j <= right) {
    if (arr[i] > 2 * arr[j]) {
      cnt += mid - i + 1  // 左边数组的i之后的元素与j都形成翻转对
      ++j
    } else {
      ++i
    }
  }
  // 归并排序逻辑
  const tmp = Array(right - left + 1)
  let k = 0
  i = left
  j = mid + 1
  while (i <= mid && j <= right) {
    tmp[k++] = arr[i] <= arr[j] ? arr[i++] : arr[j++]
  }
  while (i <= mid)   tmp[k++] = arr[i++]
  while (j <= right) tmp[k++] = arr[j++]
  for (let idx = 0; idx < tmp.length; ++idx) {
    arr[left + idx] = tmp[idx]
  }
  return cnt
}

// TODO 解法三：树状数组 O(nlogn)

// ---- test case ----
console.log(reversePairs([1, 3, 2, 3, 1]))  // 2
console.log(reversePairs([2, 4, 3, 5, 1]))  // 3
