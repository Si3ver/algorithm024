/**
 * https://leetcode-cn.com/problems/search-a-2d-matrix/
 * 
 * 74. 搜索二维矩阵
 * 
 *  0  1  2  3   4  5  6  7  8  9  10 11
 * 00 01 02 03, 10 11 12 13, 20 21 22 23
 * m = 3, n = 4
 * 
 * x -> i, j
 * 
 * i = Math.floor(x / n), j = x % n
 */

const searchMatrix = function(matrix, target) {
  const _getVal = (x) => {
    const i = Math.floor(x/n)
    const j = x % n
    return matrix[i][j] 
  }
  const m = matrix.length, n = matrix[0].length
  let l = 0, r = m * n - 1
  while (l <= r) {
    const mid = l + ((r - l) >> 1),
          val = _getVal(mid)
    if (val === target) return true
    if (val > target) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return false
}

// ---- test case ----
const matrix = [
  [ 1,  3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
]
console.log(searchMatrix(matrix, 3))
console.log(searchMatrix(matrix, 13))
