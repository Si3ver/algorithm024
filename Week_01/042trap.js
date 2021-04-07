/**
 * https://leetcode.com/problems/trapping-rain-water/
 * 11. 接雨水（亚马逊、字节跳动、高盛集团、Facebook 在半年内面试常考）
 * hard ｜ leetcode-042 | array
 * 
 * 思路： maxLo、maxHi 记录遍历过的柱子中，左右最高柱子
 */

function trap (A) {
  let lo = 0, hi = A.length - 1
  let res = 0
  let maxLo = 0, maxHi = 0
  while (lo < hi) {
    if (A[lo] <= A[hi]) {   // 左边矮于右边
      if (A[lo] >= maxLo) { // 左边提高了
        maxLo = A[lo]
      } else {              // 左边没提高，可以积累高度差个雨水
        res += maxLo - A[lo]
      }
      ++lo
    } else {
      if (A[hi] >= maxHi) {
        maxHi = A[hi]
      } else {
        res += maxHi - A[hi]
      }
      --hi
    }
    console.log(lo, hi, maxLo, maxHi, res)
  }
  return res
}

// ---- test case ----
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(trap([4,2,0,3,2,5]))
