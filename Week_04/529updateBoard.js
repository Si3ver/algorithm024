/**
 * https://leetcode-cn.com/problems/minesweeper/
 * 529. 扫雷游戏
 * medium
 */

/*
1. 玩家未知区域
  + M 地雷
  + E 未点击的空地
2. 玩家已知区域
  + B 此次和周围都无地雷
  + X 此处为地雷
  + Digit 此处无地雷，且周围有地雷

分析
1. 踩中地雷（M）: M -> X, 停止
2. 未踩中地雷（E）:
  1. 周围有地雷: E -> Digit, 停止搜索 （等待玩家点击）
  2. 周围无地雷: E -> B，搜索周围8个点，遇到 E，递归搜索
*/

// 解法一：DFS (递归)
const updateBoard1 = function(board, click) {
  const m = board.length, n = board[0].length
  const [x, y] = click
  if (board[x][y] === 'M') {
    board[x][y] = 'X'
  } else {
    // cnt 统计周围8个点的地雷数
    let cnt = 0
    for (let i = -1; i <= 1; ++i) {
      for(let j = -1; j <= 1; ++j) {
        if (i === 0 && j === 0) continue
        const r = x + i, c = y + j
        if (r < 0 || r >= m || c < 0 || c >= n) continue
        if (board[r][c] === 'M' || board[r][c] === 'X') ++cnt
      }
    }
    if (cnt > 0) {
      board[x][y] = String(cnt)
    } else {
      board[x][y] = 'B'
      for(let i = -1; i <= 1; ++i) {
        for(let j = -1; j <= 1; ++j) {
          if (i === 0 && j === 0) continue
          const r = x + i, c = y + j
          if (r < 0 || r >= m || c < 0 || c >= n) continue
          if (board[r][c] === 'E') updateBoard1(board, [r, c])
        }
      }
    }
  }

  return board
}

// 解法二：BFS (非递归，手动维护队列)
const updateBoard2 = function(board, click) {
  const m     = board.length,
        n     = board[0].length,
        queue = [click]

  while (queue.length) {
    const [x, y] = queue.pop()
    if (board[x][y] === 'M') {
      board[x][y] = 'X'
    } else {
      let cnt = 0
      for (let i = -1; i <= 1; ++i) {
        for (let j = -1; j <= 1; ++j) {
          if (i === 0 && j === 0) continue
          const r = x + i, c = y + j
          if (r < 0 || r >= m || c < 0 || c >= n) continue
          if (board[r][c] === 'M' || board[r][c] === 'X') ++cnt
        }
      }
      if (cnt > 0) {
        board[x][y] = String(cnt)
      } else {
        board[x][y] = 'B'
        for (let i = -1; i <= 1; ++i) {
          for (let j = -1; j <= 1; ++j) {
            if (i === 0 && j === 0) continue
            const r = x + i, c = y + j
            if (r < 0 || r >= m || c < 0 || c >= n) continue
            if (board[r][c] === 'E') {
              queue.unshift([r, c])
              board[r][c] = 'B' // 避免被重复加入queue
            }
          }
        }
      }
    }
  }
  return board
}

// ---- test cases ----
const board1 = [
  ['E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'M', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E'],
]
const board2 = [
  ['B', '1', 'E', '1', 'B'],
  ['B', '1', 'M', '1', 'B'],
  ['B', '1', '1', '1', 'B'],
  ['B', 'B', 'B', 'B', 'B'],
]

// console.log(updateBoard1(board1, [3, 0]))
// console.log(updateBoard1(board2, [1, 2]))

console.log(updateBoard2(board1, [3, 0]))
console.log(updateBoard2(board2, [1, 2]))
