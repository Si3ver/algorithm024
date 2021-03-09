/**
 * https://leetcode-cn.com/problems/container-with-most-water/
 * 011 盛水最多的容器 medium
 * 
 * 思路：
 * 1. 暴力枚举 O(n^2)
 * 2. 双指针，矮的挪位置
 */

// 解法一： O(n^2)
const maxArea1 = function(a) {
  if (Object.prototype.toString.apply(a) !== '[object Array]'
  || a.length < 2) return 0
  const _getArea = function(a, i, j) {
    return (j - i) * Math.min(a[i], a[j])
  }
  let max = 0
  for (let i = 0; i < a.length - 1; ++i) {
    for (let j = i + 1; j < a.length; ++j) {
      const area = _getArea(a, i, j)
      max = Math.max(max, area)
    }
  }
  return max
}

console.log(maxArea1([1,8,6,2,5,4,8,3,7]))
console.log(maxArea1([1,1]))
console.log(maxArea1([4,3,2,1,4]))
console.log(maxArea1([1,2,1]))

// 解法二： O(n) 核心：移动短板，area可能会变大；移动长板，area只会不变或变小。因此，双指针，每次移动短板即可。
const maxArea = function(A) {
  if (!Array.isArray(A) || A.length < 2) return 0
  let max = 0, l = 0, r = A.length - 1
  while (l < r) {
    const minHeight = A[l] < A[r] ? A[l++] : A[r--]
    const area = minHeight * (r - l + 1)
    max = Math.max(max, area)
  }
  return max
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1,1]))
console.log(maxArea([4,3,2,1,4]))
console.log(maxArea([1,2,1]))
