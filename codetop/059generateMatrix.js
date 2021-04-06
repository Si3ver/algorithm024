/**
 * https://leetcode-cn.com/problems/spiral-matrix-ii/
 * 59. 螺旋矩阵 II | medium
 */

// 1. 计算 nr，nc
// 2. 判断 nr，nc 是否合法
// 3. 如果不合法，转向，并用新的方向重新计算nr，nc
// 4. nr，nc 赋值给 r, c
function generateMatrix (n) {
  const res = [...Array(n)].map(() => Array(n).fill(0))
  const dr = [0, 1, 0, -1]
  const dc = [1, 0, -1, 0]
  let dir = 0, r = 0, c = 0
  for (let i = 0; i < n * n; ++i) {
    res[r][c] = i + 1
    let nr = r + dr[dir]
    let nc = c + dc[dir]
    if (nr < 0 || nr >= n || nc < 0 || nc >= n || res[nr][nc] !== 0) {
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
console.log(generateMatrix(3))
console.log(generateMatrix(1))
