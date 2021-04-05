/**
 * https://leetcode-cn.com/problems/reverse-string-ii/
 * 541. 反转字符串 II
 */

function swap(arr, i, j) {
  if (i !== j) {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }
}

// 双指针
function reverseStr(s, k) {
  const arr = s.split('')
  for (let i = 0; i < s.length; i += 2 * k) {
    let start = i
    let end = Math.min(i + k - 1, arr.length - 1)
    while (start < end) {
      swap(arr, start++, end--)
    }
  }
  return arr.join('')
}

// ---- test case ----
console.log(reverseStr('abcdefg', 2))
