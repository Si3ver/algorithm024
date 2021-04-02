/**
 * https://leetcode-cn.com/problems/merge-intervals/
 * 56. 合并区间 | medium
 */

// O(nlogn)
function merge(A) {
  if (A.length < 2) return A
  A.sort(([s1, d1], [s2, d2]) => {
    return s1 === s2 ? d1 - d2 : s1 - s2
  })  // O(nlogn)
  let prev = A[0]
  const res = [prev]
  for (let i = 1; i < A.length; ++i) {
    const curr = A[i]
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
