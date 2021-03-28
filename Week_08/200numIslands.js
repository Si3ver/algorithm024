/**
 * https://leetcode-cn.com/problems/number-of-islands/
 * 200. 岛屿数量 | medium
 * 
 */

function numIslands(A) {

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
