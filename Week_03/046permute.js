/**
 * https://leetcode-cn.com/problems/permutations/
 * 思路：分治 + 回溯
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  if (Object.prototype.toString.call(nums) !== '[object Array]' || nums.length < 1) return []
  const res = []
  const dfs = (path, list) => {
    if (path.length >= nums.length) { // terminator
      res.push(path.slice())
      return
    }
    for(let i = 0; i < list.length; ++i) {
      const [val] = list.splice(i, 1)
      path.push(val)
      dfs(path, list) // process & dirll down
      path.pop()  // revert states
      list.splice(i, 0, val)
    }
  }
  dfs([], nums.slice())
  return res
}

// ---- test case ----
console.log(permute([1,2,3]))

