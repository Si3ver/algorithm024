/**
 * https://leetcode-cn.com/problems/maximal-square/
 * 221. 最大正方形 | medium
 * 
 */

const maximalSquare = function(A) {

}

// ---- test case ----
const m1 = [
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
console.log(maximalSquare(m1))
const m2 = [
  ["0","1"],
  ["1","0"]
]
console.log(maximalSquare(m2))
const m3 = [["0"]]
console.log(maximalSquare(m3))
