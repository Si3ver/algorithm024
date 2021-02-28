/**
 * https://leetcode-cn.com/problems/majority-element-ii/
 * 
 * 229. 求众数 II
 * medium
 * 
 * 
 */

// 解法一：扩展摩尔投票法 O(n) 推荐！
const majorityElement = function(nums) {
  if (Object.prototype.toString.call(nums) !== '[object Array]' || nums.length < 2) return nums

  const cnt = new Array(2).fill(0),
        res = new Array(2).fill(null)
  for(const num of nums) {
    if (num === res[0]) {
      ++cnt[0]
    } else if (num === res[1]) {
      ++cnt[1]
    } else if (cnt[0] === 0) {
      res[0] = num
      ++cnt[0]
    } else if (cnt[1] === 0) {
      res[1] = num
      ++cnt[1]
    } else {
      --cnt[0]
      --cnt[1]
    }
  }

  const minCnt = Math.floor(nums.length / 3)
  const realCnt = new Array(2).fill(0)
  nums.forEach(num => {
    if (num === res[0]) {
      ++realCnt[0]
    } else if (num === res[1]) {
      ++realCnt[1]
    }
  })

  return res.filter((_, idx) => realCnt[idx] > minCnt)
}

// 解法二：哈希表统计 O(n) 但是空间复杂度不符合题目要求！！
const majorityElement2 = function(nums) {
  if (Object.prototype.toString.call(nums) !== '[object Array]' || nums.length < 2) return nums

  const map = new Map(),
        minCnt = Math.floor(nums.length / 3),
        res = []
  for(const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
  }
  for(let [key, val] of map) {
    if (val > minCnt) {
      res.push(key)
    }
  }
  return res
}


// ---- test case ----
// console.log(majorityElement([3]))
// console.log(majorityElement([1, 2, 3]))
// console.log(majorityElement([3, 2, 3]))
// console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]))

// console.log(majorityElement2([3]))
// console.log(majorityElement2([1, 2, 3]))
console.log(majorityElement2([3, 2, 3]))
console.log(majorityElement2([1, 1, 1, 3, 3, 2, 2, 2]))
