/**
 * https://leetcode-cn.com/problems/n-queens/
 * 51. N 皇后 | hard
 *
 */

function buildResult (res, n) {
  const graphes = []
  res.forEach(state => {
    const graph = []
    state.forEach(bit => {
      let lineStr = ''
      for (let i = 0; i < n; ++i) {
        const lastBit = bit & 1
        bit = bit >> 1
        lineStr = (lastBit ? 'Q' : '.') + lineStr
      }
      graph.push(lineStr)
    })
    graphes.push(graph)
  })
  return graphes
}

function solveNQueens(n) {
  if (n < 1) return []

  /**
   * DFS
   * @param {number} row 当前遍历到第几行
   * @param {number} col 不能用的列
   * @param {number} pie 不能用的撇
   * @param {number} na  不能用的捺
   * 副作用：修改 res
   */
  const dfs = (row, col, pie, na, state) => {
    if (row >= n) {
      res.push(state)
      return
    }
    let bits = (~(col | pie | na)) & ((1 << n) - 1) // 取得所有得空位
    while (bits) {
      const pos = bits & (-bits) // 最低可用位
      // console.log("🚀",
      //   bits.toString(2).padStart(4, '0'),
      //   pos.toString(2).padStart(4, '0')
      // )
      bits = bits & (bits - 1)
      dfs(row + 1, col | pos, (pie | pos) << 1, (na | pos) >> 1, state.concat([pos]))
    }
  }

  let res = []
  dfs(0, 0, 0, 0, [])
  // console.log("🚀🚀🚀", res)
  return buildResult(res, n)
}

// ---- test case ----
console.log(solveNQueens(4))
