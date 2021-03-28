/**
 * https://leetcode-cn.com/problems/n-queens-ii/
 * 52. N皇后 II | hard
 * 
 */

// 位运算
function totalNQueens(n) {
  if (n < 1) return 0

  /**
   * DFS
   * @param {number} row 当前遍历到第几行
   * @param {number} col 不能用的列
   * @param {number} pie 不能用的撇
   * @param {number} na  不能用的捺
   * 副作用：修改 cnt 值
   */
  const dfs = (row, col, pie, na) => {
    if (row >= n) {
      ++cnt
      console.log("🚀🚀🚀", col, pie, na)
      return
    }
    let bits = (~(col | pie | na)) & ((1 << n) - 1) // 取得所有得空位
    while (bits) {
      const pos = bits & (-bits) // 最低可用位
      console.log("🚀",
        bits.toString(2).padStart(4, '0'),
        pos.toString(2).padStart(4, '0')
      )
      bits = bits & (bits - 1)
      dfs(row + 1, col | pos, (pie | pos) << 1, (na | pos) >> 1)
    }
  }

  let cnt = 0
  dfs(0, 0, 0, 0)
  return cnt
}

// ---- test case ----
console.log(totalNQueens(4))
