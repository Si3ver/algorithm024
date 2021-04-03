/**
 * https://leetcode-cn.com/problems/merge-intervals/
 * 56. 合并区间 | medium
 */

// O(nlogn)
function merge(A) {
  if (A.length < 2) return A
  A.sort(([start1, dest1], [start2, dest2]) => {  // 优先级排序，优先按起点排序，起点相同则按终点排序 O(nlogn)
    return start1 === start2 ? dest1 - dest2 : start1 - start2
  })

  let prev = A[0]     // 上一个区间
  const res = [prev]
  for (let i = 1; i < A.length; ++i) {
    const curr = A[i]
    if (curr[0] <= prev[1]) { // 当前区间可以与上一区间合并
      prev[1] = Math.max(prev[1], curr[1])
    } else {                  // 无法合并，推入res
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
