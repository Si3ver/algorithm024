/**
 * https://leetcode-cn.com/problems/smallest-string-with-a-given-numeric-value/
 * 1663. 具有给定数值的最小字符串 | medium
 */

// 贪心法, 从右边往左填最大能放的字母
function getSmallestString(n, k) {
  const alphbets = [...' abcdefghijklmnopqrstuvwxyz']
  let str = ''
  for (let i = n - 1; i >= 0; --i) {
    let target = Math.min(k - i, 26)
    k -= target
    str = alphbets[target] + str
  }
  return str
}

// ---- test case ----
console.log(getSmallestString(3, 27))
console.log(getSmallestString(5, 73))
