/**
 * https://leetcode-cn.com/problems/valid-sudoku/
 * 36. 有效的数独 | medium
 */

// O(1)
const isValidSudoku = function(A) {
  for (let i = 0; i < 9; ++i) {
    const row = new Set()
    const col = new Set()
    const box = new Set()

    for (let j = 0; j < 9; ++j) {
      const rItem = A[i][j]
      const cItem = A[j][i]
      const bItem = A[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)]
      
      if (rItem !== '.') {
        if (row.has(rItem)) return false
        row.add(rItem)
      }
      if (cItem !== '.') {
        if (col.has(cItem)) return false
        col.add(cItem)
      }
      if (bItem !== '.') {
        if (box.has(bItem)) return false
        box.add(bItem)
      }
    }
  }
  return true
}

// ---- test case ----
console.log(isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
])) // true
