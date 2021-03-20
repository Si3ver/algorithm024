/**
 * https://leetcode-cn.com/problems/shortest-path-in-binary-matrix/
 * 1091. 二进制矩阵中的最短路径
 * 
 * 
 */

// BFS, 有副作用
const shortestPathBinaryMatrix = function(A) {
  const n = A.length
  if (A[0][0] === 1 || A[n - 1][n - 1] === 1) {
    return -1
  } else if (n <= 2) {
    return n
  }
  const dx = [0,  0, 1, -1, 1, -1,  1, -1]
  const dy = [1, -1, 0,  0, 1,  1, -1, -1]
  const queue = [[0, 0, 2]]
  for (let idx = 0; idx < queue.length; ++idx) {
    const [i, j, level] = queue[idx]
    for (let dir = 0; dir < 8; ++dir) {
      const x = i + dx[dir]
      const y = j + dy[dir]
      if (x >= 0 && x < n &&
        y >= 0 && y < n &&
        A[x][y] === 0) {
        if (x === n - 1 && y === n - 1) return level
        queue.push([x, y, level + 1])
        A[x][y] = 1
      }
    }
  }
  return -1
}

// ---- test case ----
const grid1 = [
  [0, 1],
  [1, 0],
]
const grid2 = [
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
]
const grid3 = [
  [1, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
]
console.log(shortestPathBinaryMatrix(grid1))  // 2
console.log(shortestPathBinaryMatrix(grid2))  // 4
console.log(shortestPathBinaryMatrix(grid3))  // -1
