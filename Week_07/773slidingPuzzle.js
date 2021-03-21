/**
 * https://leetcode-cn.com/problems/sliding-puzzle/
 * 773. 滑动谜题 | hard
 * 
 * 0, 1, 2
 * 3, 4, 5
 */

function swapArr(arr, i, j) {
  if (i !== j &&
      i >= 0 && i < arr.length &&
      j >= 0 && j < arr.length) {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }
}

// BFS [[str, idxOf0]...]
const slidingPuzzle = function(A) {
  const moves = [
    [1, 3],
    [0, 2, 4],
    [1, 5],
    [0, 4],
    [1, 3, 5],
    [2, 4],
  ]
  const used = new Set()
  const str = A[0].join('') + A[1].join('')
  let queue = [[str, str.indexOf('0')]]
  let cnt = 0
  while (queue.length > 0) {
    const nextQueue = []
    for (let idx = 0; idx < queue.length; ++idx) {
      const [s, i] = queue[idx]
      used.add(s)
      if (s === '123450') return cnt
      const curArr = s.split('')
      for (const move of moves[i]) {
        const nextArr = [].concat(curArr)
        swapArr(nextArr, move, i)
        const nextStr = nextArr.join('')
        if (!used.has(nextStr)) {
          nextQueue.push([nextStr, move])
        }
      }
    }
    ++cnt
    queue = nextQueue
  }
  return -1
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
