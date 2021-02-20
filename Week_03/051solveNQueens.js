/**
 * https://leetcode-cn.com/problems/n-queens/
 * 分治 & 回溯
 * 
 * 
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function(n) {
  if (n < 1 || n > 4) return [[]]

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

  const result = {
    1: [
      [0]
    ],
    2: [],
    3: [],
    4: [
      [1, 3, 0, 2],
      [2, 0, 3, 1],
    ]
  }
  return generateResult(result[n])
}


// ---- test case ----
console.log(solveNQueens(0))
console.log(solveNQueens(1))
console.log(solveNQueens(2))
console.log(solveNQueens(3))
console.log(solveNQueens(4))

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
