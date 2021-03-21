/**
 * https://leetcode-cn.com/problems/n-queens/
 * 51. N 皇后 | hard
 */

/**
 * 构建结果表示形式
 * @param {Array} results 二维数组，每一项是一个可行解
 * @param {Number} n N皇后问题的N
 * @returns {Array} 结果
 */
function buildResultsBoard(results, n) {
  const board = []
  results.forEach(res => {
    const matrix = []
    res.forEach(i => {
      const line = '.'.repeat(i) + 'Q' + '.'.repeat(n - i - 1)
      matrix.push(line)
    })
    board.push(matrix)
  })
  return board
}

// DFS
function solveNQueens(n) {
  if (n < 1) return [[]]
  const results = []
  const cols = new Set()  // 竖
  const pies = new Set()  // 撇
  const nas = new Set()   // 捺

  const dfs = (i, curState) => {
    if (i >= n) {
      results.push(curState)
      return
    }
    for (let j = 0; j < n; ++j) {
      if (cols.has(j) || pies.has(i + j) || nas.has(i - j)) continue
      cols.add(j)
      pies.add(i + j)
      nas.add(i - j)
      dfs(i + 1, curState.concat([j]))
      cols.delete(j)
      pies.delete(i + j)
      nas.delete(i - j)
    }
  }

  dfs(0, [])
  return buildResultsBoard(results, n)
}

// ---- test case ----
// console.log(buildResultsBoard([
//   [1, 3, 0, 2],
//   [2, 0, 3, 1],
// ], 4))
console.log(solveNQueens(4))
