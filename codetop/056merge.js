/**
 * https://leetcode-cn.com/problems/merge-intervals/
 * 56. 合并区间 | medium
 */

function merge(intervals) {
  if (!intervals.length) return intervals
  intervals.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1])
  let prev = intervals[0]
  let res = [prev]
  for (var curr of intervals) {
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1])
    } else {
      res.push(curr)
      prev = curr
    }
  }
  return res
}

// ---- test case ----
console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
// [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]]))
// [[1,5]]
