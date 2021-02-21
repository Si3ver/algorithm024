/**
 * https://leetcode-cn.com/problems/n-queens/
 * @param {number} n
 * @return {string[][]}
 */

// 解法一：【DFS 递归搜索 + 剪枝】
const solveNQueens = function(n) {
  if (n < 1) return [[]]

  const result = [],
        cols = new Set(),
        pie = new Set(),  // 撇
        na = new Set()  // 捺

  const dfs = (i, curState) => {
    // terminator
    if (i >= n) {
      result.push(curState)
      return
    }
    // process
    for(let j = 0; j < n; ++j) {
      if (cols.has(j) || pie.has(i + j) || na.has(i - j))
        continue
      // drill down
      cols.add(j)
      pie.add(i + j)
      na.add(i - j)
      dfs(i + 1, curState.concat([j]))
      // revert states
      cols.delete(j)
      pie.delete(i + j)
      na.delete(i - j)
    }
  }

  // 把 result 转换成题目要求的格式
  const generateResult = (result) => {
    const board = []
    result.forEach(res => {
      const matrix = []
      res.forEach(i => {
        const line = '.'.repeat(i) + 'Q' + '.'.repeat(n - i - 1)
        matrix.push(line)
      })
      board.push(matrix)
    })
    return board
  }

  dfs(0, [])
  return generateResult(result)
}

// TODO 解法二：位运算

// ---- test case ----
new Array(10).fill(0).forEach((item, idx) => {
  const g = solveNQueens(idx)
  console.log(`---- ${idx}, 共${g.length}种解法 ----`)
  // console.log(g)
})

/*
输入： n = 4
中间结果result：
[
  [1, 3, 0, 2],
  [2, 0, 3, 1],
]

输出结果：
[
  [
    '.Q..',
    '...Q',
    'Q...',
    '..Q.',
  ],
  [
    '..Q.',
    'Q...',
    '...Q',
    '.Q..',
  ],
]
*/
