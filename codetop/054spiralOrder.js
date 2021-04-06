/**
 * https://leetcode-cn.com/problems/spiral-matrix/
 * 54. 螺旋矩阵 | medium
 */

function spiralOrder (A) {
  const m = A.length, n = A[0].length
  const visited = [...Array(m)].map(() => Array(n).fill(0))
  let dir = 0, c = 0, r = 0
  const dr = [0, 1,  0, -1]
  const dc = [1, 0, -1,  0]
  const res = []
  for (let i = 0; i < m * n; ++i) {
    res.push(A[r][c])
    visited[r][c] = 1
    let nr = r + dr[dir]
    let nc = c + dc[dir]
    if (nr < 0 || nr >= m || nc < 0 || nc >= n || visited[nr][nc] === 1) {
      dir = (dir + 1) % 4
      nr = r + dr[dir]
      nc = c + dc[dir]
    }
    r = nr
    c = nc
  }
  return res
}

// ---- test case ----
console.log(spiralOrder(
  [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]
))
console.log(spiralOrder(
  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
  ]
))
