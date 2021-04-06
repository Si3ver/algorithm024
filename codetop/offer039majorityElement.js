/**
 * https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/
 * 剑指 Offer 39. 数组中出现次数超过一半的数字
 */

// 摩尔投票法
function majorityElement(arr) {
  const n = arr.length
  if (n < 1) return
  let res = arr[0], cnt = 1
  for (let i = 1; i < n; ++i) {
    if (arr[i] === res) {
      ++cnt
    } else {
      if (cnt === 0) {
        cnt = 1
        res = arr[i]
      } else {
        --cnt
      }
    }
  }
  return res
}

// ---- test case ----
console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]))
console.log(majorityElement([3, 2, 3]))
