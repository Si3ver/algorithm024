/**
 * https://leetcode.cn/problems/search-a-2d-matrix-ii
 *
 * 搜索二维矩阵 II
 *
 */

const searchMatrix = function(matrix, target) {
    const _getVal = (idx) => {
      const x = Math.floor(idx / n)
      const y = idx % n
      return matrix[x][y]
    }
    const m = matrix.length, n = matrix[0].length
    let lo = 0, hi = m * n - 1
    while (lo <= hi) {
      const mid = lo + ((hi - lo) >> 1)
      const val = _getVal(mid)
      if (val === target) {
        return true
      } else if (val > target){
        hi = mid - 1
      } else {
        lo = mid + 1
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
