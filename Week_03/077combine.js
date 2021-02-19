/**
 * https://leetcode-cn.com/problems/combinations/
 * 思路：回溯 + 剪枝
 * 
 * 
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function(n, k) {
  const res = []
  /**
   * 辅助函数
   * @param {*} start 枚举起点
   * @param {*} path “部分解”
   */
  const helper = (start, path) => {
    if (path.length === k) {
      res.push(path.slice())
      return
    }
    for(let i = start; i <= n; ++i) {
      path.push(i)  // 选择
      helper(i + 1, path)
      path.pop()  // 撤销选择
    }
  }

  helper(1, [])
  return res
}

// ---- test case ----
console.log(combine(4, 2))
console.log(combine(4, 3))
console.log(combine(5, 3))

