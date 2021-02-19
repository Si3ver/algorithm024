/**
 * https://leetcode-cn.com/problems/permutations/
 * 思路1：回溯
 * 利用splice 和 slice拷贝，性能较差
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  const res = []

  const helper = (path, part) => {
    // console.log("🚀 ~ helper", path, part)
    if (path.length >= nums.length) {
      res.push(path.slice())
      return
    }
    for(let i = 0; i < part.length; ++i) {
      const val = part[i]
      part.splice(i, 1)
      path.push(val)
      helper(path.slice(), part.slice())
      path.pop()
      part.splice(i, 0, val)
    }
  }

  helper([], nums.slice())
  return res
}

// ---- test case ----
console.log(permute([1,2,3]))

