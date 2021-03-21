/**
 * https://leetcode-cn.com/problems/sudoku-solver/
 * 37. 解数独 | hard
 */

// set 交集
function intersection(set1, set2) {
  return new Set([...set1].filter(x => set2.has(x)))
}

function solveSudoku(A) {
  const init = (n) => 
    Array(n).fill(0)
      .map(
        _ => 
          new Set(
            Array(n).fill(0)
              .map(
                (_, i) => i + 1
              )
          )
      )
  const row = init(9)   // 行剩余可用数字
  const col = init(9)   // 列剩余可用数字
  const box = init(9)   // 块剩余可用数字
  const empty = []      // 收集需填数位置
  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      if (A[i][j] === '.') {
        empty.push([i, j])
      } else {
        const val = Number(A[i][j])
        row[i].delete(val)
        col[j].delete(val)
        box[Math.floor(i / 3) * 3 + Math.floor(j / 3)].delete(val)
      }
    }
  }
  // console.log(row, col, box, empty)
  backtrack(A, row, col, box, empty, 0)
}

// 对于每一个 empty 坐标，试探所有 set 交集中的数值，没有路了就回溯
function backtrack(A, row, col, box, empty, iter) {
  if (iter === empty.length) return true
  const [i, j] = empty[iter]
  const b = Math.floor(i / 3) * 3 + Math.floor(j / 3)
  const validSet = intersection(intersection(row[i], col[j]), box[b])
  // console.log("🚀validSet", i, j, validSet)
  for (const val of validSet) {
    // console.log("🚀", iter, ': ', i, j, val)
    row[i].delete(val)
    col[j].delete(val)
    box[b].delete(val)
    A[i][j] = String(val)
    if (backtrack(A, row, col, box, empty, iter + 1)) {
      return true
    }
    row[i].add(val)
    col[j].add(val)
    box[b].add(val)
  }
  return false
}

// ---- test case ----
const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]
solveSudoku(board)
console.log(board)
