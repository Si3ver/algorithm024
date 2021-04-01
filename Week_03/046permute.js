/**
 * https://leetcode-cn.com/problems/permutations/
 * 思路：分治 + 回溯
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
function dfs (path, remain, res) {
  // terminator
  if (remain.length === 0) {
    res.push(path.slice())
    return
  }
  for (let i = 0; i < remain.length; ++i) {
    // process
    const [val] = remain.splice(i, 1)
    path.push(val)
    // drill down
    dfs(path, remain, res)
    // revert status
    path.pop()
    remain.splice(i, 0, val)
  }
}

function permute(arr) {
  const res = []
  dfs([], arr, res)
  return res
}

// ---- test case ----
console.log(permute([1,2,3]))
