/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function(nums) {
  const res = []

  const helper = (path, part) => {
    if (path.length >= nums.length) {
      res.push(path.slice())
      return
    }
    for(let i = 0; i < part.length; ++i) {
      if (i > 0 && part[i] === part[i - 1]) continue // 去重
      const val = part[i]
      path.push(val)
      part.splice(i, 1)
      helper(path, part)
      path.pop()
      part.splice(i, 0, val)
    }
  }

  helper([], nums.sort((x, y) => x - y).slice())
  return res
}

// ---- test case ----
console.log(permuteUnique([1,2,3]))
console.log(permuteUnique([1,1,2]))
console.log(permuteUnique([1,2,1]))
