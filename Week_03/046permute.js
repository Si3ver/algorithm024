/**
 * https://leetcode-cn.com/problems/permutations/
 * 思路：分治 + 回溯
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  if (Object.prototype.toString.call(nums) !== '[object Array]' || nums.length < 1) return []
  const dfs = (path, remain) => {
    // terminator
    if (remain.length === 0) {
      res.push(path.slice())
      return
    }
    for(let i = 0; i < remain.length; ++i) {
      // process (choose one element of 【remain】 add into 【path】)
      const [ val ] = remain.splice(i, 1)
      path.push(val)
      // drill down
      dfs(path, remain)
      // revere states
      path.pop()
      remain.splice(i, 0, val)
    }
  }
  const res = []
  dfs([], nums)
  return res
}

// ---- test case ----
console.log(permute([1,2,3]))
