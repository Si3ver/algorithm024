/**
 * https://leetcode-cn.com/problems/sliding-puzzle/
 * 773. 滑动谜题 | hard
 */

// BFS
const slidingPuzzle = function(A) {

}

// ---- test case ----
const A1 = [
  [1, 2, 3],
  [4, 0, 5],
]
const A2 = [
  [1, 2, 3],
  [5, 4, 0],
]
const A3 = [
  [4, 1, 2],
  [5, 0, 3],
]
console.log(slidingPuzzle(A1))  // 1
console.log(slidingPuzzle(A2))  // -1
console.log(slidingPuzzle(A3))  // 5
