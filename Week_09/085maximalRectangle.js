/**
 * https://leetcode-cn.com/problems/maximal-rectangle/
 * 85. 最大矩形
 */

function maximalRectangle(matrix) {

}

// ---- test case ----
console.log(maximalRectangle([
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
]))                                           // 6
console.log(maximalRectangle([]))             // 0
console.log(maximalRectangle([['0']]))        // 0
console.log(maximalRectangle([['1']]))        // 1
console.log(maximalRectangle([['0',  '0']]))  // 0
