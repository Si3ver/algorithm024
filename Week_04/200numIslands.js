/**
 * https://leetcode-cn.com/problems/number-of-islands/
 * 200. 岛屿数量
 * medium
 */

const numIslands = function(grid) {
  // 传染给其他的元素，标记为零
  const dfsMarking = function(i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== '1') return
    grid[i][j] = '0'
    dfsMarking(i + 1, j)
    dfsMarking(i - 1, j)
    dfsMarking(i, j + 1)
    dfsMarking(i, j - 1)
  }

  let cnt = 0,
      m = grid.length,
      n = grid[0].length

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] === '1') {
        dfsMarking(i, j)
        ++cnt
      }
    }
  }
  return cnt
}


// ---- test case ----
const grid1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
]
const grid2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
]
console.log(numIslands(grid1))
console.log(numIslands(grid2))
console.log(numIslands([[]]))
