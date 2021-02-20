/**
 * https://leetcode-cn.com/problems/subsets/
 * 思路1：
 * 分治，求子问题。每一步有两种情况，选or不选
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
  if (Object.prototype.toString.call(nums) !== '[object Array]' || nums.length < 1) return [[]]
  const res = []

  const dfs = (index, list) => {1
    // terminator
    if (index === nums.length) {
      res.push(list.slice())
      return
    }
    // process1: not pick
    dfs(index + 1, list)
    // process2: pick
    list.push(nums[index])
    dfs(index + 1, list)
    // revert states
    list.pop()
  }

  dfs(0, [])
  return res
}


// 思路2: 迭代
const subsets2 = function(nums) {
  if (Object.prototype.toString.call(nums) !== '[object Array]' || nums.length < 1) return [[]]

  const res = [[]]
  nums.forEach(num => {
    res.forEach(r => {
      res.push(r.concat(num))
    })
  })
  return res
}



// ---- test case ---
// console.log(subsets([1]))
// console.log(subsets([1,2]))
// console.log(subsets([1,2,3]))
// console.log(subsets([1,2,3,4]))
console.log(subsets2([1,2,3]))
console.log(JSON.stringify(subsets2([1,2,3])))


/*
[0]
[[], [0]]

[0, 1]
[[], [0], [1], [0,1]]

[0, 1, 2]
[[], [0], [1], [2], [0, 1], [0, 2], [1, 2], [1,2,3]]
*/
