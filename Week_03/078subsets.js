/**
 * https://leetcode-cn.com/problems/subsets/
 * 思路：
 * 分治，求子问题。每一步有两种情况，选or不选
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
  if (Object.prototype.toString.call(nums) !== '[object Array]' || nums.length < 1) return []
  const res = []

  const helper = (curIdx, list) => {
    if (curIdx === nums.length) {
      res.push(list.slice())
      return
    }
    helper(curIdx + 1, list)
    const listClone = list.slice()
    listClone.push(nums[curIdx])
    helper(curIdx + 1, listClone)
  }
  helper(0, [])
  return res
}


// ---- test case ---
console.log(subsets([1]))
console.log(subsets([1,2]))
console.log(subsets([1,2,3]))
console.log(subsets([1,2,3,4]))


/*
[0]
[[], [0]]

[0, 1]
[[], [0], [1], [0,1]]

[0, 1, 2]
[[], [0], [1], [2], [0, 1], [0, 2], [1, 2], [1,2,3]]
*/
